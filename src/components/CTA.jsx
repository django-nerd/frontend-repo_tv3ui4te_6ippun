import { PhoneCall, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to love your cabinets?</h2>
            <p className="mt-3 text-white/70">Tell us a bit about your project. We’ll send ideas and pricing within 24 hours—no hard sell.</p>
          </div>

          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Full name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40 sm:col-span-1" />
            <input type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40 sm:col-span-1" />
            <input type="tel" placeholder="Phone (optional)" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40 sm:col-span-1" />
            <input type="text" placeholder="City" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40 sm:col-span-1" />
            <textarea placeholder="Project details (room, style, timeline, budget)" rows={4} className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />

            <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-slate-900 font-semibold shadow-lg ring-1 ring-amber-300 hover:bg-amber-400 transition">
                <PhoneCall className="h-4 w-4" />
                Get my free quote
              </button>
              <p className="text-xs text-white/60">or call (555) 012‑3456</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
