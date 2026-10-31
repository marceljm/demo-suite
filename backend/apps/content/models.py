from django.db import models


class PublicItem(models.Model):
    KIND = [
        (x, x.title())
        for x in ["feature", "integration", "testimonial", "blog", "docs", "faq"]
    ]
    kind = models.CharField(max_length=20, choices=KIND)
    title = models.CharField(max_length=180)
    slug = models.SlugField(unique=True)
    summary = models.TextField(blank=True)
    body = models.TextField(blank=True)
    published = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    seo_title = models.CharField(max_length=180, blank=True)
    seo_description = models.CharField(max_length=300, blank=True)

    class Meta:
        ordering = ["order", "title"]

    def __str__(self):
        return self.title


class SiteSetting(models.Model):
    key = models.SlugField(unique=True)
    value = models.JSONField(default=dict)

    def __str__(self):
        return self.key
