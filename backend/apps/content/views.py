from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import PublicItem, SiteSetting


@api_view(["GET"])
@permission_classes([AllowAny])
def public_content(request):
    items = [
        {
            "kind": x.kind,
            "title": x.title,
            "slug": x.slug,
            "summary": x.summary,
            "body": x.body,
            "seo_title": x.seo_title,
            "seo_description": x.seo_description,
        }
        for x in PublicItem.objects.filter(published=True)
    ]
    return Response(
        {
            "brand": "DemoSuite",
            "settings": {x.key: x.value for x in SiteSetting.objects.all()},
            "items": items,
            "fictional": True,
        }
    )
