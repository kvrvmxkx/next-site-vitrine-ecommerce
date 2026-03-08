import { Package, ShoppingCart, Users, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { name: "Chiffre d'affaires", value: "2 450 000 F", change: "+12%", up: true, icon: DollarSign },
  { name: "Commandes", value: "156", change: "+8%", up: true, icon: ShoppingCart },
  { name: "Produits actifs", value: "48", change: "+3", up: true, icon: Package },
  { name: "Clients", value: "324", change: "+15%", up: true, icon: Users },
];

const recentOrders = [
  { id: "IKA-260301-X4KF", client: "Amadou Diallo", total: 75000, status: "Confirmé", date: "01/03/2026" },
  { id: "IKA-260228-M9PL", client: "Fatoumata Traoré", total: 25000, status: "Livré", date: "28/02/2026" },
  { id: "IKA-260228-R2WQ", client: "Ibrahim Keita", total: 150000, status: "En cours", date: "28/02/2026" },
  { id: "IKA-260227-L7VN", client: "Mariam Coulibaly", total: 50000, status: "En attente", date: "27/02/2026" },
  { id: "IKA-260226-K3BX", client: "Oumar Sangaré", total: 35000, status: "Livré", date: "26/02/2026" },
];

const statusColors: Record<string, string> = {
  "En attente": "bg-yellow-100 text-yellow-700",
  "Confirmé": "bg-blue-100 text-blue-700",
  "En cours": "bg-purple-100 text-purple-700",
  "Livré": "bg-green-100 text-green-700",
  "Annulé": "bg-red-100 text-red-700",
};

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500 text-sm mt-1">Vue d&apos;ensemble de votre activité</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <stat.icon className="text-amber-600" size={20} />
              </div>
              <span className={`flex items-center gap-1 text-xs font-medium ${stat.up ? "text-green-600" : "text-red-600"}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp size={18} />
            Commandes récentes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wide">
                <th className="px-5 py-3">Commande</th>
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Total</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 text-sm font-mono text-gray-900">{order.id}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{order.client}</td>
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">
                    {new Intl.NumberFormat("fr-FR").format(order.total)} F
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[order.status] || "bg-gray-100 text-gray-700"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
