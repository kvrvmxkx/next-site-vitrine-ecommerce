import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">IKA SERVICES</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Votre partenaire de confiance pour des services et produits de qualité. 
              Basé à Bamako, au service de toute l&apos;Afrique de l&apos;Ouest.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-500" />
                <span className="text-sm">MISSABOUGOU, route de l&apos;hôpital du Mali</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-500" />
                <span className="text-sm">(+223) 79 55 67 67 / 69 55 67 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-500" />
                <span className="text-sm">ika.services@outlook.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Accueil</Link></li>
              <li><Link href="/produits" className="hover:text-amber-500 transition-colors">Boutique</Link></li>
              <li><Link href="/a-propos" className="hover:text-amber-500 transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>RC : MA BKO 2024 B 464</li>
              <li>NIF : 085154428W</li>
              <li>NINA : 42409196397004N</li>
              <li>Banque : UBA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} IKA SERVICES SARL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
