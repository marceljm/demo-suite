export const features = [
  {
    title: 'Smart workflows',
    slug: 'smart-workflows',
    summary: 'Connect the steps your team repeats every week.',
    body: 'Build clear, repeatable workflows with owners, due dates, and useful reminders. Keep the process visible while leaving room for people to make good decisions.',
  },
  {
    title: 'Live analytics',
    slug: 'live-analytics',
    summary: 'See progress as it happens, without another status meeting.',
    body: 'Bring project health, recent activity, and workload into one readable view. Use the signals to spot a blocker early and decide what deserves attention.',
  },
  {
    title: 'Team workspaces',
    slug: 'team-workspaces',
    summary: 'Give every project a home your team can understand.',
    body: 'Group plans, notes, files, and decisions people need. Invite the right teammates and give them a shared picture of the work.',
  },
  {
    title: 'Automations',
    slug: 'automations',
    summary: 'Let routine updates happen in the background.',
    body: 'Create simple triggers for recurring handoffs and reminders. Review each rule before enabling it and keep a visible history of what ran.',
  },
  {
    title: 'Custom reports',
    slug: 'custom-reports',
    summary: 'Turn project activity into a useful summary.',
    body: 'Choose the measures that matter and share a clear report with stakeholders. Save common views so updates take minutes, not hours.',
  },
  {
    title: 'Secure sharing',
    slug: 'secure-sharing',
    summary: 'Share the right context with the right people.',
    body: 'Use flexible access settings and a clear activity history to keep collaboration organized across teams and guests.',
  },
  {
    title: 'Version history',
    slug: 'version-history',
    summary: 'Know what changed and when.',
    body: 'Review previous project states, understand recent edits, and restore a prior version when your team needs to retrace its steps.',
  },
  {
    title: 'Priority support',
    slug: 'priority-support',
    summary: 'Get a thoughtful answer when you need a hand.',
    body: 'Reach a support team for setup and workflow questions, with helpful guidance for getting the most out of your workspace.',
  },
];
export const integrations = [
  {
    name: 'CloudNote',
    slug: 'cloudnote',
    category: 'Notes',
    description: 'Keep project decisions and reference notes close to the work.',
  },
  {
    name: 'PixelBoard',
    slug: 'pixelboard',
    category: 'Design',
    description: 'Bring design reviews and creative milestones into your team view.',
  },
  {
    name: 'Orbit Mail',
    slug: 'orbit-mail',
    category: 'Communication',
    description: 'Turn important messages into visible next steps.',
  },
  {
    name: 'LedgerLeaf',
    slug: 'ledgerleaf',
    category: 'Finance',
    description: 'Keep budget checkpoints connected to project progress.',
  },
  {
    name: 'Meetly',
    slug: 'meetly',
    category: 'Meetings',
    description: 'Carry decisions and follow-ups forward after every meeting.',
  },
  {
    name: 'CodeNest',
    slug: 'codenest',
    category: 'Development',
    description: 'Align delivery plans with the issues developers are shipping.',
  },
];
const articleBodies: Record<string, string[]> = {
  'a-calmer-way-to-plan-your-week': [
    'A good week starts with a clear picture of what matters. Before filling the calendar, gather the team around two or three outcomes and the people responsible for moving them forward.',
    'Keep the plan short enough to revisit. A shared view of priorities, blockers, and next steps replaces scattered status messages and makes it easier to ask for help early.',
    'At the end of the week, capture what changed and what the team learned. That reflection gives Monday a calmer starting point and turns planning into a useful habit.',
  ],
  'make-project-updates-useful-again': [
    'A project update should help someone understand the state of the work and decide what to do next. Start with the outcome, then call out progress, risk, and any decision needed.',
    'Keep updates close to the project itself. Name an owner for each follow-up, use concrete dates, and link to the relevant task so readers can move from context to action.',
    'A reliable weekly rhythm beats a polished report that arrives too late. Ask readers what information they use, then remove anything that does not help them act.',
  ],
  'the-small-rituals-behind-great-teams': [
    'Strong teams make room for small habits that reduce uncertainty. A short kickoff, a written decision, or an end-of-week reflection can make collaboration feel much easier.',
    'Choose rituals that solve a real friction point. If a meeting no longer helps people decide or coordinate, reshape it or let it go rather than adding another process around it.',
    'The best routines are lightweight and shared. Explain the purpose, invite feedback, and adapt as the work changes so the ritual keeps serving the team.',
  ],
  'how-to-find-focus-in-a-busy-workspace': [
    'Focus improves when people can see what deserves attention now and what can wait. Make active priorities explicit and keep secondary ideas somewhere safe for later.',
    'Agree on shared expectations for interruptions and handoffs. Clear ownership gives teammates confidence to spend uninterrupted time on meaningful tasks.',
    'Review the plan when circumstances change. Focus is not a fixed schedule; it is the ability to choose the next useful step with enough context to do it well.',
  ],
  'a-practical-guide-to-better-handoffs': [
    'A clean handoff names the outcome, current status, next action, and any decision still needed. Put that context next to the task so it does not disappear in a chat thread.',
    'Make ownership explicit and include a useful due date. If work is waiting on someone, name who and what they need to provide to move it forward.',
    'A few consistent details help teams hand work across roles and time zones without slowing down. Review the handoff from the recipient’s point of view before sending it.',
  ],
  'make-space-for-meaningful-work': [
    'Busy calendars can hide the work that creates lasting value. Start by identifying the outcomes that matter and checking whether the week has room for them.',
    'Reduce repeated coordination where a clear owner or shared checklist would do. Keep conversations for decisions that benefit from people thinking together.',
    'Protecting meaningful work is a team practice. Revisit commitments together, make trade-offs visible, and leave enough room for the unexpected.',
  ],
  'building-a-team-rhythm-that-lasts': [
    'A useful team rhythm balances planning, focused work, and reflection. It creates predictable moments to coordinate without filling every open space.',
    'Start with the recurring decisions the team needs to make. Schedule only what helps those decisions and keep routine updates asynchronous when possible.',
    'Check in after a few weeks. A rhythm should adapt as the team and its priorities change, rather than becoming another process people maintain for its own sake.',
  ],
  'the-case-for-visible-progress': [
    'Visible progress gives everyone a shared reference point. Teammates can see what is complete, what comes next, and where a little help might make a difference.',
    'Keep the view meaningful by showing a small number of current measures. Make the status easy to update and explain labels in plain language.',
    'Visibility is most useful when it leads to action. Use it to make a decision, offer help, or celebrate a real milestone rather than tracking activity for its own sake.',
  ],
};

