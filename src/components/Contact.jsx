import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something fun</h2>
        <p className="mt-3 text-gray-600">
          I’m available for freelance and collaboration. Tell me about your idea — I’ll reply within a day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@winty.dev"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-black"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-black/20"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-black/20"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Winty Dev — crafted with care.</p>
      </div>
    </section>
  );
}
