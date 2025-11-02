import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#171717]/70 bg-[#171717]/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-extrabold text-lg tracking-tight"
          style={{ fontFamily: 'Rubik, Helvetica, sans' }}
        >
          <span className="bg-gradient-to-r from-[#FF8400] via-[#A23405] to-[#6A1F6A] bg-clip-text text-transparent">
            Winty Dev
          </span>
        </a>
        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          style={{ color: '#F7FFF9', fontFamily: 'Inter, sans-serif, sans' }}
        >
          <a href="#work" className="transition-colors hover:text-[#FF8400]">Projekty</a>
          <a href="#contact" className="transition-colors hover:text-[#FF8400]">Kontakt</a>
          <a href="#about" className="transition-colors hover:text-[#FF8400]">O mně</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="mailto:ahoj@winty.dev"
            aria-label="Email"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Mail className="h-5 w-5" color="#F7FFF9" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Github className="h-5 w-5" color="#F7FFF9" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Linkedin className="h-5 w-5" color="#F7FFF9" />
          </a>
        </div>
      </div>
    </header>
  );
}
