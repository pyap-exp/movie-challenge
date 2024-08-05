from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Movie,Poster


class PosterSerializer(serializers.ModelSerializer):
    class Meta:
        lookup_field = 'movie_id'
        model = Poster
        fields = [ 'url', 'type']

class MovieSerializer(serializers.ModelSerializer):
    posters = serializers.SerializerMethodField()
    class Meta:
        model = Movie
        fields = ['title', 'url', 'source','posters']
    def get_posters(self, obj):
        datas = Poster.objects.filter(movie_id = obj.id)
        serializer = PosterSerializer(datas, many=True, context=self.context)
        return serializer.data
