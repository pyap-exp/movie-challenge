from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from .serializers import MovieSerializer
from .models import Movie

from rest_framework import filters

class CustomSearchFilter(filters.SearchFilter):
    def get_search_fields(self, view, request):
        if request.query_params.get('title'):
            return ['title']
        return super().get_search_fields(view, request)

class MovieViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    search_fields = ["title"]

    def filter_queryset(self, queryset):#P#request, queryset, view):
        title = self.request.query_params.get("title",None)
        if title != None:
            return queryset.filter(title__icontains=title.lower())
        return Movie.objects.all()#.filter(title=title)

   # def get_queryset(self):
    #    """
    #    This view should return a list of all the purchases

    #    for the currently authenticated user.
    #        """
    #    title = self.request.title
        #title = self.request.get("title",None)
        #if self.request.title !=None:
        #    return Movie.objects.filter(title=self.request.title)
    #    return Movie.objects.all()#.filter(title=title)
