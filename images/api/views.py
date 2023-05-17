from rest_framework import generics, mixins, viewsets

from images.api.serializers import ImageReadSerializer
from images.models import Filter, Image


class ImageViewSet(mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageReadSerializer
    permission_classes = []
    lookup_field = 'uuid'


class ListImagesByFilterView(generics.ListAPIView):
    serializer_class = ImageReadSerializer
    permission_classes = []

    def get_queryset(self):
        request_filter = Filter.objects.get(
            uuid=self.kwargs.get('uuid')
        )
        return request_filter.images.all()
