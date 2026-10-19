"use client";

import { useEffect } from "react";
import Can from "./Can";
import { formatPrice, type Flavor } from "../data";

type Props = {
  flavor: Flavor;
  onClose: () => void;
  onAdd: () => void;
};

export default function ProductModal({ flavor, onClose, onAdd }: Props) {
  // Fermer avec la touche Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <button
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fermer la fiche"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={flavor.name}
        className="relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-cream shadow-2xl md:grid-cols-2"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 z-10 text-3xl leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        <div
          className="flex items-center justify-center p-8"
          style={{ backgroundColor: `${flavor.color}33` }}
        >
          <Can
            name={flavor.name}
            color={flavor.color}
            accent={flavor.accent}
            className="float h-64 drop-shadow-2xl md:h-80"
          />
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-ink/60 uppercase">{flavor.tagline}</p>
          <h2 className="font-display mt-1 text-4xl font-extrabold">{flavor.name}</h2>
          <p className="mt-4 text-ink/80">{flavor.story}</p>

          <h3 className="mt-6 font-semibold">Ingrédients</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {flavor.ingredients.map((i) => (
              <li key={i} className="rounded-full bg-white px-3 py-1 text-sm">
                {i}
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white p-3">
              <dt className="text-xs text-ink/60">Calories</dt>
              <dd className="font-bold">{flavor.kcal} kcal</dd>
            </div>
            <div className="rounded-2xl bg-white p-3">
              <dt className="text-xs text-ink/60">Sucre</dt>
              <dd className="font-bold">{flavor.sugar} g/100 ml</dd>
            </div>
            <div className="rounded-2xl bg-white p-3">
              <dt className="text-xs text-ink/60">Format</dt>
              <dd className="font-bold">33 cl</dd>
            </div>
          </dl>

          <p className="mt-6 text-sm">
            <span className="font-semibold">Accord parfait : </span>
            {flavor.pairing}
          </p>

          <div className="mt-8 flex items-center justify-between gap-4">
            <span className="text-2xl font-bold">{formatPrice(flavor.price)}</span>
            <button
              onClick={onAdd}
              className="rounded-full px-6 py-3 font-semibold transition hover:opacity-90 active:scale-95"
              style={{ backgroundColor: flavor.color, color: flavor.accent }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
