import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { integrations } from '../data/catalog';
export function meta() {
  return [
    { title: 'WordPress Plugin Integrations | DemoSuite' },
    {
      name: 'description',
      content:
        'Explore illustrative integration concepts for the DemoSuite WordPress plugin and see how connected site workflows can fit together.',
    },
  ];
}
export default function Integrations() {
  return (
    <Page eyebrow="BETTER TOGETHER" title="Your tools, in good company.">
      <p>
        Explore fictional integration examples and see how connected workflows could be
        presented. These sample connections are illustrative and do not represent working
        services.
      </p>
      <div className="cards">
        {integrations.map((item, i) => (
          <Link
            className="simplecard catalog-card integration-catalog-card"
            to={`/integrations/${item.slug}/`}
            key={item.slug}
          >
            <span className="catalog-card-heading integration-card-heading">
              <span className="integration-icon" aria-hidden="true">
                {['☁', '◈', '✉', '◉', '◎', '⌘'][i]}
              </span>
              <span className="integration-card-title">
                <small>{item.category.toUpperCase()}</small>
                <strong>{item.name}</strong>
              </span>
            </span>
            <p>{item.description}</p>
            <b>View integration →</b>
          </Link>
        ))}
      </div>
    </Page>
  );
}
