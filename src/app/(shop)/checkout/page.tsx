"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total } = useCartStore();
  const [step, setStep] = useState<"info" | "payment" | "confirmed">("info");

  const shipping = 2500;
  const grandTotal = total() + shipping;

  if (items.length === 0 && step !== "confirmed") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Panier vide</h1>
        <p className="text-gray-500 mb-6">Ajoutez des produits pour passer commande.</p>
        <Link href="/produits" className="text-amber-600 hover:underline">Voir la boutique</Link>
      </div>
    );
  }

  if (step === "confirmed") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Commande confirmée !</h1>
        <p className="text-gray-600 mb-2">Merci pour votre commande.</p>
        <p className="text-gray-500 text-sm mb-8">
          Vous recevrez un email de confirmation avec les détails de votre commande.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finaliser la commande</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Steps indicator */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex items-center gap-2 ${step === "info" ? "text-amber-600" : "text-gray-400"}`}>
              <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-bold">1</span>
              <span className="font-medium">Informations</span>
            </div>
            <div className="h-px flex-1 bg-gray-200" />
            <div className={`flex items-center gap-2 ${step === "payment" ? "text-amber-600" : "text-gray-400"}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === "payment" ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-500"}`}>2</span>
              <span className="font-medium">Paiement</span>
            </div>
          </div>

          {step === "info" && (
            <form
              onSubmit={(e) => { e.preventDefault(); setStep("payment"); }}
              className="space-y-6 bg-white border border-gray-100 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold">Informations de livraison</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input required type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input required type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input required type="email" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input required type="tel" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="(+223) XX XX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse de livraison</label>
                <input required type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                  <input required type="text" defaultValue="Bamako" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
                  <input required type="text" defaultValue="Mali" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                Continuer vers le paiement
              </button>
            </form>
          )}

          {step === "payment" && (
            <div className="space-y-6 bg-white border border-gray-100 rounded-xl p-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Lock size={18} />
                Paiement sécurisé
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                <strong>Mode démo :</strong> Le paiement Stripe sera activé en production. 
                Cliquez sur &quot;Confirmer&quot; pour simuler la commande.
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de carte</label>
                  <input type="text" placeholder="4242 4242 4242 4242" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiration</label>
                    <input type="text" placeholder="MM/AA" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep("info")}
                  className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50"
                >
                  Retour
                </button>
                <button
                  onClick={() => { setStep("confirmed"); useCartStore.getState().clearCart(); }}
                  className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={18} />
                  Confirmer la commande — {formatPrice(grandTotal)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 h-fit sticky top-24">
          <h2 className="text-lg font-semibold mb-4">Votre commande</h2>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.name} × {item.quantity}</span>
                <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sous-total</span>
              <span>{formatPrice(total())}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Livraison</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-amber-600">{formatPrice(grandTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
