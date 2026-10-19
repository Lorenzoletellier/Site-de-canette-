import Can from "./components/Can";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { flavors } from "./data";

const [lemon, raspberry, peach] = flavors;

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-sun">
        <SiteHeader />

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
              <Link href="/saveurs" className="rounded-full bg-ink px-7 py-4 font-semibold text-cream transition hover:scale-105">
                Découvrir les saveurs
              </Link>
              <Link href="/notre-histoire" className="rounded-full border-2 border-ink px-7 py-4 font-semibold transition hover:bg-ink hover:text-cream">
                Notre histoire
              </Link>
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

      {/* Accès rapides */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { href: "/saveurs", kicker: "La gamme", title: "Neuf saveurs", text: "Découvre toutes nos canettes et compose ton panier." },
            { href: "/notre-histoire", kicker: "Depuis 2019", title: "Notre histoire", text: "D'une simple cuisine à neuf recettes : l'aventure Pétille." },
            { href: "/contact", kicker: "On t'écoute", title: "Contact", text: "Une question, un événement, une envie ? Écris-nous." },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-3xl border-2 border-ink/10 p-8 transition hover:-translate-y-1 hover:border-ink"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-ink/50 uppercase">{c.kicker}</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold">{c.title}</h2>
              <p className="mt-3 text-ink/70">{c.text}</p>
              <span className="mt-6 inline-block font-semibold group-hover:underline">Y aller →</span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
