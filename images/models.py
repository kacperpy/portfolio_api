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


class Image(models.Model):
    uuid = models.UUIDField(
        db_index=True,
        default=uuid.uuid4,
        editable=False
    )
    created_at = models.DateTimeField(auto_now_add=True)
    media_file = models.FileField()
    filter = models.ForeignKey(
        Filter,
        related_name='images',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.media_file.name};{get_formatted_date(self.created_at)}"
