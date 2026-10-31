import { Link, useParams, useSearchParams } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { docs } from '../data/catalog';
export function meta({ params }: { params: Record<string, string | undefined> }) {
  const slug = params['*']?.replace(/\/$/, '');
  const article = docs.find((item) => item.slug === slug);
  return [
    {
      title: article ? `${article.title} | DemoSuite Help` : 'Documentation | DemoSuite',
    },
    {
      name: 'description',
      content: article?.summary || 'Search guides for setting up and using DemoSuite.',
    },
  ];
}
export default function Docs() {
  const { '*': path } = useParams();
  const [params, setParams] = useSearchParams();
  const slug = path?.replace(/\/$/, '');
  const article = slug ? docs.find((x) => x.slug === slug) : undefined;
  const query = params.get('q') || '';
  const list = docs.filter((x) =>
    `${x.title} ${x.summary} ${x.body}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  if (slug)
    return (
      <Page eyebrow="DEMOSUITE HELP CENTER" title={article?.title || 'Guide not found.'}>
        {article ? (
          <article className="article">
            <p className="lead">{article.summary}</p>
            <p>{article.body}</p>
            <Link className="text-link" to="/docs/">
              ← All documentation
            </Link>
          </article>
        ) : (
          <Link className="button" to="/docs/">
            Browse documentation
          </Link>
        )}
      </Page>
    );
  return (
    <Page eyebrow="DEMOSUITE HELP CENTER" title="A little help, right when you need it.">
      <label className="search-label">
        Search documentation
        <input
          aria-label="Search documentation"
          placeholder="Search docs…"
          value={query}
          onChange={(e) =>
            setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })
          }
        />
      </label>
      <p aria-live="polite">
        {query
          ? `${list.length} ${list.length === 1 ? 'result' : 'results'} for “${query}”`
          : 'Browse practical setup and product guides.'}
      </p>
      <div className="cards">
        {list.map((x) => (
          <Link
            className="simplecard catalog-card docs-catalog-card"
            to={`/docs/${x.slug}/`}
            key={x.slug}
          >
            <span className="catalog-card-heading">
              <span className="catalog-icon" aria-hidden="true">
                ⌘
              </span>
              <span className="catalog-card-title">
                <small>GUIDE · 3 MIN READ</small>
                <strong>{x.title}</strong>
              </span>
            </span>
            <p>{x.summary}</p>
            <b>Open guide →</b>
          </Link>
        ))}
      </div>
      {!list.length && <p>No matching guides. Try a broader search term.</p>}
    </Page>
  );
}
