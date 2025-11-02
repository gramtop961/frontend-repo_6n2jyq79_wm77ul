import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-fuchsia-200/70 selection:text-gray-900">
      <Navbar />
      <main>
        {/* Hero with Spline scene */}
        <Hero />
        {/* Work section */}
        <Projects />
        {/* Contact section */}
        <Contact />
      </main>
      <div className="pointer-events-none fixed inset-0 -z-[1] opacity-[0.07]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#6366F1_0%,transparent_25%),radial-gradient(circle_at_80%_20%,#F472B6_0%,transparent_25%),radial-gradient(circle_at_30%_80%,#22D3EE_0%,transparent_25%)]" />
      </div>
    </div>
  );
}

export default App;
