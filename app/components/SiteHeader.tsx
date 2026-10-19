"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/saveurs", label: "Saveurs" },
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-4 py-6 pr-36 sm:px-6 sm:pr-40">
      <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">
        PÉTILLE
      </Link>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold sm:gap-8">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={active ? "underline decoration-2 underline-offset-4" : "hover:underline"}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
