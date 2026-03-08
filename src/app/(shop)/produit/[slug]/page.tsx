"use client";

import { useParams } from "next/navigation";
import { ShoppingCart, Heart, Minus, Plus, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

// Données de démonstration
const demoProduct = {
  id: "1",
  name: "Service Premium Pack",
  slug: "service-premium-pack",
  price: 25000,
  comparePrice: 35000,
  description: "Notre pack premium comprend un ensemble complet de services professionnels adaptés à vos besoins. Bénéficiez d'un accompagnement personnalisé et de résultats garantis. Ce pack inclut la consultation initiale, la mise en place et le suivi pendant 3 mois.",
  category: "Services",
  stock: 15,
  rating: 4.5,
  reviewCount: 12,
};

export default function ProductPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);

  const product = { ...demoProduct, slug: params.slug as string };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-amber-600">Accueil</Link>
        <span>/</span>
        <Link href="/produits" className="hover:text-amber-600">Boutique</Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
          <ShoppingCart size={80} className="text-gray-300" />
        </div>

        {/* Details */}
        <div>
          <span className="text-sm text-amber-600 font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={star <= Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating} ({product.reviewCount} avis)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-6">
            <span className="text-3xl font-bold text-amber-600">
              {formatPrice(product.price)}
            </span>
            {product.comparePrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          {/* Stock */}
          <p className="text-sm mt-4">
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">✓ En stock ({product.stock} disponibles)</span>
            ) : (
              <span className="text-red-600 font-medium">Rupture de stock</span>
            )}
          </p>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-50"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-50"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
            >
              <ShoppingCart size={18} />
              Ajouter au panier
            </button>
            <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-red-500 transition-colors">
              <Heart size={18} />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t">
            <div className="text-center">
              <Truck className="mx-auto text-amber-600 mb-2" size={24} />
              <p className="text-xs text-gray-500">Livraison rapide</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="mx-auto text-amber-600 mb-2" size={24} />
              <p className="text-xs text-gray-500">Paiement sécurisé</p>
            </div>
            <div className="text-center">
              <RotateCcw className="mx-auto text-amber-600 mb-2" size={24} />
              <p className="text-xs text-gray-500">Retour possible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
