import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Winty Dev
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:hello@winty.dev" aria-label="Email" className="p-2 rounded-full hover:bg-gray-100">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-100">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
