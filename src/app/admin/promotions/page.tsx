"use client";

import { Plus, Tag } from "lucide-react";

const promotions = [
  { id: "1", code: "BIENVENUE10", discount: 10, isPercent: true, minAmount: 10000, usedCount: 45, maxUses: 100, isActive: true, expiresAt: "31/03/2026" },
  { id: "2", code: "ETE2026", discount: 15, isPercent: true, minAmount: 25000, usedCount: 12, maxUses: 50, isActive: true, expiresAt: "30/06/2026" },
  { id: "3", code: "LIVRAISON", discount: 2500, isPercent: false, minAmount: 15000, usedCount: 30, maxUses: null, isActive: true, expiresAt: null },
  { id: "4", code: "FLASH20", discount: 20, isPercent: true, minAmount: 50000, usedCount: 50, maxUses: 50, isActive: false, expiresAt: "28/02/2026" },
];

export default function AdminPromotionsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Promotions</h1>
          <p className="text-gray-500 text-sm mt-1">Gérez vos codes promo et offres spéciales</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-amber-700 transition-colors">
          <Plus size={18} />
          Nouveau code
        </button>
      </div>

      <div className="grid gap-4">
        {promotions.map((promo) => (
          <div key={promo.id} className="bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${promo.isActive ? "bg-amber-100" : "bg-gray-100"}`}>
                <Tag size={20} className={promo.isActive ? "text-amber-600" : "text-gray-400"} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-mono font-bold text-gray-900">{promo.code}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    promo.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}>
                    {promo.isActive ? "Actif" : "Expiré"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">
                  {promo.isPercent ? `${promo.discount}%` : `${new Intl.NumberFormat("fr-FR").format(promo.discount)} F CFA`}
                  {promo.minAmount && ` — min. ${new Intl.NumberFormat("fr-FR").format(promo.minAmount)} F CFA`}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {promo.usedCount}{promo.maxUses ? `/${promo.maxUses}` : ""} utilisations
              </p>
              <p className="text-xs text-gray-500">
                {promo.expiresAt ? `Expire le ${promo.expiresAt}` : "Sans expiration"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