export const posts = [
  [
    'A calmer way to plan your week',
    'a-calmer-way-to-plan-your-week',
    'Teamwork',
    'October 20, 2025',
    '5 min read',
    'weekly-planning',
    'A small weekly planning ritual helps teams make space for the work that matters most.',
  ],
  [
    'Make project updates useful again',
    'make-project-updates-useful-again',
    'Productivity',
    'October 17, 2025',
    '4 min read',
    'project-updates',
    'Replace long status reports with a compact update people can act on.',
  ],
  [
    'The small rituals behind great teams',
    'the-small-rituals-behind-great-teams',
    'Culture',
    'October 14, 2025',
    '6 min read',
    'team-rituals',
    'Simple team habits can create clarity without adding another layer of process.',
  ],
  [
    'How to find focus in a busy workspace',
    'how-to-find-focus-in-a-busy-workspace',
    'Productivity',
    'October 10, 2025',
    '5 min read',
    'focus',
    'Practical ways to protect attention when your team has many moving parts.',
  ],
  [
    'A practical guide to better handoffs',
    'a-practical-guide-to-better-handoffs',
    'Teamwork',
    'October 7, 2025',
    '4 min read',
    'handoffs',
    'Give the next person enough context to keep a task moving confidently.',
  ],
  [
    'Make space for meaningful work',
    'make-space-for-meaningful-work',
    'Culture',
    'October 3, 2025',
    '5 min read',
    'meaningful-work',
    'Create room for the work that moves a team forward.',
  ],
  [
    'Building a team rhythm that lasts',
    'building-a-team-rhythm-that-lasts',
    'Teamwork',
    'September 29, 2025',
    '6 min read',
    'team-rhythm',
    'Build a cadence that supports the work instead of competing with it.',
  ],
  [
    'The case for visible progress',
    'the-case-for-visible-progress',
    'Productivity',
    'September 24, 2025',
    '4 min read',
    'visible-progress',
    'Make progress easy to recognize so teams can respond sooner.',
  ],
].map(([title, slug, category, date, readTime, image, excerpt]) => ({
  title,
  slug,
  category,
  date,
  readTime,
  image: `/images/blog-${image}.svg`,
  excerpt,
  body: [
    `A good week starts with a clear picture of what matters. Bring the team together around a few outcomes and the people responsible for moving them forward.`,
    `Keep the plan short enough to revisit. A shared view of priorities, blockers, and next steps can replace scattered status messages and make it easier to ask for help early.`,
    `A reliable rhythm matters more than a perfect template. Capture what changed, celebrate progress, and adapt your approach as the work evolves.`,
  ],
}));
export const docs = [
  ['Getting started', 'getting-started', 'A quick tour of your DemoSuite workspace.'],
  [
    'Install DemoSuite',
    'install-demosuite',
    'Add the plugin to your WordPress site and complete its first-run setup.',
  ],
  [
    'Create your first workspace',
    'create-your-first-workspace',
    'Organize projects and teammates in one shared place.',
  ],
  [
    'Invite your team',
    'invite-your-team',
    'Bring the right collaborators into a project.',
  ],
  [
    'Plan your first project',
    'plan-your-first-project',
    'Turn a goal into visible milestones and next steps.',
  ],
  [
    'Set up workflows',
    'set-up-workflows',
    'Create a lightweight process for recurring work.',
  ],
  [
    'Build a custom report',
    'build-a-custom-report',
    'Choose the measures you want to share.',
  ],
  [
    'Connect integrations',
    'connect-integrations',
    'Explore sample connections and setup guidance.',
  ],
  [
    'Manage permissions',
    'manage-permissions',
    'Keep workspace access clear and intentional.',
  ],
  ['Use automations', 'use-automations', 'Reduce repeated reminders with simple rules.'],
  [
    'Export your data',
    'export-your-data',
    'Download a copy of your workspace information.',
  ],
  [
    'Billing and licenses',
    'billing-and-licenses',
    'Understand plans, seats, and quantity discounts.',
  ],
].map(([title, slug, summary]) => ({
  title,
  slug,
  summary,
  body:
    slug === 'install-demosuite'
      ? 'Use the installation path that matches your release: install it from Plugins > Add New in WordPress, or upload the plugin ZIP provided by its publisher. Activate the plugin and open its settings page to follow the first-run prompts. Add the verified WordPress and PHP requirements for your release before publishing this guide. This is sample documentation; no plugin package is included.'
      : `${summary} Open the relevant plugin or WordPress settings, follow the guided steps, and review your changes before publishing them. This fictional demonstration explains the intended workflow; no external services are connected.`,
}));

export const testimonials = [
  {
    name: 'Maya Chen',
    portrait: '/images/review-maya.webp',
    headline: 'An easier way to run my site.',
    quote:
      'I found a clearer way to manage everyday work on my WordPress site without adding another complicated process.',
    role: 'Small business owner',
  },
  {
    name: 'Chris Park',
    portrait: '/images/review-chris.webp',
    headline: 'Straightforward from the start.',
    quote:
      'The steps were clear, and I could choose the option that made sense for my WordPress sites.',
    role: 'Independent site creator',
  },
  {
    name: 'Sofia Rivera',
    portrait: '/images/review-sofia.webp',
    headline: 'Support that makes sense.',
    quote:
      'When I had a question, the guidance helped me understand what to do next with my WordPress setup.',
    role: 'WordPress site owner',
  },
] as const;
