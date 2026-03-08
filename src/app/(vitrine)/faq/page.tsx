"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment passer une commande ?",
    answer: "Parcourez notre boutique, ajoutez les produits souhaités à votre panier, puis suivez le processus de commande. Vous recevrez un email de confirmation une fois la commande validée.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard) via notre plateforme sécurisée Stripe. D'autres moyens de paiement seront bientôt disponibles.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "La livraison à Bamako est effectuée sous 24 à 48h. Pour les autres villes du Mali, comptez 3 à 5 jours ouvrables selon la destination.",
  },
  {
    question: "Puis-je retourner un produit ?",
    answer: "Oui, vous disposez de 7 jours après réception pour retourner un produit dans son état d'origine. Contactez notre service client pour initier le retour.",
  },
  {
    question: "Comment contacter le service client ?",
    answer: "Vous pouvez nous joindre par téléphone au (+223) 79 55 67 67, par email à ika.services@outlook.com, ou via notre formulaire de contact. Notre équipe est disponible du lundi au samedi, de 8h à 18h.",
  },
  {
    question: "Mon paiement est-il sécurisé ?",
    answer: "Absolument. Tous les paiements sont traités via Stripe, une plateforme de paiement certifiée PCI DSS. Vos données bancaires ne sont jamais stockées sur nos serveurs.",
  },
  {
    question: "Livrez-vous en dehors du Mali ?",
    answer: "Pour le moment, nous livrons uniquement au Mali. L'expansion internationale est prévue prochainement. Restez connecté pour les mises à jour !",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          size={20}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h1>
        <p className="text-gray-500">Trouvez les réponses à vos questions les plus courantes.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>

      <div className="mt-12 text-center bg-amber-50 rounded-xl p-8">
        <h3 className="font-semibold text-gray-900 mb-2">Vous ne trouvez pas votre réponse ?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Notre équipe est là pour vous aider.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-amber-700 transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </div>
  );
}
