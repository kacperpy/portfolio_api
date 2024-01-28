from rest_framework import serializers

from images.core.tools import get_formatted_date
from images.models import Image, VideoClip


class ImageReadSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    filter = serializers.SerializerMethodField()
    client = serializers.SerializerMethodField()
    file_name = serializers.SerializerMethodField()
    is_landscape = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = [
            'uuid',
            'created_at',
            'media_file',
            'filter',
            'client',
            'file_name',
            'caption',
            'is_landscape'
        ]

    def get_created_at(self, instance):
        return get_formatted_date(instance.created_at)

    def get_filter(self, instance):
        return instance.filter.name

    def get_client(self, instance):
        return instance.client.name

    def get_file_name(self, instance):
        return instance.media_file.name

    def get_is_landscape(self, instance):
        return instance.media_file.width > instance.media_file.height


class VideoClipReadSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    filter = serializers.SerializerMethodField()
    client = serializers.SerializerMethodField()
    file_name = serializers.SerializerMethodField()

    class Meta:
        model = VideoClip
        fields = [
            'uuid',
            'created_at',
            'media_file',
            'filter',
            'client',
            'file_name',
            'caption',
            'is_landscape'
        ]

    def get_created_at(self, instance):
        return get_formatted_date(instance.created_at)

    def get_filter(self, instance):
        return instance.filter.name

    def get_client(self, instance):
        return instance.client.name

    def get_file_name(self, instance):
        return instance.media_file.name
