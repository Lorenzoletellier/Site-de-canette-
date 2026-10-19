import type { Metadata } from "next";
import Shop from "../components/Shop";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Nos saveurs — Pétille",
  description: "Les neuf sodas artisanaux Pétille, bio et peu sucrés, en canettes 33 cl.",
};

export default function SaveursPage() {
  return (
    <main className="flex-1">
      <div className="bg-sun">
        <SiteHeader />
      </div>
      <Shop />
      <SiteFooter />
    </main>
  );
}
