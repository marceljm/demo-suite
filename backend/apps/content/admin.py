from django.contrib import admin
from .models import PublicItem, SiteSetting


@admin.register(PublicItem)
class PublicItemAdmin(admin.ModelAdmin):
    list_display = ("title", "kind", "published", "order")
    list_filter = ("kind", "published")
    search_fields = ("title", "slug", "summary")
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(SiteSetting)
