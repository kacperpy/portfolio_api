from rest_framework import serializers

from images.core.tools import get_formatted_date
from images.models import Image, VideoClip
from PIL import Image as PilImage
from django.core.files.base import ContentFile
import io


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
            'media_file_thumb',
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

    def compress_image(self, image):
        img = PilImage.open(image)

        output_io_stream = io.BytesIO()
        img.save(output_io_stream, format='JPEG', quality=30)
        output_io_stream.seek(0)
        new_image = ContentFile(output_io_stream.read(),
                                name=f'compressed_{image.name}')

        return new_image

    def create(self, validated_data):
        original_image = validated_data.get('media_file')
        if original_image:
            compressed_image = self.compress_image(original_image)
            validated_data['media_file_thumb'] = compressed_image

        return super().create(validated_data)

    def update(self, instance, validated_data):
        original_image = validated_data.get('media_file', None)

        if original_image:
            compressed_image = self.compress_image(original_image)
            validated_data['media_file_thumb'] = compressed_image

        return super().update(instance, validated_data)


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
