import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins. 
            Notre équipe est à votre disposition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              <Mail size={18} />
              Nous contacter
            </Link>
            <a
              href="tel:+22379556767"
              className="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
            >
              <Phone size={18} />
              (+223) 79 55 67 67
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
