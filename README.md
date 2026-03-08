# IKA SERVICES - MVP Site Vitrine & Boutique E-commerce

Site web moderne pour IKA SERVICES SARL, basé à Bamako, Mali. Comprend une vitrine institutionnelle, une boutique en ligne sécurisée et un back-office d'administration.

## 🎯 Caractéristiques

- **Site Vitrine** : Accueil, À propos, Contact, FAQ
- **Boutique E-commerce** : Catalogue produits, panier dynamique, checkout
- **Authentification** : Connexion/Inscription utilisateurs
- **Admin Dashboard** : Gestion produits, commandes, clients, promotions
- **Paiement** : Intégration Stripe (mode test)
- **Responsive** : Mobile-first design
- **Français** : Interface complètement en français

## 🛠 Stack Technique

- **Frontend** : Next.js 16 + React 19 + TypeScript + Tailwind CSS
- **Backend** : Next.js API Routes
- **Database** : PostgreSQL + Prisma ORM
- **Paiement** : Stripe
- **Stockage Images** : Supabase Storage
- **Auth** : NextAuth.js
- **State Management** : Zustand

## 📋 Prérequis

- Node.js 18+
- PostgreSQL 12+
- npm ou yarn

## 🚀 Installation Locale

1. **Cloner le repo**
```bash
git clone https://github.com/kvrvmxkx/next-site-vitrine-ecommerce.git
cd next-site-vitrine-ecommerce
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer l'environnement**
```bash
cp .env.local.example .env.local
```
Modifier `.env.local` avec vos valeurs :
- `DATABASE_URL` : URL PostgreSQL
- `STRIPE_*` : Clés Stripe (optionnel pour dev)

4. **Générer Prisma Client**
```bash
npx prisma generate
```

5. **Initialiser la base de données** (optionnel)
```bash
npx prisma migrate dev --name init
```

6. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site est disponible sur `http://localhost:3000`

## 📱 Pages Principales

### Vitrine
- `/` - Accueil avec produits en vedette
- `/a-propos` - Présentation de l'entreprise
- `/contact` - Formulaire de contact
- `/faq` - Questions fréquentes

### Boutique
- `/produits` - Catalogue complet avec filtres
- `/produit/[slug]` - Détail d'un produit
- `/panier` - Page du panier
- `/checkout` - Processus de commande

### Client
- `/connexion` - Connexion
- `/inscription` - Création de compte

### Admin
- `/admin` - Dashboard (stats, commandes récentes)
- `/admin/produits` - Gestion des produits
- `/admin/commandes` - Suivi des commandes
- `/admin/clients` - Liste des clients
- `/admin/promotions` - Codes promotionnels

## 🔧 Configuration Vercel

1. Créer un projet Vercel (https://vercel.com)
2. Connecter le repo GitHub
3. Ajouter les variables d'environnement dans Vercel :
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

La configuration `vercel.json` est déjà en place pour générer Prisma automatiquement.

## 📦 Build Production

```bash
npm run build
npm start
```

## 🔐 Sécurité

- Authentification NextAuth.js
- Paiements sécurisés via Stripe
- HTTPS obligatoire en production
- Variables d'environnement séculisées
- CSRF protection

## 📝 Notes

- Mode paiement Stripe est en TEST. Utiliser les cartes de test Stripe.
- Les données sont mocké dans l'MVP. Connecter une vraie base de données pour la production.
- Les images des produits sont placeholder. Implémenter Supabase Storage pour les vraies images.

## 🚀 Prochaines Étapes

1. Connecter une vraie base de données PostgreSQL
2. Configurer Stripe avec des vraies clés
3. Implémenter Supabase Storage pour les images
4. Ajouter authentification email
5. Intégrer système de paiement local (Orange Money, Wave, etc.)
6. Setup emails transactionnels
7. Analytics et monitoring

## 📧 Support

Pour toute question concernant le code :
- Email : ika.services@outlook.com
- Téléphone : (+223) 79 55 67 67

## 📄 License

Propriétaire © 2026 IKA SERVICES SARL
