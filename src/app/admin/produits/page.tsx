"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const demoProducts = [
  { id: "1", name: "Service Premium Pack", price: 25000, stock: 15, category: "Services", isActive: true },
  { id: "2", name: "Consultation Business", price: 15000, stock: 30, category: "Consulting", isActive: true },
  { id: "3", name: "Formation Professionnelle", price: 50000, stock: 8, category: "Formation", isActive: true },
  { id: "4", name: "Pack Entreprise", price: 100000, stock: 5, category: "Entreprise", isActive: true },
  { id: "5", name: "Service Standard", price: 10000, stock: 50, category: "Services", isActive: false },
  { id: "6", name: "Audit & Conseil", price: 75000, stock: 0, category: "Consulting", isActive: true },
];

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = demoProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Produits</h1>
          <p className="text-gray-500 text-sm mt-1">{demoProducts.length} produits au total</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-amber-700 transition-colors">
          <Plus size={18} />
          Nouveau produit
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wide">
                <th className="px-5 py-3">Produit</th>
                <th className="px-5 py-3">Prix</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Catégorie</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0" />
                      <span className="font-medium text-sm text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm font-medium">{formatPrice(product.price)}</td>
                  <td className="px-5 py-3 text-sm">
                    <span className={product.stock === 0 ? "text-red-600 font-medium" : "text-gray-700"}>
                      {product.stock === 0 ? "Rupture" : product.stock}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-600">{product.category}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${
                      product.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {product.isActive ? "Actif" : "Inactif"}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-blue-600">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-amber-600">
                        <Edit size={16} />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
