import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="nav">
        <Link to="/" className="brand">
          <span className="mark">D</span> DemoSuite
        </Link>
        <nav>
          <Link to="/features/">Features</Link>
          <Link to="/integrations/">Integrations</Link>
          <Link to="/pricing/">Pricing</Link>
          <Link to="/reviews/">Reviews</Link>
          <Link to="/docs/">Docs</Link>
          <Link to="/blog/">Blog</Link>
        </nav>
        <Link className="button small" to="/pricing/">
          Get the plugin <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </header>
      {children}
      <footer>
        <div className="brand">
          <span className="mark">D</span> DemoSuite
        </div>
        <p>A practical plugin for a clearer WordPress workflow.</p>
        <div className="footlinks">
          <Link to="/features/">Product</Link>
          <Link to="/docs/">Resources</Link>
          <Link to="/privacy/">Privacy</Link>
          <Link to="/contact/">Contact</Link>
        </div>
        <small>© 2025 DemoSuite · Fictional demonstration content</small>
      </footer>
    </div>
  );
}
export function Page({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Shell>
      <main className="page">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {children}
      </main>
    </Shell>
  );
}
