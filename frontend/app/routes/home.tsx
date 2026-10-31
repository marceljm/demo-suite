import { Link } from 'react-router';
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Workflow,
  ShieldCheck,
  Sparkles,
  Check,
  CircleHelp,
  FolderKanban,
  LayoutDashboard,
  Plus,
  Settings2,
  Users,
} from 'lucide-react';
import { Shell } from '../components/layout/SiteLayout';
import { features, testimonials } from '../data/catalog';
export function meta() {
  return [
    { title: 'DemoSuite WordPress Plugin | A Simpler Site Workflow' },
    {
      name: 'description',
      content:
        'DemoSuite is a flexible WordPress plugin with practical tools, clear plans, and a straightforward path to get started.',
    },
  ];
}
export default function Home() {
  return (
    <Shell>
      <main>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'DemoSuite',
            applicationCategory: 'WordPress Plugin',
            operatingSystem: 'WordPress',
            description:
              'A flexible WordPress plugin with practical tools, clear plans, and a straightforward path to get started.',
            offers: [
              { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
              {
                '@type': 'Offer',
                name: 'Pro Annual, per site',
                price: '29',
                priceCurrency: 'USD',
                priceValidUntil: '2027-12-31',
              },
            ],
          })}
        </script>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <i /> PROJECT WORKFLOWS FOR WORDPRESS
            </div>
            <h1>
              Keep projects moving
              <br />
              <em>inside WordPress.</em>
            </h1>
            <p className="lead">
              Bring projects, owners, and next steps together in one familiar WordPress
              workspace, so your team can see what is moving and what needs attention.
            </p>
            <div className="actions">
              <Link className="button" to="/pricing/">
                View plugin plans <ArrowUpRight size={17} />
              </Link>
              <Link className="text-link" to="/features/">
                <span>Explore features</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="trust-note">
              <Check size={16} aria-hidden="true" />
              <span>Free option available · Upgrade when you need more</span>
            </div>
          </div>
          <div className="preview">
            <div className="window">
              <div className="windowbar">
                <span className="window-status">
                  <span aria-hidden="true" /> WordPress admin / DemoSuite plugin
                </span>
                <span className="window-menu" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="dash">
                <aside>
                  <b>
                    <span className="mini-mark">D</span> demosuite
                  </b>
                  <p>
                    <LayoutDashboard /> Plugin home
                  </p>
                  <p>
                    <FolderKanban /> Workflows
                  </p>
                  <p>
                    <CircleHelp /> Setup guide
                  </p>
                  <p>
                    <Users /> Support
                  </p>
                  <div className="side-bottom">
                    <Plus /> Plugin settings
                  </div>
                </aside>
                <div className="dashmain">
                  <div className="dashhead">
                    <div>
                      <small>WORDPRESS PLUGIN · EXAMPLE PREVIEW</small>
                      <h3>
                        DemoSuite overview <Sparkles size={13} aria-hidden="true" />
                      </h3>
                    </div>
                    <span className="avatar">A</span>
                  </div>
                  <div className="metrics">
                    <div>
                      <small>PLUGIN STATUS</small>
                      <strong>
                        Active <i>✓</i>
                      </strong>
                    </div>
                    <div>
                      <small>LICENSE SITES</small>
                      <strong>
                        1 <i>✓</i>
                      </strong>
                    </div>
                    <div>
                      <small>SETUP GUIDE</small>
                      <strong>Ready</strong>
                    </div>
                  </div>
                  <div className="chart">
                    <div className="charttitle">
                      Example plugin activity{' '}
                      <small>
                        Sample view <Settings2 />
                      </small>
                    </div>
                    <div className="bars">
                      {[
                        40, 55, 48, 71, 63, 87, 68, 94, 78, 86, 71, 100, 80, 94, 70, 90,
                        64, 80, 73, 98,
                      ].map((v, i) => (
                        <i key={i} style={{ height: v + '%' }} />
                      ))}
                    </div>
                    <div className="weeks">
                      <span>PLUGIN</span>
                      <span>SETUP</span>
                      <span>TOOLS</span>
                      <span>HELP</span>
                    </div>
                  </div>
                  <div className="task">
                    <b>
                      <Sparkles size={12} aria-hidden="true" /> Manage your WordPress
                      plugin
                    </b>
                    <span>
                      Example admin screen <ArrowUpRight size={10} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="proof">
          <span>WHAT TO EXPECT</span>
          <b>Free option to start</b>
          <b>Workflows inside WordPress</b>
          <b>Annual and lifetime plans</b>
          <b>Multi-site annual pricing</b>
        </section>
        <section className="section center">
          <div className="eyebrow">A BETTER WORDPRESS WORKFLOW</div>
          <h2>
            The tools you need,
            <br />
            right <em>where you work.</em>
          </h2>
          <p className="sub">
            A flexible plugin built to make project work clearer inside your WordPress
            routine.
          </p>
          <div className="benefits">
            {[
              [
                Workflow,
                'A clearer workspace',
                'Keep projects, owners, and priorities easy to find.',
              ],
              [
                ChartNoAxesCombined,
                'Progress at a glance',
                'See what is moving and what needs attention next.',
              ],
              [
                Sparkles,
                'Less repetitive work',
                'Create a clearer path through the tasks you repeat.',
              ],
              [
                ShieldCheck,
                'Control stays clear',
                'Keep ownership and project context easy to review.',
              ],
            ].map(([Icon, t, d]: any) => (
              <article className="benefit" key={t}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="split section">
          <div>
            <div className="eyebrow">GET STARTED WITH DEMOSUITE</div>
            <h2>
              From install
              <br />
              to <em>better workflow.</em>
            </h2>
            <p className="sub">
              Add the plugin to your WordPress toolkit, then shape it around the work you
              want to make easier.
            </p>
            <ol className="steps">
              <li>
                <b>01</b>
                <span>
                  <strong>Choose your plan</strong>
                  <small>Compare the free and paid options for your site.</small>
                </span>
              </li>
              <li>
                <b>02</b>
                <span>
                  <strong>Add it to WordPress</strong>
                  <small>Follow the setup guide for your WordPress site.</small>
                </span>
              </li>
              <li>
                <b>03</b>
                <span>
                  <strong>Make it yours</strong>
                  <small>Choose the features and workflow that suit your needs.</small>
                </span>
              </li>
            </ol>
            <Link to="/docs/install-demosuite/" className="text-link">
              Read the plugin setup guide →
            </Link>
          </div>
          <div
            className="workflow-visual"
            aria-label="Illustrated workflow from bringing work together to celebrating progress"
          >
            <div className="workflow-top">
              <span className="mini-mark">D</span>
              <b>A clearer way forward</b>
              <small>3 simple steps</small>
            </div>
            <div className="workflow-node">
              <span>01</span>
              <div>
                <b>Bring work together</b>
                <small>Projects and people in one view</small>
              </div>
              <i>✓</i>
            </div>
            <div className="workflow-node">
              <span>02</span>
              <div>
                <b>Make the plan visible</b>
                <small>Owners, priorities, and next steps</small>
              </div>
              <i>✓</i>
            </div>
            <div className="workflow-node">
              <span>03</span>
              <div>
                <b>Keep progress moving</b>
                <small>Clear updates and timely support</small>
              </div>
              <i>↗</i>
            </div>
            <p>Thoughtful structure, with room for good work.</p>
          </div>
        </section>
        <section className="section screenshot-showcase">
          <div className="showcase-heading">
            <div className="eyebrow">INSIDE DEMOSUITE FOR WORDPRESS</div>
            <h2>
              A clearer plugin workspace, <em>right in your admin.</em>
            </h2>
            <p className="sub">
              Preview how the plugin brings useful tools and site settings into a familiar
              WordPress workflow.
            </p>
          </div>
          <div className="screenshot-grid">
            <article className="screenshot-card">
              <h3>Manage plugin tools at a glance</h3>
              <p>See what is enabled and open the settings you need from one place.</p>
              <div
                className="mock-screen"
                role="img"
                aria-label="Illustrative WordPress plugin screen showing available tools and settings"
              >
                <div className="mock-top">
                  <b>WordPress / DemoSuite / Overview</b>
                  <span>Plugin settings</span>
                </div>
                <div className="mock-table-head">
                  <span>PLUGIN TOOL</span>
                  <span>ACCESS</span>
                  <span>STATUS</span>
                </div>
                <div className="mock-row">
                  <b>Site workspace</b>
                  <span>Manage</span>
                  <span className="status-pill blue-pill">Enabled</span>
                </div>
                <div className="mock-row">
                  <b>Workflow tools</b>
                  <span>Manage</span>
                  <span className="status-pill green-pill">Enabled</span>
                </div>
                <div className="mock-row">
                  <b>Team access</b>
                  <span>Manage</span>
                  <span className="status-pill amber-pill">Optional</span>
                </div>
                <div className="mock-progress">
                  <span>Tools ready to configure</span>
                  <i>
                    <b />
                  </i>
                  <strong>2 of 3</strong>
                </div>
              </div>
            </article>
            <article className="screenshot-card">
              <h3>Configure the tools your site needs</h3>
              <p>Choose which options fit your setup and who can manage them.</p>
              <div
                className="mock-screen flow-screen"
                role="img"
                aria-label="Illustrative WordPress plugin settings for workspace, notifications, and team access"
              >
                <div className="mock-top">
                  <b>WordPress / DemoSuite / Settings</b>
                  <span className="live-pill">Example</span>
                </div>
                <div className="flow-step">
                  <span>✓</span>
                  <div>
                    <b>Site workspace</b>
                    <small>Show tools in your WordPress admin menu</small>
                  </div>
                  <i>✓</i>
                </div>
                <div className="flow-connector" />
                <div className="flow-step">
                  <span>✓</span>
                  <div>
                    <b>Workflow notifications</b>
                    <small>Choose the site events you want to surface</small>
                  </div>
                  <i>✓</i>
                </div>
                <div className="flow-connector" />
                <div className="flow-step">
                  <span>3</span>
                  <div>
                    <b>Team access</b>
                    <small>Set who can manage plugin settings</small>
                  </div>
                  <i>↗</i>
                </div>
              </div>
            </article>
          </div>
          <p className="showcase-caption">
            Illustrative plugin screens for this fictional template. Replace these with
            verified product screenshots before publishing.
          </p>
        </section>
        <section className="section center tint">
          <div className="eyebrow">INCLUDED IN DEMOSUITE FOR WORDPRESS</div>
          <h2>
            Tools for projects, <em>people, and progress.</em>
          </h2>
          <div className="featuregrid">
            {features.slice(0, 6).map((feature, i) => (
              <Link
                className="feature"
                to={'/features/' + feature.slug + '/'}
                key={feature.slug}
              >
                <span className="featureicon" aria-hidden="true">
                  {
                    [
                      <Workflow />,
                      <ChartNoAxesCombined />,
                      <Users />,
                      <ArrowUpRight />,
                      <FolderKanban />,
                      <ShieldCheck />,
                    ][i]
                  }
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.summary}</p>
                <span className="text-link">Explore feature →</span>
              </Link>
            ))}
          </div>
          <Link className="text-link" to="/features/">
            Explore all features →
          </Link>
        </section>
        <section className="section testimonials-section">
          <div className="testimonials-heading">
            <div className="eyebrow">SAMPLE CUSTOMER STORIES</div>
            <h2>Made for the people behind every site.</h2>
            <p>
              Fictional examples for this template. Replace with real, approved customer
              feedback before publishing.
            </p>
            <Link className="text-link testimonial-more" to="/reviews/">
              Read the sample stories →
            </Link>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((review) => (
              <article className="testimonial-card" key={review.headline}>
                <img
                  className="testimonial-avatar"
                  src={review.portrait}
                  alt={`Fictional sample customer ${review.name}`}
                  width="72"
                  height="72"
                  loading="lazy"
                  decoding="async"
                />
                <div className="testimonial-copy">
                  <small className="sample-label">SAMPLE STORY · FICTIONAL</small>
                  <h3>{review.headline}</h3>
                  <blockquote>“{review.quote}”</blockquote>
                  <p className="testimonial-byline">
                    {review.name} <span>{review.role}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="testimonial-plan-cta">
            <div>
              <strong>Ready to improve your WordPress workflow?</strong>
              <span>Compare the free and Pro options for your site.</span>
            </div>
            <Link className="button" to="/pricing/">
              Explore plugin plans <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
        <section className="section pricing-preview">
          <div>
            <div className="eyebrow">SIMPLE PLANS FOR YOUR WORDPRESS SITE</div>
            <h2>
              Start free.
              <br />
              <em>Go further.</em>
            </h2>
            <p className="sub">
              Start with the free option. Upgrade when your site needs more.
            </p>
            <Link className="text-link" to="/compare/">
              Compare all features →
            </Link>
          </div>
          <div className="pricecard">
            <small>PRO · ANNUAL SITE LICENSE</small>
            <h3>
              $29 <small>/ site / year</small>
            </h3>
            <p>More tools for a growing WordPress workflow.</p>
            {[
              'Advanced analytics',
              'Automations and integrations',
              'Secure sharing',
              'Priority plugin support',
            ].map((x) => (
              <div className="check" key={x}>
                <Check size={16} />
                {x}
              </div>
            ))}
            <Link className="button wide" to="/pricing/">
              View Pro plans <ArrowUpRight size={17} />
            </Link>
            <div className="muted">One-time lifetime option also available</div>
          </div>
        </section>
        <section className="closing">
          <div className="eyebrow">YOUR WORDPRESS SITE, READY FOR MORE</div>
          <h2>
            Get more from <em>WordPress.</em>
          </h2>
          <p>Explore the plugin, compare plans, and choose what fits your site.</p>
          <Link className="button light" to="/pricing/">
            View plugin plans <ArrowUpRight size={17} />
          </Link>
        </section>
      </main>
    </Shell>
  );
}
