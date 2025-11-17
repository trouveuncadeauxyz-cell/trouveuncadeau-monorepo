# 🚀 Guide de Setup - TrouveUnCadeau.xyz

> Guide complet pour démarrer le développement en local

## 📋 Table des Matières

1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Configuration Supabase](#configuration-supabase)
4. [Configuration Strapi](#configuration-strapi)
5. [Démarrage](#démarrage)
6. [Déploiement](#déploiement)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Prérequis

Avant de commencer, assurez-vous d'avoir:

- **Node.js** >= 18.0.0 ([télécharger](https://nodejs.org/))
- **pnpm** >= 8.0.0 (`npm install -g pnpm`)
- **Git** ([télécharger](https://git-scm.com/))
- Un compte **Supabase** ([créer](https://supabase.com))
- Un éditeur de code (VS Code recommandé)

---

## 📦 Installation

### 1. Cloner le Repository

```bash
git clone https://github.com/trouveuncadeauxyz-cell/trouveuncadeau-monorepo.git
cd trouveuncadeau-monorepo
```

### 2. Installer les Dépendances

```bash
pnpm install
```

Cette commande installera toutes les dépendances pour tous les workspaces (apps/web, apps/cms, packages/*).

---

## 📊 Configuration Supabase

### 1. Créer un Projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Cliquez "New Project"
3. Choisissez un nom: `trouveuncadeau-dev`
4. Choisissez une région proche (Canada East recommandé)
5. Créez un mot de passe sécurisé pour la BDD

### 2. Déployer le Schéma de Base de Données

```bash
# Installer Supabase CLI
npm install -g supabase

# Se connecter
supabase login

# Lier au projet (remplacer PROJECT_REF par votre ref)
supabase link --project-ref YOUR_PROJECT_REF

# Déployer les migrations
supabase db push
```

### 3. Récupérer les Clés API

1. Dans le dashboard Supabase, allez dans **Settings** > **API**
2. Copiez:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Ne JAMAIS exposer côté client!)

### 4. Configurer les Variables d'Environnement

```bash
# Copier le template
cp .env.example apps/web/.env.local

# Éditer apps/web/.env.local et remplacer:
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY  
# - SUPABASE_SERVICE_ROLE_KEY
```

---

## 🏗️ Configuration Strapi

### 1. Initialiser Strapi (Première Fois)

```bash
# Créer le projet Strapi
cd apps
pnpx create-strapi-app@latest cms --quickstart --no-run
cd ..
```

### 2. Configurer la Base de Données Strapi

Éditer `apps/cms/config/database.js` pour utiliser PostgreSQL (Supabase ou Railway):

```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

### 3. Démarrer Strapi

```bash
pnpm --filter cms develop
```

Premier lancement:
1. Créez un compte admin
2. Configurez les Content Types (Products, Categories, Vendors)
3. Générez un API Token dans Settings > API Tokens

---

## 🎯 Démarrage

### Mode Développement

```bash
# Démarrer TOUS les services (Next.js + Strapi)
pnpm dev

# OU démarrer individuellement:
pnpm --filter web dev        # Next.js sur http://localhost:3000
pnpm --filter cms develop    # Strapi sur http://localhost:1337
```

### Accès aux Applications

- **Frontend (Next.js):** http://localhost:3000
- **CMS (Strapi Admin):** http://localhost:1337/admin
- **Supabase Studio:** Depuis le dashboard Supabase

### Tests

```bash
# Lancer les tests
pnpm test

# Tests E2E
pnpm test:e2e

# Coverage
pnpm test:coverage
```

### Linting

```bash
# Vérifier le code
pnpm lint

# Auto-fix
pnpm lint:fix
```

---

## 🚀 Déploiement

### Frontend (Next.js) sur Vercel

1. Connectez votre repo GitHub à Vercel
2. Framework Preset: **Next.js**
3. Root Directory: `apps/web`
4. Build Command: `cd ../.. && pnpm turbo run build --filter=web`
5. Output Directory: `.next`
6. Ajoutez les variables d'environnement

### Backend (Strapi) sur Railway

1. Créez un nouveau projet sur Railway
2. Ajoutez PostgreSQL database
3. Déployez depuis GitHub
4. Root Directory: `apps/cms`
5. Build Command: `pnpm install && pnpm build`
6. Start Command: `pnpm start`

### Base de Données (Supabase)

Déjà configuré et hébergé par Supabase!

---

## 🔧 Troubleshooting

### Erreur: "Module not found"

```bash
# Nettoyer et réinstaller
rm -rf node_modules apps/*/node_modules packages/*/node_modules
pnpm install
```

### Erreur: "Port already in use"

```bash
# Tuer le processus sur le port 3000
npx kill-port 3000

# OU changer le port
PORT=3001 pnpm dev
```

### Erreur Supabase: "Invalid API key"

- Vérifiez que les clés dans `.env.local` sont correctes
- Assurez-vous d'utiliser la clé `anon` (pas `service_role`) côté client

### Base de Données: Reset complet

```bash
# ATTENTION: Supprime toutes les données!
supabase db reset
```

### Problmes de Cache Turbo

```bash
# Nettoyer le cache
pnpm turbo run clean
rm -rf .turbo
```

---

## 📚 Ressources Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Strapi](https://docs.strapi.io)
- [Documentation Turborepo](https://turbo.build/repo/docs)
- [COMET MEMORY (Notion)](https://notion.so/COMET-MEMORY-Context-Permanent-4a243f00205d47f8943d1a1fe0924f85)

---

## 👥 Support

Problème? Questions?
- Ouvrez une issue sur GitHub
- Consultez la COMET MEMORY
- Contactez l'équipe via n8n coordination

---

**Dernire mise  jour:** 16 novembre 2025  
**Version:** 0.1.0 (MVP en développement)  
**Deadline:** 30 novembre 2025 ⏰
