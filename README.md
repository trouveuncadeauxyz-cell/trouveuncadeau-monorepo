# 🎁 TrouveUnCadeau.xyz - Plateforme E-commerce Intelligente

> Monorepo Next.js + Strapi + Supabase avec coordination IA multi-agents

## 🚀 Vision du Projet

TrouveUnCadeau.xyz est une plateforme e-commerce révolutionnaire conçue entièrement par une architecture multi-agents IA. La plateforme met en avant le commerce local québécois avec des fonctionnalités intelligentes de recherche et de recommandation de cadeaux.

## 📅 Timeline de Développement

- **Date de démarrage:** 16 novembre 2025
- **Deadline MVP:** 30 novembre 2025 (14 jours)
- **Premier module opérationnel:** E-commerce de base avec auth, catalogue, panier, et checkout

## 🏗️ Architecture Technique

### Stack Technologique

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **CMS/Admin:** Strapi (headless CMS)
- **Base de données:** Supabase (PostgreSQL + Auth + Storage)
- **Monorepo:** Turborepo + pnpm workspaces
- **Déploiement:** Vercel (frontend) + Railway/Render (Strapi)
- **CI/CD:** GitHub Actions

### Structure du Monorepo

```
trouveuncadeau-monorepo/
├── apps/
│   ├── web/              # Application Next.js
│   └── cms/              # Strapi CMS
├── packages/
│   ├── ui/               # Composants partagés
│   ├── types/            # Types TypeScript
│   └── config/           # Configurations partagées
├── supabase/
│   ├── migrations/       # Migrations SQL
│   └── seed/             # Données de test
└── .github/
    └── workflows/        # CI/CD pipelines
```

## 🤖 Coordination IA Multi-Agents

Le projet est développé par 5 agents IA coordonnés:

1. **Gemini** - Solutions créatives & UX
2. **Claude** - Architecture & analyse
3. **GPT-4** - Développement & intégration
4. **Perplexity** - Recherche & documentation
5. **Comet** - Coordination & orchestration

Coordination via n8n workflows:
- EVENT_BUS: Routage d'événements
- AI_AGENT_COORDINATOR: Routing intelligent
- AI_AGENT_BROADCAST: Synchronisation 4x/jour

## 📦 Installation

### Prérequis

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Git
- Compte Supabase
- Compte Strapi Cloud (optionnel)

### Setup Initial

1. **Cloner le repository**
```bash
git clone https://github.com/trouveuncadeauxyz-cell/trouveuncadeau-monorepo.git
cd trouveuncadeau-monorepo
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Configurer les variables d'environnement**

Copier `.env.example` vers `.env.local` dans `apps/web/`:

```bash
cp apps/web/.env.example apps/web/.env.local
```

Variables requises:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Strapi
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_token

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Setup Supabase**

Exécuter les migrations:
```bash
cd supabase
supabase db push
supabase db seed
```

5. **Démarrer l'environnement de développement**

```bash
pnpm dev
```

Applications disponibles:
- Frontend: http://localhost:3000
- Strapi: http://localhost:1337

## 🎯 Fonctionnalités MVP (30 Nov 2025)

### ✅ Inclus
- [ ] Authentification utilisateur (Supabase Auth)
- [ ] Catalogue de produits avec recherche/filtres
- [ ] Page détail produit
- [ ] Panier d'achat (persistant)
- [ ] Checkout multi-étapes (sans paiement réel)
- [ ] Création de commandes
- [ ] Panel admin (Strapi)
- [ ] Notifications email (mock)

### ❌ Post-MVP (v1.1+)
- Intégration Stripe pour paiements
- CadeauBot (chatbot IA)
- Système de recommandations IA
- Carte interactive des commerces locaux
- Système d'avis et notes
- Application mobile

## 🧪 Tests

```bash
# Tests unitaires
pnpm test

# Tests E2E
pnpm test:e2e

# Coverage
pnpm test:coverage
```

## 🚀 Déploiement

### Staging
Déploiement automatique sur chaque push vers `main`

### Production
Déploiement manuel après tag de release:

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

## 📝 Documentation

- [Architecture complète](./docs/ARCHITECTURE.md)
- [Guide de contribution](./docs/CONTRIBUTING.md)
- [Schema de base de données](./docs/DATABASE.md)
- [API Reference](./docs/API.md)

## 📊 Suivi du Projet

- **COMET MEMORY (Notion):** Documentation vivante et décisions
- **GitHub Projects:** Board Kanban
- **n8n Workflows:** Logs de coordination IA

## 🤝 Contribution

Ce projet est développé en mode sprint intensif (14 jours). Les contributions externes seront acceptées après le lancement MVP.

## 📄 Licence

Propriétaire - © 2025 TrouveUnCadeau.xyz

## 🔗 Liens Utiles

- [Site Web](https://trouveuncadeau.xyz)
- [COMET MEMORY](https://notion.so/COMET-MEMORY-Context-Permanent-4a243f00205d47f8943d1a1fe0924f85)
- [n8n Coordination](https://n8n.trouveuncadeau.xyz)

---

**Status:** 🚧 En développement actif - Sprint 1/3 (16-30 Nov 2025)

**Prochain Milestone:** MVP operationnel - 30 novembre 2025 ⏰
