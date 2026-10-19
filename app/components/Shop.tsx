"use client";

import { useMemo, useState } from "react";
import Can from "./Can";
import ProductModal from "./ProductModal";
import { flavors, formatPrice, type Flavor } from "../data";

type Cart = Record<string, number>;

export default function Shop() {
  const [cart, setCart] = useState<Cart>({});
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Flavor | null>(null);

  const items = useMemo(
    () =>
      flavors
        .filter((f) => cart[f.id])
        .map((f) => ({ ...f, qty: cart[f.id] })),
    [cart],
  );
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const change = (id: string, delta: number) =>
    setCart((prev) => {
      const qty = (prev[id] ?? 0) + delta;
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 z-40 flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-lg transition hover:scale-105"
        aria-label={`Ouvrir le panier (${count} article${count > 1 ? "s" : ""})`}
      >
        Panier
        <span className="grid h-6 min-w-6 place-items-center rounded-full bg-cream px-1.5 text-xs text-ink">
          {count}
        </span>
      </button>

      <section id="saveurs" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-ink/60 uppercase">La gamme</p>
        <h2 className="font-display mt-2 text-4xl font-extrabold sm:text-5xl">Neuf saveurs, zéro compromis.</h2>
        <p className="mt-3 text-ink/60">Clique sur une canette pour découvrir sa fiche complète.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flavors.map((f) => (
            <article
              key={f.id}
              className="group flex flex-col rounded-3xl p-6 transition hover:-translate-y-1"
              style={{ backgroundColor: `${f.color}22` }}
            >
              <button
                onClick={() => setSelected(f)}
                className="flex h-56 cursor-pointer items-center justify-center"
                aria-label={`Voir la fiche ${f.name}`}
              >
                <Can
                  name={f.name}
                  color={f.color}
                  accent={f.accent}
                  className="h-full drop-shadow-xl transition duration-500 group-hover:-rotate-6 group-hover:scale-105"
                />
              </button>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-bold">{f.name}</h3>
                <span className="font-semibold">{formatPrice(f.price)}</span>
              </div>
              <p className="text-sm font-medium text-ink/60">{f.tagline} · {f.kcal} kcal</p>
              <p className="mt-3 flex-1 text-ink/80">{f.description}</p>
              <button
                onClick={() => change(f.id, 1)}
                className="mt-6 rounded-full py-3 font-semibold transition hover:opacity-90 active:scale-95"
                style={{ backgroundColor: f.color, color: f.accent }}
              >
                {cart[f.id] ? `Ajouter (${cart[f.id]} au panier)` : "Ajouter au panier"}
              </button>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <ProductModal
          flavor={selected}
          onClose={() => setSelected(null)}
          onAdd={() => change(selected.id, 1)}
        />
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Fermer le panier"
          />
          <aside className="relative flex h-full w-full max-w-md flex-col bg-cream p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">Ton panier</h2>
              <button onClick={() => setOpen(false)} className="text-2xl leading-none" aria-label="Fermer">
                ×
              </button>
            </div>

            {items.length === 0 ? (
              <p className="mt-10 text-ink/60">Ton panier est vide. Choisis une saveur !</p>
            ) : (
              <ul className="mt-6 flex-1 space-y-4 overflow-y-auto">
                {items.map((i) => (
                  <li key={i.id} className="flex items-center gap-4 rounded-2xl bg-white/70 p-3">
                    <Can name={i.name} color={i.color} accent={i.accent} className="h-16 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold">{i.name}</p>
                      <p className="text-sm text-ink/60">{formatPrice(i.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => change(i.id, -1)} className="h-8 w-8 rounded-full border border-ink/20" aria-label={`Retirer une ${i.name}`}>−</button>
                      <span className="w-5 text-center font-semibold">{i.qty}</span>
                      <button onClick={() => change(i.id, 1)} className="h-8 w-8 rounded-full border border-ink/20" aria-label={`Ajouter une ${i.name}`}>+</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 border-t border-ink/10 pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button
                disabled={items.length === 0}
                onClick={() => alert("Merci ! (démo : aucun paiement réel)")}
                className="mt-4 w-full rounded-full bg-ink py-3 font-semibold text-cream transition hover:opacity-90 disabled:opacity-40"
              >
                Commander
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
