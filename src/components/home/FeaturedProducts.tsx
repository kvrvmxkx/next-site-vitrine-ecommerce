import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Données de démonstration
const demoProducts = [
  {
    id: "1",
    name: "Service Premium Pack",
    slug: "service-premium-pack",
    price: 25000,
    comparePrice: 35000,
    image: undefined,
    category: "Services",
  },
  {
    id: "2",
    name: "Consultation Business",
    slug: "consultation-business",
    price: 15000,
    image: undefined,
    category: "Consulting",
  },
  {
    id: "3",
    name: "Formation Professionnelle",
    slug: "formation-professionnelle",
    price: 50000,
    comparePrice: 65000,
    image: undefined,
    category: "Formation",
  },
  {
    id: "4",
    name: "Pack Entreprise",
    slug: "pack-entreprise",
    price: 100000,
    image: undefined,
    category: "Entreprise",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nos produits phares</h2>
            <p className="text-gray-500 mt-2">Découvrez notre sélection du moment</p>
          </div>
          <Link
            href="/produits"
            className="hidden sm:flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium"
          >
            Tout voir <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/produits"
            className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium"
          >
            Voir tous les produits <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
