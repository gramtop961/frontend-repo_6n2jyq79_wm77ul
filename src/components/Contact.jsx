import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: '#F7FFF9', fontFamily: 'Rubik, Helvetica, sans' }}>Postavme něco skvělého</h2>
        <p className="mt-3" style={{ color: 'rgba(247,255,249,0.75)', fontFamily: 'Inter, sans-serif, sans' }}>
          Jsem dostupný pro freelance i spolupráce. Napiš mi o svém nápadu — odpovím do 24 hodin.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ahoj@winty.dev"
            className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold shadow transition-colors"
            style={{ background: '#FF8400', color: '#171717', fontFamily: 'Inter, sans-serif, sans' }}
          >
            <Mail className="h-4 w-4" /> Napsat e‑mail
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold"
            style={{ borderColor: 'rgba(247,255,249,0.15)', color: '#F7FFF9', fontFamily: 'Inter, sans-serif, sans' }}
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold"
            style={{ borderColor: 'rgba(247,255,249,0.15)', color: '#F7FFF9', fontFamily: 'Inter, sans-serif, sans' }}
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
        <p className="mt-6 text-xs" style={{ color: 'rgba(247,255,249,0.55)', fontFamily: 'Inter, sans-serif, sans' }}>© {new Date().getFullYear()} Winty Dev — s péčí a radostí.</p>
      </div>
    </section>
  );
}
