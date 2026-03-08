"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
        <p className="text-lg text-gray-600">
          Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-amber-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Informations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Adresse</p>
                  <p className="text-sm text-gray-600">MISSABOUGOU, route de l&apos;hôpital du Mali, Bamako</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Téléphone</p>
                  <p className="text-sm text-gray-600">(+223) 79 55 67 67</p>
                  <p className="text-sm text-gray-600">(+223) 69 55 67 67</p>
                  <p className="text-sm text-gray-600">(+223) 90 60 58 57</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-sm text-gray-600">ika.services@outlook.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Horaires</p>
                  <p className="text-sm text-gray-600">Lun - Sam : 8h - 18h</p>
                  <p className="text-sm text-gray-600">Dim : Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé !</h3>
              <p className="text-green-600">
                Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-amber-600 hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl border border-gray-100 p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="(+223) XX XX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-600">
                  <option>Demande d&apos;information</option>
                  <option>Commande en cours</option>
                  <option>Réclamation</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
