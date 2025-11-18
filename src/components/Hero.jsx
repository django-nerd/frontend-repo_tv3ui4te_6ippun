import { ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400/20 via-amber-500/10 to-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Award‑winning custom cabinetry
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform your space with cabinetry that sells your home for you
            </h1>
            <p className="mt-5 text-lg text-white/70">
              Luxury kitchen, bath, and built‑in cabinetry meticulously crafted to fit your home and lifestyle. Designed, built and installed by specialists—on time, on budget, every time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-slate-900 font-semibold shadow-lg ring-1 ring-amber-300 hover:bg-amber-400 transition">
                Get my free design consult
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition">
                See recent work
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-white/70">
              <div className="flex items-center gap-2 text-sm"><ShieldCheck className="h-4 w-4 text-amber-300" /> Lifetime hardware</div>
              <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-amber-300" /> 6–8 week lead time</div>
              <div className="flex items-center gap-2 text-sm"><ShieldCheck className="h-4 w-4 text-amber-300" /> 5‑year warranty</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop" alt="Modern kitchen cabinetry" className="h-full w-full object-cover mix-blend-luminosity opacity-90" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur shadow-lg">
              <p className="text-sm text-white/80">Premium maple + soft‑close drawers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
