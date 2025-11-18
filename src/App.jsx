import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Process />
        <CTA />
        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-white/60">
              <p>© {new Date().getFullYear()} Cabinet Studio. All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#benefits" className="hover:text-white">Why us</a>
                <a href="#process" className="hover:text-white">Process</a>
                <a href="#contact" className="hover:text-white">Get a quote</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
