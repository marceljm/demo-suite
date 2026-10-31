import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { posts } from '../data/catalog';
export function meta() {
  return [
    { title: 'Field Notes | DemoSuite' },
    {
      name: 'description',
      content: 'Practical notes on teamwork, planning, and meaningful work.',
    },
  ];
}
export default function Blog() {
  return (
    <Page eyebrow="FIELD NOTES" title="Ideas for work that works.">
      <p>
        Practical notes on better teamwork, calmer planning, and making room for great
        work. Fictional demo publication.
      </p>
      <div className="cards blog-grid">
        {posts.map((post, index) => (
          <Link
            className="simplecard catalog-card blog-card"
            to={`/blog/${post.slug}/`}
            key={post.slug}
          >
            <img
              src={post.image}
              alt=""
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              width="800"
              height="440"
            />
            <small>
              {post.category.toUpperCase()} · {post.date} · {post.readTime}
            </small>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <b>Read article →</b>
          </Link>
        ))}
      </div>
    </Page>
  );
}
