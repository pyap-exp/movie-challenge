from django.db import models
from django.db.models import Model


class Movie(Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.CharField(max_length=100, blank=True, default='')
    linenos = models.BooleanField(default=False)

    class Meta:
        ordering = ['created']
