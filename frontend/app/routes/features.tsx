import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { features } from '../data/catalog';
export function meta() {
  return [
    { title: 'WordPress Plugin Features | DemoSuite' },
    {
      name: 'description',
      content:
        'Explore the DemoSuite WordPress plugin features and find the tools that fit your site workflow.',
    },
  ];
}
export default function Features() {
  return (
    <Page eyebrow="THE WORDPRESS PLUGIN TOOLKIT" title="Features for a clearer workflow.">
      <p>Explore the plugin tools and choose what fits the way you work in WordPress.</p>
      <div className="cards">
        {features.map((feature, i) => (
          <Link
            className="simplecard catalog-card feature-catalog-card"
            to={'/features/' + feature.slug + '/'}
            key={feature.slug}
          >
            <span className="catalog-card-heading">
              <span className="catalog-icon" aria-hidden="true">
                {['✳', '◫', '◎', '↗', '▤', '⌁', '◷', '♧'][i]}
              </span>
            </span>
            <h2>{feature.title}</h2>
            <p>{feature.summary}</p>
            <b>{i < 3 ? 'Free + Pro' : 'Pro'} · Learn more →</b>
          </Link>
        ))}
      </div>
    </Page>
  );
}
