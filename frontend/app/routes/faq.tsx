import { Page } from '../components/layout/SiteLayout';
export function meta() {
  return [
    { title: 'WordPress Plugin FAQ | DemoSuite' },
    {
      name: 'description',
      content:
        'Answers about DemoSuite WordPress plugin plans, site licenses, and the sample checkout.',
    },
  ];
}
export default function FAQ() {
  return (
    <Page eyebrow="WORDPRESS PLUGIN FAQ" title="Good to know before you choose.">
      <input aria-label="Search FAQs" placeholder="Search questions…" />
      <details className="faqitem">
        <summary>Can I try the plugin for free?</summary>
        <p>
          The example Free plugin option is available with no payment details required.
        </p>
      </details>
      <details className="faqitem">
        <summary>What does Pro cost?</summary>
        <p>
          Example pricing is $29 per WordPress site per year or $89 per site for lifetime
          access.
        </p>
      </details>
      <details className="faqitem">
        <summary>Does checkout take a real payment?</summary>
        <p>
          No. This is a demonstration. No payment details are collected and no transaction
          occurs.
        </p>
      </details>
      <details className="faqitem">
        <summary>Can I use the plugin on multiple sites?</summary>
        <p>
          The sample annual plan includes one site license. Use the multi-site price
          calculator to preview an annual order for more sites.
        </p>
      </details>
      <details className="faqitem">
        <summary>Are the testimonials real?</summary>
        <p>
          No. All testimonials and statistics on this site are clearly identified
          fictional demo content.
        </p>
      </details>
      <details className="faqitem">
        <summary>How do I get support?</summary>
        <p>
          Use the contact form to preview the demo support experience. Email delivery is
          not configured.
        </p>
      </details>
    </Page>
  );
}
