export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616486886892-1c59be3bb126?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-1e4ce9a48f16?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616139128424-a6343c7995c9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584622781564-1f08870d88b0?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Recent installs</h2>
            <p className="mt-2 text-white/70">A snapshot of kitchens, vanities, and built‑ins we’ve delivered lately.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">Get a quote</a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-slate-800">
              <img src={src} alt="Cabinet project" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
