from rest_framework import serializers

from images.core.tools import get_formatted_date
from images.models import Image


class ImageReadSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    filter = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = [
            'uuid',
            'created_at',
            'media_file',
            'filter'
        ]

    def get_created_at(self, instance):
        return get_formatted_date(instance.created_at)

    def get_filter(self, instance):
        return instance.filter.name
