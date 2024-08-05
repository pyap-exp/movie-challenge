from django.db import models
from django.db.models import Model



class Movie(Model):

    id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200, blank=True, default='')
    url = models.CharField(max_length=200, blank=True, default='')
    type = models.CharField(max_length=100, blank=True, default='')
    source = models.CharField(max_length=200, blank=True, default='')

    class Meta:
        ordering = ['created']

class Poster(Model):

    id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    movie_id = models.IntegerField()
    type = models.CharField(max_length=100, blank=True, default='')
    url = models.CharField(max_length=200, blank=True, default='')

    class Meta:
        ordering = ['created']
