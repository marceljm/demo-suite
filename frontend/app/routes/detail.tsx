import { ArrowUpRight, Check, Link2, Sparkles, Users } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { features } from '../data/catalog';
export function meta({ params }: { params: Record<string, string | undefined> }) {
  const item = features.find((x) => x.slug === params.slug);
  return [
    {
      title: `${item?.title || 'Feature'} WordPress Plugin Feature | DemoSuite`,
    },
    {
      name: 'description',
      content:
        item?.summary || 'Explore the DemoSuite WordPress plugin features and plans.',
    },
  ];
}
export default function Detail() {
  const { slug } = useParams();
  const feature = features.find((x) => x.slug === slug);
  if (!feature)
    return (
      <Page eyebrow="FEATURE NOT FOUND" title="That feature is not here.">
        <p>Choose a feature from the catalog to learn more.</p>
        <Link className="button" to="/features/">
          Browse features
        </Link>
      </Page>
    );
  const freeIncluded = features.slice(0, 3).some((item) => item.slug === feature.slug);
  return (
    <Page eyebrow="DEMOSUITE FEATURE" title={feature.title}>
      <p className="lead">{feature.summary}</p>
      <section className="feature-highlight" aria-labelledby="feature-highlight-title">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Sparkles size={15} aria-hidden="true" />
            {freeIncluded ? 'INCLUDED IN FREE + PRO' : 'AVAILABLE WITH PRO'}
          </span>
          <h2 id="feature-highlight-title">A clearer way to move work forward.</h2>
          <p>{feature.body}</p>
          <div className="feature-highlight-proof">
            <span>
              <Check size={16} aria-hidden="true" /> Clear owners and next steps
            </span>
            <span>
              <Check size={16} aria-hidden="true" /> Built around the team’s workflow
            </span>
          </div>
        </div>
        <div className="feature-highlight-visual" aria-hidden="true">
          <div className="feature-mini-window">
            <div className="feature-mini-top">
              <i />
              <i />
              <i />
              <span>Team workspace</span>
            </div>
            <div className="feature-mini-row">
              <b>
                <Users size={16} />
              </b>
              <span>
                <strong>Project kickoff</strong>
                <small>Owner · Product team</small>
              </span>
              <Check size={17} />
            </div>
            <div className="feature-mini-row">
              <b>
                <Link2 size={16} />
              </b>
              <span>
                <strong>Plan the launch</strong>
                <small>Next step · This week</small>
              </span>
              <Check size={17} />
            </div>
            <div className="feature-mini-status">Everyone has the context they need</div>
          </div>
        </div>
      </section>
      <section className="feature-detail-cta">
        <div>
          <h2>See how it fits your site.</h2>
          <p>Compare what’s included and choose a plan for your WordPress site.</p>
        </div>
        <div className="feature-detail-actions">
          <Link className="button" to="/pricing/">
            Explore plans <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link className="text-link" to="/features/">
            Browse all features
          </Link>
        </div>
      </section>
    </Page>
  );
}
