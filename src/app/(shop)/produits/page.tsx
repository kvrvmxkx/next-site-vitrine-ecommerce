import { Metadata } from "next";
import ProductCard from "@/components/products/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Découvrez tous nos produits et services. Commandez en ligne en toute sécurité.",
};

// Données de démonstration
const products = [
  { id: "1", name: "Service Premium Pack", slug: "service-premium-pack", price: 25000, comparePrice: 35000, category: "Services" },
  { id: "2", name: "Consultation Business", slug: "consultation-business", price: 15000, category: "Consulting" },
  { id: "3", name: "Formation Professionnelle", slug: "formation-professionnelle", price: 50000, comparePrice: 65000, category: "Formation" },
  { id: "4", name: "Pack Entreprise", slug: "pack-entreprise", price: 100000, category: "Entreprise" },
  { id: "5", name: "Service Standard", slug: "service-standard", price: 10000, category: "Services" },
  { id: "6", name: "Audit & Conseil", slug: "audit-conseil", price: 75000, category: "Consulting" },
  { id: "7", name: "Pack Starter", slug: "pack-starter", price: 5000, category: "Services" },
  { id: "8", name: "Formation Avancée", slug: "formation-avancee", price: 85000, comparePrice: 95000, category: "Formation" },
];

const categories = ["Tous", "Services", "Consulting", "Formation", "Entreprise"];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Notre Boutique</h1>
        <p className="text-gray-500 mt-2">
          {products.length} produits disponibles
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white border border-gray-100 rounded-xl p-6 sticky top-24">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
              <SlidersHorizontal size={18} />
              Filtres
            </h3>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Catégories</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      defaultChecked={cat === "Tous"}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <span className="text-sm text-gray-600">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price range */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Prix</h4>
              <div className="space-y-2">
                {["Moins de 10 000 F", "10 000 - 50 000 F", "50 000 - 100 000 F", "Plus de 100 000 F"].map((range) => (
                  <label key={range} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="text-amber-600 focus:ring-amber-500 rounded" />
                    <span className="text-sm text-gray-600">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
