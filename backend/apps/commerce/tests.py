from django.test import SimpleTestCase
from rest_framework.test import APIRequestFactory
from .pricing import quote
from .views import checkout_preview

class PricingQuoteTests(SimpleTestCase):
    def test_volume_tiers_apply_to_entire_order(self):
        self.assertEqual(quote("annual", 5)["total"], "137.75")
        self.assertEqual(quote("annual", 10)["total"], "261.00")
        self.assertEqual(quote("annual", 25)["total"], "616.25")
        self.assertEqual(quote("annual", 100)["total"], "2320.00")

    def test_invalid_plan_and_quantity_are_rejected(self):
        for plan, quantity in [("other", 1), ("annual", 0), ("annual", 501), ("annual", 1.5)]:
            with self.subTest(plan=plan, quantity=quantity), self.assertRaises(ValueError):
                quote(plan, quantity)

class CheckoutPreviewTests(SimpleTestCase):
    def test_preview_returns_server_calculated_demo_total(self):
        request = APIRequestFactory().post("/api/checkout/preview/", {"plan":"annual", "quantity":10}, format="json")
        response = checkout_preview(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["total"], "261.00")
        self.assertEqual(response.data["currency"], "USD")

    def test_invalid_provider_is_rejected(self):
        request = APIRequestFactory().post("/api/checkout/preview/", {"provider":"unknown"}, format="json")
        self.assertEqual(checkout_preview(request).status_code, 400)
