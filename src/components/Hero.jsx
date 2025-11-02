import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm mb-4">
            <Rocket className="h-3.5 w-3.5 text-indigo-600" />
            <span>Young web developer • playful & modern</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Building crisp, interactive web experiences
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
            I blend clean code with delightful motion to craft websites that feel alive. Dive into my work and play with the 3D scene below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-black transition-colors">
              See selected work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-black/20 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
