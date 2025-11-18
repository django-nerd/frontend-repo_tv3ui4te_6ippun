import { Ruler, Hammer, Truck, Paintbrush, ShieldCheck, Stars } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Ruler, title: 'Tailor‑made', text: 'Every millimeter measured and built to your exact space—no fillers, no compromises.' },
    { icon: Hammer, title: 'Crafted to last', text: 'Solid wood boxes, dovetail joints, and premium hardware as our default, not an upgrade.' },
    { icon: Paintbrush, title: 'Flawless finishes', text: 'Hand‑finished in our spray booth with durable, silky‑smooth coatings.' },
    { icon: Truck, title: 'White‑glove install', text: 'Clean, respectful crews that protect your home and leave it spotless.' },
    { icon: ShieldCheck, title: '5‑year warranty', text: 'Real coverage, real people. We stand behind our work long after install.' },
    { icon: Stars, title: 'Rave‑worthy results', text: 'Designs that wow buyers and make every day feel elevated.' },
  ]

  return (
    <section id="benefits" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for beauty. Engineered for life.</h2>
          <p className="mt-3 text-white/70">We obsess over the little things so you don’t have to. The result: cabinetry that looks incredible and works flawlessly for years.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 ring-1 ring-amber-300/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
