import { useState } from 'react'
import { Menu, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#gallery' },
    { label: 'Why Us', href: '#benefits' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 ring-1 ring-white/20 shadow-md" />
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide">Cabinet Studio</p>
                <p className="text-xs text-white/60">Custom Kitchens & Built‑ins</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400 transition-colors">
                <Phone className="h-4 w-4" />
                Free Quote
              </a>
            </div>

            <button onClick={() => setOpen((s) => !s)} className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white hover:bg-white/5">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400" onClick={() => setOpen(false)}>
                  <Phone className="h-4 w-4" /> Free Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
