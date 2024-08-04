from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from .serializers import SnippetSerializer,UserSerializer
from .models import Snippet

class MovieViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
