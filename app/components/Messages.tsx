"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase, type News } from "../lib/supabase";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("fr-FR", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });

export default function Messages() {
  const [messages, setMessages] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  const load = useCallback(async () => {
    if (!supabase) {
      setError("Supabase n'est pas configuré : remplis le fichier .env.local.");
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from("news")
      .select("id, created_at, contenue")
      .order("created_at", { ascending: false })
      .limit(20);
    if (error) setError("Impossible de charger les messages.");
    else {
      setMessages(data ?? []);
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Chargement initial des messages depuis Supabase
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contenue = text.trim();
    if (!contenue || !supabase) return;
    setSending(true);
    const { error } = await supabase.from("news").insert({ contenue });
    setSending(false);
    if (error) {
      setError("Le message n'a pas pu être envoyé.");
      return;
    }
    setText("");
    load();
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold tracking-[0.2em] text-ink/60 uppercase">Le mur des bulles</p>
          <h2 className="font-display mt-2 text-4xl font-extrabold sm:text-5xl">Laisse-nous un message.</h2>
          <p className="mt-4 text-ink/70">Ta saveur préférée, une idée de recette, un mot doux : il s&apos;affiche ici pour tout le monde.</p>

          <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
            <label htmlFor="message" className="text-sm font-semibold">
              Ton message
            </label>
            <textarea
              id="message"
              rows={3}
              maxLength={280}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="La Framboise Basilic, c'est la meilleure !"
              className="rounded-2xl border-2 border-ink/20 bg-white px-4 py-3 outline-none focus:border-ink"
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-ink/50">{text.length}/280</span>
              <button
                type="submit"
                disabled={sending || !text.trim()}
                className="rounded-full bg-ink px-6 py-3 font-semibold text-cream transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
              >
                {sending ? "Envoi…" : "Publier"}
              </button>
            </div>
          </form>
        </div>

        <div className="md:col-span-3">
          {loading ? (
            <p className="text-ink/50">Chargement des messages…</p>
          ) : error ? (
            <p className="rounded-2xl bg-red-50 p-4 text-red-700">{error}</p>
          ) : messages.length === 0 ? (
            <p className="text-ink/50">Aucun message pour l&apos;instant. Sois le premier !</p>
          ) : (
            <ul className="space-y-3">
              {messages.map((m) => (
                <li key={m.id} className="rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                  <p className="whitespace-pre-line">{m.contenue}</p>
                  <p className="mt-2 text-xs text-ink/50">{formatDate(m.created_at)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
