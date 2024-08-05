from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .apps.apphealth import views
from .apps.appmovie import views as movie_views

router = DefaultRouter()
router.register(r'movie', movie_views.MovieViewSet)
router.register(r'snippet', views.SnippetViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
