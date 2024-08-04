from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .apps.apphealth import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'snippet', views.SnippetViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
