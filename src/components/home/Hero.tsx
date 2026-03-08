import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Headphones } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero principal */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-medium px-4 py-1 rounded-full mb-6">
              🇲🇱 Qualité &amp; Confiance
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Bienvenue chez{" "}
              <span className="text-amber-600">IKA SERVICES</span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Votre partenaire de confiance pour des produits et services de qualité. 
              Découvrez notre catalogue et commandez en ligne en toute sécurité.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/produits"
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/30"
              >
                Voir la boutique
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features bar */}
      <div className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Truck className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Livraison rapide</p>
                <p className="text-sm text-gray-500">Partout au Mali</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-3 rounded-lg">
                <ShieldCheck className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Paiement sécurisé</p>
                <p className="text-sm text-gray-500">Transactions protégées</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Headphones className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Support client</p>
                <p className="text-sm text-gray-500">7j/7 par téléphone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
