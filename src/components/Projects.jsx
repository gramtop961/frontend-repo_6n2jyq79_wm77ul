import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Interaktivní landing',
    description:
      'Hravá titulní stránka s 3D akcenty a svižnými přechody. Důraz na výkon a přístupnost.',
    tags: ['React', 'Spline', 'Framer Motion'],
    links: {
      live: '#',
      code: '#',
    },
  },
  {
    title: 'E‑commerce UI kit',
    description:
      'Čistá sada komponent pro moderní e‑shopy: produktové karty, filtry, košík i objednávky.',
    tags: ['Tailwind', 'Design Systems'],
    links: {
      live: '#',
      code: '#',
    },
  },
  {
    title: 'Portfolio engine',
    description:
      'Startér pro portfolia s nastavitelnými tokeny a hladkými přechody mezi stránkami.',
    tags: ['Vite', 'React Router'],
    links: {
      live: '#',
      code: '#',
    },
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: '#F7FFF9', fontFamily: 'Rubik, Helvetica, sans' }}>Vybrané projekty</h2>
            <p className="mt-2" style={{ color: 'rgba(247,255,249,0.7)', fontFamily: 'Inter, sans-serif, sans' }}>Nahlédni do věcí, které rád stavím.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold"
            style={{ borderColor: 'rgba(247,255,249,0.15)', color: '#F7FFF9', fontFamily: 'Inter, sans-serif, sans' }}
          >
            Pojďme spolupracovat
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border p-5"
              style={{ borderColor: 'rgba(247,255,249,0.08)', background: 'linear-gradient(135deg, rgba(106,31,106,0.12), rgba(162,52,5,0.10))' }}
            >
              <div className="flex h-full flex-col justify-between rounded-xl p-5 shadow-sm backdrop-blur"
                   style={{ background: 'rgba(23,23,23,0.6)', border: '1px solid rgba(247,255,249,0.06)' }}>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#F7FFF9', fontFamily: 'Rubik, Helvetica, sans' }}>{p.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: 'rgba(247,255,249,0.75)', fontFamily: 'Inter, sans-serif, sans' }}>{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full px-2.5 py-1 text-xs"
                        style={{ background: 'rgba(255,132,0,0.12)', color: '#F7FFF9', border: '1px solid rgba(255,132,0,0.25)', fontFamily: 'Inter, sans-serif, sans' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-4" style={{ color: 'rgba(247,255,249,0.9)', fontFamily: 'Inter, sans-serif, sans' }}>
                    <a
                      href={p.links.live}
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" color="#FF8400" />
                      <span className="text-sm font-medium">Živě</span>
                    </a>
                    <a
                      href={p.links.code}
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <Code className="h-4 w-4" color="#FF8400" />
                      <span className="text-sm font-medium">Kód</span>
                    </a>
                  </div>
                  <div className="rounded-full px-3 py-1 text-xs" style={{ background: 'rgba(247,255,249,0.08)', color: '#F7FFF9' }}>2025</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
