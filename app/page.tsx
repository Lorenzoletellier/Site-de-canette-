import Can from "./components/Can";
import Shop from "./components/Shop";
import { flavors } from "./data";

const [lemon, raspberry, peach] = flavors;

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-sun">
        <nav className="mx-auto flex max-w-6xl items-center px-4 py-6 sm:px-6">
          <span className="font-display text-2xl font-extrabold tracking-tight">PÉTILLE</span>
          <div className="ml-10 hidden gap-8 text-sm font-semibold sm:flex">
            <a href="#saveurs" className="hover:underline">Saveurs</a>
            <a href="#histoire" className="hover:underline">Notre histoire</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-24 sm:px-6 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-ink px-4 py-1 text-xs font-semibold tracking-widest text-cream uppercase">
              Nouveau · Gamme 2026
            </p>
            <h1 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold sm:text-7xl">
              Des bulles qui ont du caractère.
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink/80">
              Sodas artisanaux bio, peu sucrés, brassés en France avec de vrais fruits. Ouvre, écoute le
              <em> pschitt</em>, savoure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#saveurs" className="rounded-full bg-ink px-7 py-4 font-semibold text-cream transition hover:scale-105">
                Découvrir les saveurs
              </a>
              <a href="#histoire" className="rounded-full border-2 border-ink px-7 py-4 font-semibold transition hover:bg-ink hover:text-cream">
                Notre histoire
              </a>
            </div>
          </div>

          <div className="relative flex h-80 items-end justify-center sm:h-[28rem]">
            <span className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-2xl" />
            <Can {...raspberry} className="float-slow relative -mr-10 h-60 -rotate-12 drop-shadow-2xl sm:h-80" />
            <Can {...lemon} className="float relative z-10 h-72 drop-shadow-2xl sm:h-96" />
            <Can {...peach} className="float-slow relative -ml-10 h-60 rotate-12 drop-shadow-2xl sm:h-80" />
          </div>
        </div>

        <div className="overflow-hidden border-y-2 border-ink bg-ink py-3 text-cream">
          <div className="marquee flex w-max gap-10 font-display text-xl font-bold whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["BIO", "PEU SUCRÉ", "VRAIS FRUITS", "FABRIQUÉ EN FRANCE", "100 % RECYCLABLE", "SANS ARÔMES ARTIFICIELS"].map((t) => (
                <span key={`${k}-${t}`}>✦ {t}</span>
              )),
            )}
          </div>
        </div>
      </section>

      <Shop />

      {/* Histoire */}
      <section id="histoire" className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-cream/60 uppercase">Notre histoire</p>
            <h2 className="font-display mt-2 text-4xl font-extrabold">Né dans une cuisine, pas dans un labo.</h2>
          </div>
          {[
            ["4 g", "de sucre pour 100 ml, en moyenne. Deux fois moins qu'un soda classique."],
            ["100 %", "des fruits issus de l'agriculture biologique et de producteurs partenaires."],
            ["∞", "L'aluminium de nos canettes se recycle à l'infini. Trie-la, elle reviendra."],
          ].map(([stat, text]) => (
            <div key={stat} className="border-t border-cream/20 pt-6 md:col-start-auto">
              <p className="font-display text-6xl font-extrabold text-sun">{stat}</p>
              <p className="mt-4 text-cream/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / newsletter */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Reste dans la bulle.</h2>
        <p className="mt-4 text-ink/70">Nouvelles saveurs, éditions limitées et offres en avant-première.</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" action="#">
          <input
            type="email"
            required
            placeholder="ton@email.fr"
            className="flex-1 rounded-full border-2 border-ink/20 bg-white px-5 py-3 outline-none focus:border-ink"
          />
          <button className="rounded-full bg-ink px-6 py-3 font-semibold text-cream">S&apos;inscrire</button>
        </form>
      </section>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-ink/60 sm:flex-row sm:px-6">
          <span className="font-display font-bold text-ink">PÉTILLE</span>
          <span>© 2026 Pétille — L&apos;abus de bulles n&apos;est pas dangereux.</span>
        </div>
      </footer>
    </main>
  );
}
