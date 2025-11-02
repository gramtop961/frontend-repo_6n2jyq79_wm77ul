import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1" style={{ color: '#F7FFF9' }}>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm mb-4"
               style={{ borderColor: 'rgba(247,255,249,0.12)', background: 'rgba(247,255,249,0.08)', color: '#F7FFF9', fontFamily: 'Inter, sans-serif, sans' }}>
            <Rocket className="h-3.5 w-3.5" color="#FF8400" />
            <span>Mladý webový vývojář • hravé a moderní</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
              style={{ fontFamily: 'Rubik, Helvetica, sans' }}>
            Tvořím čisté a interaktivní weby
          </h1>
          <p className="mt-5 text-base sm:text-lg max-w-xl" style={{ color: 'rgba(247,255,249,0.8)', fontFamily: 'Inter, sans-serif, sans' }}>
            Kombinuji precizní kód a jemné animace, aby weby působily živě. Prozkoumej mou práci a pohraj si s 3D scénou vedle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold shadow transition-colors"
               style={{ background: '#FF8400', color: '#171717', fontFamily: 'Inter, sans-serif, sans' }}>
              Zobrazit projekty
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition-colors"
               style={{ borderColor: 'rgba(247,255,249,0.15)', background: 'transparent', color: '#F7FFF9', fontFamily: 'Inter, sans-serif, sans' }}>
              Napiš mi
            </a>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full rounded-2xl overflow-hidden"
               style={{ background: '#171717', border: '1px solid rgba(247,255,249,0.06)' }}>
            <Spline
              scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(23,23,23,0.6), transparent 40%, rgba(23,23,23,0.3))' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
