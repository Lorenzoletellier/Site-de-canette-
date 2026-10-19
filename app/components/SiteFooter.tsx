import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-ink/60 sm:flex-row sm:px-6">
        <Link href="/" className="font-display font-bold text-ink">
          PÉTILLE
        </Link>
        <div className="flex gap-6 font-medium">
          <Link href="/saveurs" className="hover:text-ink">Saveurs</Link>
          <Link href="/notre-histoire" className="hover:text-ink">Notre histoire</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </div>
        <span>© 2026 Pétille — L&apos;abus de bulles n&apos;est pas dangereux.</span>
      </div>
    </footer>
  );
}
