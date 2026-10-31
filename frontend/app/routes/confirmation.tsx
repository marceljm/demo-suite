import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
export function meta() {
  return [
    { title: 'Demo order confirmation | DemoSuite' },
    {
      name: 'description',
      content: 'A simulated order confirmation. No payment was collected.',
    },
  ];
}
export default function Confirmation() {
  return (
    <Page eyebrow="SIMULATED ORDER" title="Your demo is ready.">
      <p>This is a demonstration confirmation. No purchase or payment occurred.</p>
      <Link className="button" to="/">
        Back to DemoSuite
      </Link>
    </Page>
  );
}
