import { Users } from "lucide-react";

const clients = [
  { id: "1", name: "Amadou Diallo", email: "amadou@mail.com", phone: "+223 79 12 34 56", orders: 5, total: 225000, joined: "15/01/2026" },
  { id: "2", name: "Fatoumata Traoré", email: "fatou@mail.com", phone: "+223 69 98 76 54", orders: 3, total: 75000, joined: "20/01/2026" },
  { id: "3", name: "Ibrahim Keita", email: "ibrahim@mail.com", phone: "+223 90 11 22 33", orders: 8, total: 450000, joined: "05/12/2025" },
  { id: "4", name: "Mariam Coulibaly", email: "mariam@mail.com", phone: "+223 79 44 55 66", orders: 2, total: 100000, joined: "01/02/2026" },
  { id: "5", name: "Oumar Sangaré", email: "oumar@mail.com", phone: "+223 69 77 88 99", orders: 1, total: 35000, joined: "25/02/2026" },
];

export default function AdminClientsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-500 text-sm mt-1">{clients.length} clients enregistrés</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wide">
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Téléphone</th>
                <th className="px-5 py-3">Commandes</th>
                <th className="px-5 py-3">Total dépensé</th>
                <th className="px-5 py-3">Inscrit le</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
                        <Users size={16} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{client.name}</p>
                        <p className="text-xs text-gray-500">{client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">{client.phone}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{client.orders}</td>
                  <td className="px-5 py-3 text-sm font-medium">
                    {new Intl.NumberFormat("fr-FR").format(client.total)} F CFA
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">{client.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
