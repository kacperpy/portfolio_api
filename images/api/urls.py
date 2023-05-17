from django.conf import settings
from django.db import router
from django.urls import include, path
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from images.api.views import ImageViewSet
from images.api.views import ListImagesByFilterView

router = DefaultRouter()
router.register(r'images', ImageViewSet, basename='images')


urlpatterns = [
    path('', include(router.urls)),

    path(
        'filters/<str:name>/images/',
        ListImagesByFilterView.as_view(),
        name='filtered-images'
    )
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
