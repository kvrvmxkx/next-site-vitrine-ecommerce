import { Metadata } from "next";
import { Target, Users, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez IKA SERVICES SARL, votre partenaire de confiance basé à Bamako, Mali.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque service et produit que nous offrons.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Une relation de confiance et de proximité avec chacun de nos clients.",
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Des produits et services rigoureusement sélectionnés pour leur qualité.",
  },
  {
    icon: Globe,
    title: "Ambition",
    description: "Une vision panafricaine pour servir au-delà des frontières du Mali.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos d&apos;IKA SERVICES</h1>
        <p className="text-lg text-gray-600">
          Fondée avec la vision de fournir des services et produits de qualité, 
          IKA SERVICES SARL est devenue un acteur incontournable à Bamako et au Mali.
        </p>
      </div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl aspect-video flex items-center justify-center">
          <span className="text-6xl">🏢</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre histoire</h2>
          <p className="text-gray-600 mb-4">
            IKA SERVICES SARL est une entreprise malienne enregistrée au Registre de Commerce 
            sous le numéro MA BKO 2024 B 464. Basée à Missabougou, sur la route de l&apos;hôpital 
            du Mali, nous sommes fiers de servir notre communauté avec dévouement.
          </p>
          <p className="text-gray-600">
            Notre mission est simple : offrir à nos clients des produits et services de qualité 
            supérieure, tout en maintenant des prix accessibles et un service client irréprochable.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos valeurs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-xl mb-4">
                <value.icon className="text-amber-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 rounded-2xl p-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">IKA en chiffres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Clients satisfaits" },
            { value: "50+", label: "Produits" },
            { value: "24/7", label: "Disponibilité" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-amber-500">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
