from django.contrib import admin

from images.models import Client, Filter, Image, VideoClip

admin.site.register(Image)
admin.site.register(VideoClip)
admin.site.register(Filter)
admin.site.register(Client)
