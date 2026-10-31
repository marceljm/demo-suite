import { Link, useParams } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { integrations } from '../data/catalog';
export function meta({ params }: { params: Record<string, string | undefined> }) {
  const item = integrations.find((x) => x.slug === params.slug);
  return [
    { title: `${item?.name || 'Integration'} integration | DemoSuite` },
    {
      name: 'description',
      content: item?.description || 'Explore a DemoSuite sample integration.',
    },
  ];
}
export default function IntegrationDetail() {
  const { slug } = useParams();
  const item = integrations.find((x) => x.slug === slug);
  if (!item)
    return (
      <Page eyebrow="INTEGRATION NOT FOUND" title="That connection is not here.">
        <Link className="button" to="/integrations/">
          Browse integrations
        </Link>
      </Page>
    );
  return (
    <Page
      eyebrow={`${item.category.toUpperCase()} · SAMPLE CONNECTOR`}
      title={`Connect ${item.name} to your workflow.`}
    >
      <p className="lead integration-lead">{item.description}</p>
      <div className="integration-notice">
        <span aria-hidden="true">ⓘ</span>
        <p>
          <strong>Sample connector preview</strong>
          <br />
          This fictional example shows how an integration could work. It is not connected
          to {item.name} and does not transfer data.
        </p>
      </div>
      <section
        className="integration-preview"
        aria-labelledby="integration-preview-title"
      >
        <div className="integration-preview-heading">
          <div>
            <span className="eyebrow">INTEGRATION SETUP PREVIEW</span>
            <h2 id="integration-preview-title">
              A clear handoff, from one tool to the next.
            </h2>
          </div>
          <span className="preview-badge">Example screen</span>
        </div>
        <div className="integration-window">
          <div className="integration-window-bar">
            <strong>
              DemoSuite <span>↔</span> {item.name}
            </strong>
            <span className="sample-state">Preview only</span>
          </div>
          <div className="integration-window-body">
            <div className="integration-source">
              <small>FROM {item.name.toUpperCase()}</small>
              <b>Product launch notes</b>
              <p>Decision log · Updated just now</p>
              <div className="note-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="sync-arrow" aria-hidden="true">
              →
            </div>
            <div className="integration-destination">
              <small>SHARED IN DEMOSUITE</small>
              <b>Launch project</b>
              <p>Linked note · Owner: Alex Morgan</p>
              <span className="connected-label">Ready for team review</span>
            </div>
          </div>
          <div className="integration-window-foot">
            Illustrative interface only · No account connection is active
          </div>
        </div>
      </section>
      <section className="integration-how" aria-labelledby="integration-how-title">
        <div className="eyebrow">A SIMPLE, REVIEWABLE FLOW</div>
        <h2 id="integration-how-title">How this sample works</h2>
        <p className="integration-how-intro">
          An integration should make useful context easier to find, while keeping
          ownership clear.
        </p>
        <ol className="integration-step-grid">
          <li>
            <span>01</span>
            <h3>Choose what to share</h3>
            <p>Pick the project updates your team wants to see.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Set access and ownership</h3>
            <p>Decide who can manage the connection and its scope.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Review activity</h3>
            <p>Keep a clear record of the updates that arrive.</p>
          </li>
        </ol>
      </section>
      <section className="integration-cta">
        <div>
          <h2>Bring your team’s tools into one workspace.</h2>
          <p>Compare plans and see which tools fit your team’s workflow.</p>
        </div>
        <Link className="button" to="/pricing/">
          Explore plans
        </Link>
      </section>
      <Link className="text-link integration-back" to="/integrations/">
        ← Back to all integrations
      </Link>
    </Page>
  );
}
