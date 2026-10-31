import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .pricing import quote


@api_view(["POST"])
@permission_classes([AllowAny])
def checkout_preview(request):
    try:
        data = request.data
        provider = data.get("provider", "card")
        if provider not in {"card", "wallet", "alternative"}:
            return Response(
                {"error": "Unsupported provider"}, status=status.HTTP_400_BAD_REQUEST
            )
        return Response(quote(data.get("plan", "annual"), int(data.get("quantity", 1))))
    except (ValueError, TypeError):
        return Response(
            {"error": "Invalid plan or quantity"}, status=status.HTTP_400_BAD_REQUEST
        )
