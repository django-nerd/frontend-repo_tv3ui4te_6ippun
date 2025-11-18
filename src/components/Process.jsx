import { PenTool, Ruler, Wrench, Smile } from 'lucide-react'

export default function Process() {
  const steps = [
    { icon: PenTool, title: 'Design consult', text: 'We listen, measure, and propose smart options aligned to your budget.' },
    { icon: Ruler, title: 'Precision build', text: 'Materials ordered. Boxes milled. Finishes sprayed. Quality at every step.' },
    { icon: Wrench, title: 'Seamless install', text: 'Tidy crews, tight seams, perfect reveals. We treat your home with care.' },
    { icon: Smile, title: 'Walk‑through & warranty', text: 'We fine‑tune doors/drawers and back everything with a real warranty.' },
  ]

  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our simple, proven process</h2>
          <p className="mt-3 text-white/70">Clarity from first call to final wipe‑down. No surprises, just craftsmanship.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-slate-900 font-bold shadow ring-1 ring-amber-300">{i+1}</div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 ring-1 ring-amber-300/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
