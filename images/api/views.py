from rest_framework import generics, mixins, viewsets
from images.api.paginators import CustomResultSetPaginator

from images.api.serializers import ImageReadSerializer, VideoClipReadSerializer
from images.models import Filter, Image, VideoClip


class ImageViewSet(mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageReadSerializer
    pagination_class = CustomResultSetPaginator
    permission_classes = []
    lookup_field = 'uuid'


class ListImagesByFilterView(generics.ListAPIView):
    serializer_class = ImageReadSerializer
    pagination_class = CustomResultSetPaginator
    permission_classes = []

    def get_queryset(self):
        request_filter = Filter.objects.get(
            name=self.kwargs.get('name')
        )
        return request_filter.images.all()


class ListHomePageImages(generics.ListAPIView):
    serializer_class = ImageReadSerializer
    pagination_class = CustomResultSetPaginator
    permission_classes = []

    def get_queryset(self):
        return Image.objects.filter(is_homepage=True)


class VideoClipViewSet(mixins.RetrieveModelMixin,
                       mixins.ListModelMixin,
                       viewsets.GenericViewSet):
    queryset = VideoClip.objects.all()
    serializer_class = VideoClipReadSerializer
    pagination_class = CustomResultSetPaginator
    permission_classes = []
    lookup_field = 'uuid'
