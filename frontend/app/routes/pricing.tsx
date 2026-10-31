import { Link } from 'react-router';
import { useState } from 'react';
import { Page } from '../components/layout/SiteLayout';
export function meta() {
  return [
    { title: 'WordPress Plugin Pricing | DemoSuite' },
    {
      name: 'description',
      content:
        'Compare free, annual, and lifetime DemoSuite WordPress plugin plans, including multi-site discounts.',
    },
  ];
}
export default function Pricing() {
  const [quantity, setQuantity] = useState(1);
  const discount =
    quantity >= 100
      ? 0.2
      : quantity >= 25
        ? 0.15
        : quantity >= 10
          ? 0.1
          : quantity >= 5
            ? 0.05
            : 0;
  const total = (29 * quantity * (1 - discount)).toFixed(2);
  return (
    <Page eyebrow="SIMPLE, HONEST PRICING" title="Choose the right plan for your site.">
      <p>
        Start with the free plugin option. Choose an annual or lifetime plan when your
        WordPress sites need more.
      </p>
      <div className="cards">
        <article className="plan">
          <small>FREE PLUGIN</small>
          <h2>Get started</h2>
          <strong>
            $0 <small>/ free</small>
          </strong>
          <p>Try the essentials on your WordPress site.</p>
          <p>
            ✓ 1 WordPress site
            <br />
            ✓ 3 active projects
            <br />✓ Core workflows
            <br />✓ Essential insights
          </p>
          <Link className="button" to="/checkout/?plan=free">
            Try free
          </Link>
        </article>
        <article className="plan featured">
          <small>PRO · ANNUAL SITE LICENSE</small>
          <h2>Make more possible</h2>
          <strong>
            $29 <small>/ site / year</small>
          </strong>
          <p>More plugin features, updates, and support for your site.</p>
          <p>
            ✓ 1 WordPress site license
            <br />
            ✓ Unlimited projects
            <br />✓ Advanced analytics
            <br />✓ Automations & integrations
            <br />✓ Priority support
          </p>
          <Link className="button" to="/checkout/?plan=annual">
            Get Pro · $29/site/year
          </Link>
        </article>
        <article className="plan">
          <small>PRO · LIFETIME</small>
          <h2>One-time purchase</h2>
          <strong>
            $89 <small>/ site · one-time</small>
          </strong>
          <p>One payment for lifetime access to DemoSuite Pro for one site.</p>
          <p>
            ✓ 1 WordPress site license
            <br />
            ✓ Everything in Pro
            <br />✓ No renewal
            <br />✓ Future updates included
          </p>
          <Link className="button" to="/checkout/?plan=lifetime">
            Choose lifetime
          </Link>
        </article>
      </div>
      <section className="section" style={{ padding: '56px 0' }}>
        <h2>Multi-site pricing, calculated up front</h2>
        <p>
          The annual discount applies to the full order: 5–9 site licenses save 5%, 10–24
          save 10%, 25–99 save 15%, and 100+ save 20%.
        </p>
        <label className="search-label">
          WordPress site licenses
          <input
            aria-label="WordPress site license quantity"
            type="number"
            min="1"
            max="500"
            value={quantity}
            onChange={(e) =>
              setQuantity(
                Math.min(500, Math.max(1, Math.floor(Number(e.target.value) || 1))),
              )
            }
          />
        </label>
        <p aria-live="polite">
          {quantity} × $29.00{' '}
          {discount > 0 ? `− ${discount * 100}% multi-site discount` : ''} ={' '}
          <strong>${total} / year</strong>
        </p>
        <Link className="button" to={`/checkout/?plan=annual&quantity=${quantity}`}>
          Continue with this site price
        </Link>
      </section>
      <p>
        Example pricing in USD. Demonstration checkout only; no payment information is
        collected.
      </p>
      <Link className="text-link" to="/compare/">
        Compare plans →
      </Link>
    </Page>
  );
}
