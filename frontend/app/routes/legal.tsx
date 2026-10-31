import { useLocation } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
export function meta({ params }: { params: Record<string, string | undefined> }) {
  const title = (params['*'] || 'policy').replaceAll('-', ' ');
  const label = title.charAt(0).toUpperCase() + title.slice(1);
  return [
    { title: `${label} | DemoSuite` },
    {
      name: 'description',
      content: `${label} placeholder policy for this fictional website template.`,
    },
  ];
}
export default function Legal() {
  let l = useLocation(),
    title = l.pathname.split('/')[1].replaceAll('-', ' ');
  return (
    <Page
      eyebrow="FICTIONAL PLACEHOLDER POLICY"
      title={title[0].toUpperCase() + title.slice(1)}
    >
      <p>
        <b>
          Demonstration copy only — not legally reviewed or suitable for production use.
        </b>
      </p>
      <h2>About this template</h2>
      <p>
        DemoSuite is fictional content prepared to demonstrate a reusable software
        marketing website. Replace this page with policies reviewed for your organization
        and jurisdiction before publication.
      </p>
      <h2>Information and choices</h2>
      <p>
        Do not use this placeholder as legal advice. Add your actual practices, terms,
        retention details, and contact information here.
      </p>
    </Page>
  );
}
