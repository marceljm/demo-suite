import { Link, useParams } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { posts } from '../data/catalog';
export function meta({ params }: { params: Record<string, string | undefined> }) {
  const post = posts.find((x) => x.slug === params.slug);
  return [
    { title: `${post?.title || 'Article'} | DemoSuite Field Notes` },
    { name: 'description', content: post?.excerpt || 'Read DemoSuite Field Notes.' },
  ];
}
export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((x) => x.slug === slug);
  if (!post)
    return (
      <Page eyebrow="FIELD NOTES" title="Article not found.">
        <Link className="button" to="/blog/">
          Browse all articles
        </Link>
      </Page>
    );
  return (
    <Page
      eyebrow={`${post.category.toUpperCase()} · ${post.date} · ${post.readTime}`}
      title={post.title}
    >
      <article className="article">
        <img
          className="article-image"
          src={post.image}
          alt=""
          width="800"
          height="440"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <p className="lead">{post.excerpt}</p>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p className="fictional-note">Fictional DemoSuite editorial content.</p>
      </article>
      <Link className="text-link" to="/blog/">
        ← All field notes
      </Link>
    </Page>
  );
}
