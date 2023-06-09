from django.db import router
from django.urls import include, path

from rest_framework.routers import DefaultRouter

from images.api.views import ImageViewSet
from images.api.views import ListImagesByFilterView
from images.api.views import ListHomePageImages

router = DefaultRouter()
router.register(r'images', ImageViewSet, basename='images')


urlpatterns = [
    path('', include(router.urls)),

    path(
        'filters/<str:name>/images/',
        ListImagesByFilterView.as_view(),
        name='filtered-images'
    ),
    path(
        'homepage-images/',
        ListHomePageImages.as_view(),
        name='homepage-images'
    )
]
