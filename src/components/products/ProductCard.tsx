"use client";

import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  comparePrice?: number | null;
  image?: string;
  category?: string;
}

export default function ProductCard({
  id,
  name,
  slug,
  price,
  comparePrice,
  image,
  category,
}: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  const discount = comparePrice
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <ShoppingCart size={48} />
          </div>
        )}

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        {/* Hover actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <Link
            href={`/produit/${slug}`}
            className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition-colors"
          >
            <Eye size={18} />
          </Link>
          <button
            onClick={() => addItem({ id, name, slug, price, image })}
            className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {category && (
          <p className="text-xs text-amber-600 font-medium mb-1 uppercase tracking-wide">
            {category}
          </p>
        )}
        <Link href={`/produit/${slug}`}>
          <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-amber-600">
            {formatPrice(price)}
          </span>
          {comparePrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(comparePrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
