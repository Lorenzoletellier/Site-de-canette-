import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact — Pétille",
  description: "Écris à l'équipe Pétille ou inscris-toi à la newsletter.",
};

const faq = [
  ["Où trouver vos canettes ?", "Sur ce site, dans une sélection d'épiceries fines et sur les marchés où nous sommes présents chaque week-end."],
  ["Livrez-vous les entreprises et les événements ?", "Oui, à partir de 48 canettes. Indique la date et le nombre de personnes dans ton message."],
  ["Vos sodas conviennent-ils aux enfants ?", "Oui : aucune caféine, sauf le Cola Vanille qui contient un peu de noix de kola. Tous sont peu sucrés."],
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="bg-sun">
        <SiteHeader />
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-ink/60 uppercase">Contact</p>
          <h1 className="font-display mt-2 max-w-2xl text-5xl leading-[0.95] font-extrabold sm:text-6xl">
            Une question ? Une envie de bulles ?
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/80">
            On répond à tous les messages, en général sous 48 heures.
          </p>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-5">
        <form className="flex flex-col gap-4 md:col-span-3" action="#">
          <h2 className="font-display text-3xl font-extrabold">Écris-nous</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Prénom
              <input required className="rounded-2xl border-2 border-ink/20 bg-white px-4 py-3 font-normal outline-none focus:border-ink" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              E-mail
              <input type="email" required placeholder="ton@email.fr" className="rounded-2xl border-2 border-ink/20 bg-white px-4 py-3 font-normal outline-none focus:border-ink" />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-semibold">
            Sujet
            <select className="rounded-2xl border-2 border-ink/20 bg-white px-4 py-3 font-normal outline-none focus:border-ink">
              <option>Une question sur une saveur</option>
              <option>Une commande</option>
              <option>Un événement ou une entreprise</option>
              <option>Devenir revendeur</option>
              <option>Autre</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold">
            Message
            <textarea required rows={6} className="rounded-2xl border-2 border-ink/20 bg-white px-4 py-3 font-normal outline-none focus:border-ink" />
          </label>
          <button className="self-start rounded-full bg-ink px-8 py-4 font-semibold text-cream transition hover:scale-105">
            Envoyer
          </button>
        </form>

        <aside className="space-y-8 md:col-span-2">
          <div className="rounded-3xl bg-ink p-8 text-cream">
            <h2 className="font-display text-2xl font-bold">Reste dans la bulle.</h2>
            <p className="mt-2 text-cream/70">Nouvelles saveurs, éditions limitées et offres en avant-première.</p>
            <form className="mt-6 flex flex-col gap-3" action="#">
              <input
                type="email"
                required
                placeholder="ton@email.fr"
                className="rounded-full border-2 border-cream/20 bg-transparent px-5 py-3 outline-none focus:border-sun"
              />
              <button className="rounded-full bg-sun px-6 py-3 font-semibold text-ink">S&apos;inscrire</button>
            </form>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Questions fréquentes</h2>
            <div className="mt-4 divide-y divide-ink/10">
              {faq.map(([q, a]) => (
                <details key={q} className="group py-4">
                  <summary className="cursor-pointer font-semibold">{q}</summary>
                  <p className="mt-2 text-ink/70">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
