"""Server-side pricing rules for the fictional DemoSuite checkout."""

from decimal import Decimal, ROUND_HALF_UP

PLANS: dict[str, Decimal] = {
    "free": Decimal("0.00"),
    "annual": Decimal("29.00"),
    "lifetime": Decimal("89.00"),
}

DISCOUNT_TIERS: tuple[tuple[int, Decimal], ...] = (
    (100, Decimal("0.20")),
    (25, Decimal("0.15")),
    (10, Decimal("0.10")),
    (5, Decimal("0.05")),
)
MAX_QUANTITY = 500
CENT = Decimal("0.01")


def discount_for(quantity: int) -> Decimal:
    """Return one volume discount for the full order; tiers do not stack."""
    for minimum_quantity, discount in DISCOUNT_TIERS:
        if quantity >= minimum_quantity:
            return discount
    return Decimal("0")


def quote(plan: str, quantity: int) -> dict[str, str | int]:
    """Validate a selection and return its authoritative USD total."""
    if plan not in PLANS:
        raise ValueError("Unknown plan")
    if isinstance(quantity, bool) or not isinstance(quantity, int):
        raise ValueError("Quantity must be an integer")
    if not 1 <= quantity <= MAX_QUANTITY:
        raise ValueError(f"Quantity must be between 1 and {MAX_QUANTITY}")

    unit_price = PLANS[plan]
    discount = discount_for(quantity)
    total = (unit_price * quantity * (1 - discount)).quantize(
        CENT,
        rounding=ROUND_HALF_UP,
    )

    return {
        "plan": plan,
        "quantity": quantity,
        "unit_price": str(unit_price),
        "discount": str(discount),
        "total": str(total),
        "currency": "USD",
    }
