import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Landing',
    description:
      'Playful homepage with 3D accents and snappy transitions. Optimized for performance and accessibility.',
    tags: ['React', 'Spline', 'Framer Motion'],
    links: {
      live: '#',
      code: '#',
    },
    gradient: 'from-indigo-500/10 to-fuchsia-500/10',
  },
  {
    title: 'E‑commerce UI kit',
    description:
      'Clean component set for modern shops: product cards, filters, carts, and order timelines.',
    tags: ['Tailwind', 'Design Systems'],
    links: {
      live: '#',
      code: '#',
    },
    gradient: 'from-emerald-500/10 to-cyan-500/10',
  },
  {
    title: 'Portfolio Engine',
    description:
      'Templated portfolio starter with themeable tokens and smooth page transitions.',
    tags: ['Vite', 'React Router'],
    links: {
      live: '#',
      code: '#',
    },
    gradient: 'from-orange-500/10 to-pink-500/10',
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Work</h2>
            <p className="text-gray-600 mt-2">A peek into things I like to build.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:border-black/20"
          >
            Let’s collaborate
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br ${p.gradient} p-5`}
            >
              <div className="flex h-full flex-col justify-between rounded-xl bg-white/70 p-5 shadow-sm backdrop-blur">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-xs text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-700">
                    <a
                      href={p.links.live}
                      className="inline-flex items-center gap-1 hover:text-gray-900"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                    <a
                      href={p.links.code}
                      className="inline-flex items-center gap-1 hover:text-gray-900"
                    >
                      <Code className="h-4 w-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                  <div className="rounded-full bg-black/5 px-3 py-1 text-xs">2025</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
