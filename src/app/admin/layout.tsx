"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, Users, Tag, ArrowLeft } from "lucide-react";

const adminNav = [
  { name: "Tableau de bord", href: "/admin", icon: LayoutDashboard },
  { name: "Produits", href: "/admin/produits", icon: Package },
  { name: "Commandes", href: "/admin/commandes", icon: ShoppingCart },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Promotions", href: "/admin/promotions", icon: Tag },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 min-h-screen fixed left-0 top-0 z-40 hidden lg:block">
          <div className="p-6">
            <h2 className="text-xl font-bold text-amber-500">IKA ADMIN</h2>
            <p className="text-xs text-gray-500 mt-1">Back-office</p>
          </div>
          <nav className="px-3 space-y-1">
            {adminNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="absolute bottom-6 px-3 w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Retour au site
            </Link>
          </div>
        </aside>

        {/* Content */}
        <main className="lg:ml-64 flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
