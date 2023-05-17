from django.contrib import admin

from images.models import Filter, Image

admin.site.register(Image)
admin.site.register(Filter)
