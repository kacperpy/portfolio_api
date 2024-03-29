from django.db import models

import uuid

from images.core.tools import get_formatted_date


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
