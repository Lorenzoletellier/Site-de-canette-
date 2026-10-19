"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/saveurs", label: "Saveurs", short: "Saveurs" },
  { href: "/notre-histoire", label: "Notre histoire", short: "Histoire" },
  { href: "/contact", label: "Contact", short: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-sun/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4 sm:gap-10 sm:px-6 sm:pr-40">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight sm:text-2xl" aria-label="Pétille, accueil">
          PÉTILLE
        </Link>
        <div className="flex gap-4 text-sm font-semibold sm:gap-8">
          {links.map(({ href, label, short }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 transition-opacity ${active ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
              >
                <span className="sm:hidden">{short}</span>
                <span className="hidden sm:inline">{label}</span>
                {active && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-ink" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
