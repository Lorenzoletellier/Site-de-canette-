export type Family = "fraiches" | "fruitees" | "gourmandes";

export const families: { id: Family; label: string }[] = [
  { id: "fraiches", label: "Fraîches" },
  { id: "fruitees", label: "Fruitées" },
  { id: "gourmandes", label: "Gourmandes" },
];

export type Flavor = {
  id: string;
  family: Family;
  name: string;
  tagline: string;
  description: string;
  story: string;
  ingredients: string[];
  pairing: string;
  sugar: number;
  price: number;
  color: string;
  accent: string;
  kcal: number;
};

export const flavors: Flavor[] = [
  {
    id: "citron-yuzu",
    family: "fraiches",
    name: "Citron Yuzu",
    tagline: "Acidulé & solaire",
    description: "Citron jaune pressé, une pointe de yuzu japonais et des bulles fines.",
    story: "Notre toute première recette, née d'un voyage au Japon. Le yuzu apporte une acidité florale qui réveille le citron sans l'écraser.",
    ingredients: ["Eau gazéifiée", "Jus de citron 8 %", "Jus de yuzu 2 %", "Sucre de canne bio", "Zestes de citron"],
    pairing: "Parfait avec des sushis ou une salade de crevettes.",
    sugar: 4,
    price: 2.5,
    color: "#f5c518",
    accent: "#1f2a1a",
    kcal: 18,
  },
  {
    id: "framboise-basilic",
    family: "fruitees",
    name: "Framboise Basilic",
    tagline: "Fruité & herbacé",
    description: "Framboises de France rehaussées d'un basilic frais du jardin.",
    story: "Un duo inattendu trouvé un soir d'été au marché : la douceur des framboises, la fraîcheur poivrée du basilic.",
    ingredients: ["Eau gazéifiée", "Purée de framboise 10 %", "Infusion de basilic", "Sucre de canne bio", "Jus de citron"],
    pairing: "Idéal avec une burrata ou un dessert au chocolat blanc.",
    sugar: 5,
    price: 2.8,
    color: "#e63e6d",
    accent: "#fff4f6",
    kcal: 22,
  },
  {
    id: "peche-gingembre",
    family: "fruitees",
    name: "Pêche Gingembre",
    tagline: "Doux & piquant",
    description: "Pêche blanche juteuse et gingembre râpé pour un final qui réveille.",
    story: "La pêche blanche de la vallée du Rhône rencontre un gingembre frais râpé à la main pour un final qui pique juste ce qu'il faut.",
    ingredients: ["Eau gazéifiée", "Purée de pêche blanche 12 %", "Gingembre frais", "Sucre de canne bio", "Jus de citron vert"],
    pairing: "Super avec un curry doux ou des brochettes grillées.",
    sugar: 5,
    price: 2.8,
    color: "#ff8a3d",
    accent: "#2b1406",
    kcal: 24,
  },
  {
    id: "concombre-menthe",
    family: "fraiches",
    name: "Concombre Menthe",
    tagline: "Frais & léger",
    description: "Concombre croquant et menthe poivrée, le rafraîchissement absolu.",
    story: "La plus légère de la gamme. Pensée pour les jours de canicule, elle désaltère comme une eau infusée, avec des bulles en plus.",
    ingredients: ["Eau gazéifiée", "Jus de concombre 6 %", "Menthe poivrée", "Sucre de canne bio", "Jus de citron vert"],
    pairing: "À boire avec un taboulé ou un poke bowl.",
    sugar: 3,
    price: 2.5,
    color: "#3fbf7f",
    accent: "#06200f",
    kcal: 12,
  },
  {
    id: "cola-vanille",
    family: "gourmandes",
    name: "Cola Vanille",
    tagline: "Classique revisité",
    description: "Un cola artisanal aux épices douces et à la vanille de Madagascar.",
    story: "Notre version du grand classique : noix de kola, cannelle, agrumes et une vraie gousse de vanille. Sans colorant ni acide phosphorique.",
    ingredients: ["Eau gazéifiée", "Sucre de canne bio", "Extrait de noix de kola", "Vanille de Madagascar", "Épices douces", "Caramel bio"],
    pairing: "Indispensable avec un burger maison.",
    sugar: 7,
    price: 3,
    color: "#5b2a1c",
    accent: "#fbe9d8",
    kcal: 30,
  },
  {
    id: "myrtille-lavande",
    family: "fruitees",
    name: "Myrtille Lavande",
    tagline: "Floral & intense",
    description: "Myrtilles sauvages et lavande de Provence, tout en délicatesse.",
    story: "Une recette inspirée des champs de Provence en juillet. La lavande est infusée à froid pour garder toute sa délicatesse.",
    ingredients: ["Eau gazéifiée", "Jus de myrtille 10 %", "Infusion de lavande", "Sucre de canne bio", "Jus de citron"],
    pairing: "Magique avec une tarte au citron ou un fromage de chèvre.",
    sugar: 5,
    price: 3,
    color: "#5a4fcf",
    accent: "#f1efff",
    kcal: 20,
  },
  {
    id: "pasteque-hibiscus",
    family: "fruitees",
    name: "Pastèque Hibiscus",
    tagline: "Juteux & acidulé",
    description: "Pastèque gorgée de soleil et fleur d'hibiscus pour une touche acidulée.",
    story: "Édition d'été devenue permanente à la demande générale. L'hibiscus lui donne sa couleur et une petite acidité de cranberry.",
    ingredients: ["Eau gazéifiée", "Jus de pastèque 15 %", "Infusion d'hibiscus", "Sucre de canne bio", "Jus de citron vert"],
    pairing: "Parfait au bord de la piscine avec des tacos.",
    sugar: 4,
    price: 2.8,
    color: "#ff5a5f",
    accent: "#1e3d14",
    kcal: 19,
  },
  {
    id: "ananas-coco",
    family: "gourmandes",
    name: "Ananas Coco",
    tagline: "Tropical & crémeux",
    description: "Ananas rôti et eau de coco, un aller simple pour les tropiques.",
    story: "L'ananas est rôti avant d'être pressé pour développer des notes caramélisées, puis adouci à l'eau de coco.",
    ingredients: ["Eau gazéifiée", "Jus d'ananas rôti 10 %", "Eau de coco 8 %", "Sucre de canne bio", "Jus de citron vert"],
    pairing: "Génial avec un poulet grillé ou des fruits frais.",
    sugar: 6,
    price: 3,
    color: "#2ec4b6",
    accent: "#0b2b28",
    kcal: 26,
  },
  {
    id: "pomme-cannelle",
    family: "gourmandes",
    name: "Pomme Cannelle",
    tagline: "Gourmand & réconfortant",
    description: "Pomme normande et cannelle douce, comme une tarte dans une canette.",
    story: "Notre saveur d'automne : des pommes de Normandie pressées à froid et un bâton de cannelle infusé pendant 24 heures.",
    ingredients: ["Eau gazéifiée", "Jus de pomme 15 %", "Cannelle de Ceylan", "Sucre de canne bio", "Jus de citron"],
    pairing: "À servir avec un crumble ou des crêpes.",
    sugar: 6,
    price: 2.8,
    color: "#c0392b",
    accent: "#fff3e6",
    kcal: 25,
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
