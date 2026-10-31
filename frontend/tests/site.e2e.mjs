import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
const root = resolve('build/client');
let server;
let origin;
before(async () => {
  server = createServer(async (request, response) => {
    try {
      const urlPath = decodeURIComponent(
        new URL(request.url, 'http://localhost').pathname,
      );
      const candidate = resolve(
        root,
        `.${urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath}`,
      );
      if (!candidate.startsWith(root + sep) && candidate !== resolve(root, 'index.html'))
        throw new Error('invalid path');
      let file = candidate;
      try {
        if (!(await stat(file)).isFile()) throw new Error();
      } catch {
        file = resolve(root, 'index.html');
      }
      response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      response.end(await readFile(file));
    } catch {
      response.writeHead(400);
      response.end();
    }
  });
  await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
  origin = `http://127.0.0.1:${server.address().port}`;
});
after(() => server?.close());
for (const [path, expected] of [
  ['/', 'Make WordPress'],
  ['/features/smart-workflows/', 'Smart workflows'],
  ['/integrations/cloudnote/', 'Connect CloudNote'],
  ['/blog/a-calmer-way-to-plan-your-week/', 'A calmer way to plan your week'],
  ['/docs/getting-started/', 'Getting started'],
  ['/pricing/', 'WordPress site licenses'],
  ['/checkout/', 'Review your plugin plan.'],
  ['/reviews/', 'SAMPLE CUSTOMER STORIES'],
]) {
  test(`pre-rendered route ${path}`, async () => {
    const response = await fetch(`${origin}${path}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(expected), `expected rendered HTML to include ${expected}`);
  });
}
test('homepage surfaces review examples and transparent sample labeling', async () => {
  const response = await fetch(`${origin}/`);
  const html = await response.text();
  assert.ok(html.includes('A WORDPRESS PLUGIN FOR YOUR SITE'));
  assert.ok(html.includes('SAMPLE CUSTOMER STORIES'));
  assert.ok(html.includes('Fictional examples'));
  assert.ok(html.includes('/pricing/'));
});
test('homepage separates sample stories from the plugin plan action and shows WordPress screens', async () => {
  const html = await (await fetch(`${origin}/`)).text();
  assert.ok(html.includes('testimonial-more'));
  assert.ok(html.includes('testimonial-plan-cta'));
  assert.ok(html.includes('Explore plugin plans'));
  assert.ok(html.includes('INSIDE DEMOSUITE FOR WORDPRESS'));
  assert.ok(html.includes('WordPress / DemoSuite / Settings'));
  assert.ok(html.includes('verified product screenshots'));
});
test('integration catalog gives each icon and label a spaced heading group', async () => {
  const html = await (await fetch(`${origin}/integrations/`)).text();
  assert.ok(html.includes('integration-card-heading'));
  assert.ok(html.includes('integration-icon'));
  assert.ok(html.includes('integration-card-title'));
});
test('feature, docs, and blog listings share the responsive catalog card layout', async () => {
  const [features, docs, blog] = await Promise.all(
    ['/features/', '/docs/', '/blog/'].map(async (path) =>
      (await fetch(`${origin}${path}`)).text(),
    ),
  );
  assert.ok(features.includes('feature-catalog-card'));
  assert.ok(features.includes('catalog-icon'));
  assert.ok(docs.includes('docs-catalog-card'));
  assert.ok(docs.includes('catalog-card-heading'));
  assert.ok(blog.includes('catalog-card blog-card'));
  assert.ok(blog.includes('blog-card'));
  for (const html of [features, docs, blog]) assert.ok(html.includes('site-shell'));
});
test('integration preview explains that it is illustrative', async () => {
  const response = await fetch(`${origin}/integrations/cloudnote/`);
  const html = await response.text();
  assert.ok(html.includes('Preview only'));
  assert.ok(html.includes('does not transfer data'));
  assert.ok(html.includes('How this sample works'));
});
test('feature detail has separated plan actions and readable highlight', async () => {
  const response = await fetch(`${origin}/features/smart-workflows/`);
  const html = await response.text();
  assert.ok(html.includes('feature-highlight-kicker'));
  assert.ok(html.includes('feature-detail-actions'));
  assert.ok(html.includes('Explore plans'));
});
test('each customer story has a distinct fictional client portrait', async () => {
  const html = await (await fetch(`${origin}/`)).text();
  for (const image of ['review-maya.webp', 'review-chris.webp', 'review-sofia.webp']) {
    assert.ok(html.includes(`/images/${image}`));
    await stat(resolve(root, 'images', image));
  }
  assert.ok(html.includes('Find your plan'));
  assert.ok(!html.includes('customer-team.webp'));
});
