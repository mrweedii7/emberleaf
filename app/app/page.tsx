import { Header } from '@/components/Header';
import { menu } from '@/lib/menu';

export default function Home() {
  return <main id="home" className="min-h-screen bg-forest text-cream">
    <Header />
    <section className="hero-grid flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[.45em] text-copper">Coffee • Tea • Community</p>
          <h1 className="font-serif text-6xl leading-none md:text-8xl">Where fire meets flavor.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-cream/75">Ember & Leaf is a premium café concept for specialty coffee, handcrafted chai, calm interiors, and hospitality that feels personal.</p>
          <div className="mt-9 flex flex-wrap gap-4"><a href="#menu" className="rounded-full bg-copper px-7 py-4 font-semibold text-forest">Explore menu</a><a href="#reserve" className="rounded-full border border-cream/25 px-7 py-4 text-cream">Reserve a table</a></div>
        </div>
        <div className="glass rounded-[2rem] p-6 shadow-2xl"><div className="rounded-[1.5rem] bg-cream p-8 text-forest"><p className="text-sm uppercase tracking-[.3em] text-moss">Founder preview</p><h2 className="mt-4 font-serif text-4xl">Ember Coffee<br/>Leaf Tea Co.</h2><p className="mt-5 text-forest/70">Built as a scalable brand: cafés, roasted coffee, premium tea, subscriptions, wholesale, and future franchising.</p></div></div>
      </div>
    </section>
    <section id="menu" className="mx-auto max-w-7xl px-6 py-28"><p className="text-copper uppercase tracking-[.35em]">Menu</p><h2 className="mt-4 font-serif text-5xl">Signature selections</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{menu.map((group) => <div key={group.category} className="glass rounded-3xl p-7"><h3 className="font-serif text-3xl text-copper">{group.category}</h3>{group.items.map(item => <div key={item.name} className="border-b border-cream/10 py-5 last:border-0"><div className="flex justify-between gap-4"><strong>{item.name}</strong><span>{item.price}</span></div><p className="mt-2 text-sm text-cream/65">{item.description}</p></div>)}</div>)}</div></section>
    <section id="story" className="bg-cream px-6 py-28 text-forest"><div className="mx-auto max-w-5xl text-center"><p className="text-sm uppercase tracking-[.35em] text-moss">Brand story</p><h2 className="mt-4 font-serif text-5xl">A café brand designed to become an ecosystem.</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-forest/70">Ember represents warmth, roasting and craft. Leaf represents tea, nature and growth. Together they form a brand that can expand from one flagship café into products, wholesale, subscriptions and future locations.</p></div></section>
    <section id="reserve" className="mx-auto max-w-4xl px-6 py-28"><div className="glass rounded-[2rem] p-8 md:p-12"><p className="text-copper uppercase tracking-[.35em]">Opening soon</p><h2 className="mt-4 font-serif text-5xl">Join the launch list.</h2><form className="mt-8 grid gap-4 md:grid-cols-2"><input className="rounded-full border border-cream/15 bg-cream/10 px-5 py-4 outline-none" placeholder="Your name"/><input className="rounded-full border border-cream/15 bg-cream/10 px-5 py-4 outline-none" placeholder="Email address"/><button className="rounded-full bg-copper px-7 py-4 font-semibold text-forest md:col-span-2">Notify me</button></form></div></section>
    <footer className="border-t border-cream/10 px-6 py-10 text-center text-sm text-cream/55">© Ember & Leaf — emberandleaf.nl</footer>
  </main>;
}
