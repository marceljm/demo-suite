import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { testimonials } from '../data/catalog';
export function meta() {
  return [
    { title: 'WordPress Plugin Customer Stories | DemoSuite' },
    {
      name: 'description',
      content:
        'Read sample stories from fictional WordPress plugin users. Replace them with genuine customer feedback before publishing.',
    },
  ];
}
export default function Reviews() {
  return (
    <Page
      eyebrow="SAMPLE CUSTOMER STORIES"
      title="Made for the people behind every site."
    >
      <p>
        These fictional examples show how customer stories can help explain a WordPress
        plugin’s value. Replace each portrait and quote with real, approved customer
        feedback before publishing.
      </p>
      <div className="cards testimonial-grid">
        {testimonials.map((review) => (
          <article className="simplecard testimonial-card" key={review.headline}>
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
              <h2>{review.headline}</h2>
              <blockquote>“{review.quote}”</blockquote>
              <p className="testimonial-byline">
                {review.name} <span>{review.role}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="reviews-cta">
        <p>Want a clearer view of what’s included?</p>
        <Link className="button" to="/pricing/">
          Compare plans
        </Link>
      </div>
    </Page>
  );
}
