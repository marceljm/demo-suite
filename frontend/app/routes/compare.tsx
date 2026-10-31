import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { features } from '../data/catalog';
export function meta() {
  return [
    { title: 'Compare plans | DemoSuite' },
    {
      name: 'description',
      content:
        'Compare DemoSuite Free and Pro features to find the right fit for your team.',
    },
  ];
}
export default function Compare() {
  return (
    <Page eyebrow="FREE VS PRO" title="See what fits your team.">
      <p>Start with the essentials, then unlock more as your work grows.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Free</th>
            <th>Pro</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={feature.slug}>
              <th>{feature.title}</th>
              <td>{i < 3 ? 'Included' : '—'}</td>
              <td>Included</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="button" to="/pricing/">
        Explore plans →
      </Link>
    </Page>
  );
}
