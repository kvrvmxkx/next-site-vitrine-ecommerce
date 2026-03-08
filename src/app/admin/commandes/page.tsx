import { Eye } from "lucide-react";

const orders = [
  { id: "IKA-260301-X4KF", client: "Amadou Diallo", email: "amadou@mail.com", total: 75000, status: "Confirmé", items: 3, date: "01/03/2026" },
  { id: "IKA-260228-M9PL", client: "Fatoumata Traoré", email: "fatou@mail.com", total: 25000, status: "Livré", items: 1, date: "28/02/2026" },
  { id: "IKA-260228-R2WQ", client: "Ibrahim Keita", email: "ibrahim@mail.com", total: 150000, status: "En cours", items: 5, date: "28/02/2026" },
  { id: "IKA-260227-L7VN", client: "Mariam Coulibaly", email: "mariam@mail.com", total: 50000, status: "En attente", items: 2, date: "27/02/2026" },
  { id: "IKA-260226-K3BX", client: "Oumar Sangaré", email: "oumar@mail.com", total: 35000, status: "Livré", items: 1, date: "26/02/2026" },
  { id: "IKA-260225-P8GT", client: "Aïssata Bah", email: "aissata@mail.com", total: 95000, status: "Annulé", items: 4, date: "25/02/2026" },
];

const statusColors: Record<string, string> = {
  "En attente": "bg-yellow-100 text-yellow-700",
  "Confirmé": "bg-blue-100 text-blue-700",
  "En cours": "bg-purple-100 text-purple-700",
  "Livré": "bg-green-100 text-green-700",
  "Annulé": "bg-red-100 text-red-700",
};

export default function AdminOrdersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Commandes</h1>
        <p className="text-gray-500 text-sm mt-1">{orders.length} commandes au total</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wide">
                <th className="px-5 py-3">Commande</th>
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Articles</th>
                <th className="px-5 py-3">Total</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 text-sm font-mono text-gray-900">{order.id}</td>
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-gray-900">{order.client}</p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">{order.items}</td>
                  <td className="px-5 py-3 text-sm font-medium">
                    {new Intl.NumberFormat("fr-FR").format(order.total)} F CFA
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">{order.date}</td>
                  <td className="px-5 py-3">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-amber-600">
                      <Eye size={16} />
                    </button>
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
