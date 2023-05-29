from django.contrib import admin

from images.models import Client, Filter, Image

admin.site.register(Image)
admin.site.register(Filter)
admin.site.register(Client)
