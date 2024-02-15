import io
from django.db import models

import uuid

from images.core.tools import get_formatted_date
from PIL import Image as PilImage
from django.core.files.base import ContentFile
import io


class Filter(models.Model):
    uuid = models.UUIDField(
        db_index=True,
        default=uuid.uuid4,
        editable=False
    )
    name = models.CharField(
        max_length=69,
        unique=True
    )

    def __str__(self):
        return self.name


class Client(models.Model):
    uuid = models.UUIDField(
        db_index=True,
        default=uuid.uuid4,
        editable=False
    )
    name = models.CharField(
        max_length=69,
        unique=True
    )

    def __str__(self):
        return self.name


class Image(models.Model):
    uuid = models.UUIDField(
        db_index=True,
        default=uuid.uuid4,
        editable=False
    )
    created_at = models.DateTimeField(auto_now_add=True)
    media_file = models.ImageField()
    media_file_thumb = models.ImageField(blank=True, null=True)
    filter = models.ForeignKey(
        Filter,
        related_name='images',
        on_delete=models.CASCADE
    )
    client = models.ForeignKey(
        Client,
        related_name='images',
        on_delete=models.CASCADE
    )
    caption = models.CharField(
        max_length=256
    )
    is_private = models.BooleanField(
        default=False
    )
    is_homepage = models.BooleanField(
        default=False
    )

    def __str__(self):
        return f"{self.media_file.name};{get_formatted_date(self.created_at)}"

    def save(self, *args, **kwargs):
        if self.media_file and not self._state.adding and not self.media_file_thumb:
            img = PilImage.open(self.media_file)
            output_io_stream = io.BytesIO()
            img.save(output_io_stream, format='JPEG', quality=30)
            output_io_stream.seek(0)
            self.media_file_thumb.save(f"compressed_{self.media_file.name}", content=ContentFile(
                output_io_stream.read()), save=True)

        super().save(*args, **kwargs)


class VideoClip(models.Model):
    uuid = models.UUIDField(
        db_index=True,
        default=uuid.uuid4,
        editable=False
    )
    created_at = models.DateTimeField(auto_now_add=True)
    media_file = models.FileField()
    filter = models.ForeignKey(
        Filter,
        related_name='videos',
        on_delete=models.CASCADE
    )
    client = models.ForeignKey(
        Client,
        related_name='videos',
        on_delete=models.CASCADE
    )
    caption = models.CharField(
        max_length=256
    )
    is_private = models.BooleanField(
        default=False
    )
    is_homepage = models.BooleanField(
        default=False
    )
    is_landscape = models.BooleanField(
        default=True
    )

    def __str__(self):
        return f"{self.media_file.name};{get_formatted_date(self.created_at)}"
