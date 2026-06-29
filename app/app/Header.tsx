export function Header() {
  return <header className="fixed top-0 z-50 w-full border-b border-cream/10 bg-forest/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <a href="#home" className="font-serif text-2xl tracking-wide text-cream">Ember <span className="text-copper">&</span> Leaf</a>
      <nav className="hidden gap-8 text-sm uppercase tracking-[.25em] text-cream/70 md:flex">
        <a href="#menu" className="hover:text-copper">Menu</a><a href="#story" className="hover:text-copper">Story</a><a href="#reserve" className="hover:text-copper">Reserve</a>
      </nav>
    </div>
  </header>
}
