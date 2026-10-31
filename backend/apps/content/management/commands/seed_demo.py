from django.core.management.base import BaseCommand
from apps.content.models import PublicItem, SiteSetting
from django.utils.text import slugify

DATA = {
    "feature": [
        "Smart workflows",
        "Live analytics",
        "Team workspaces",
        "Automations",
        "Custom reports",
        "Secure sharing",
        "Version history",
        "Priority support",
    ],
    "integration": [
        "CloudNote",
        "PixelBoard",
        "Orbit Mail",
        "LedgerLeaf",
        "Meetly",
        "CodeNest",
    ],
    "docs": [
        "Installation",
        "Create your first workspace",
        "Invite your team",
        "Plan a project",
        "Build a report",
        "Connect integrations",
        "Manage permissions",
        "Use automations",
        "Export your data",
        "Billing and licenses",
        "Troubleshooting",
        "Keyboard shortcuts",
    ],
    "blog": [
        "A calmer way to plan your week",
        "Make project updates useful again",
        "The small rituals behind great teams",
        "How to find focus in a busy workspace",
        "A practical guide to better handoffs",
        "Make space for meaningful work",
        "Building a team rhythm that lasts",
        "The case for visible progress",
    ],
    "faq": [
        "Can I try DemoSuite for free?",
        "What does Pro cost?",
        "Does checkout take a real payment?",
    ],
}


class Command(BaseCommand):
    help = "Seed fictional DemoSuite content idempotently"

    def handle(self, *args, **kwargs):
        for kind, titles in DATA.items():
            for n, title in enumerate(titles):
                PublicItem.objects.update_or_create(
                    slug=f"{kind}-{slugify(title)}",
                    defaults={
                        "kind": kind,
                        "title": title,
                        "summary": f"Fictional DemoSuite {kind} content for {title}.",
                        "body": f"Practical guidance and examples for {title}. Replace this demo content before publishing.",
                        "published": True,
                        "order": n,
                    },
                )
        SiteSetting.objects.update_or_create(
            key="brand",
            defaults={
                "value": {
                    "name": "DemoSuite",
                    "tagline": "Your best work starts in sync.",
                    "fictional": True,
                }
            },
        )
        self.stdout.write(self.style.SUCCESS("Demo content seeded."))
