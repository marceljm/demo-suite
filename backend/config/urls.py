from django.contrib import admin
from django.http import JsonResponse
from django.urls import path
from apps.content.views import public_content
from apps.commerce.views import checkout_preview

urlpatterns = [
    path("", lambda request: JsonResponse({"message": "DemoSuite API. Run the Vite frontend at http://localhost:5173."})),
    path("admin/", admin.site.urls),
    path("api/public/", public_content),
    path("api/checkout/preview/", checkout_preview),
]
