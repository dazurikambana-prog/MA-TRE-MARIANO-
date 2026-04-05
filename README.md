# Maître Mariano — Plateforme Pédagogique

Plateforme premium de préparation aux concours pédagogiques (CAFCP, CAIP, CAP, CEAP) au Bénin.

## Fonctionnalités

- **Générateur IA** : Produit des dissertations complètes respectant strictement le canevas pédagogique de Maître Mariano
- **Bibliothèque** : Accès à tout le cours de méthodologie (6 types de plans, analyse sémantique, connecteurs, etc.)
- **Chatbot** : Maître Mariano répond à toutes vos questions pédagogiques

## Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **API Anthropic Claude** (via proxy claude.ai)

## Déploiement sur Vercel

### 1. Prérequis
- Compte Vercel (vercel.com)
- Node.js 18+

### 2. Déploiement

```bash
# Cloner ou uploader le projet
cd maitre-mariano

# Installer les dépendances
npm install

# Tester en local
npm run dev

# Déployer sur Vercel
npx vercel --prod
```

### 3. Déploiement via Vercel Dashboard
1. Aller sur vercel.com/new
2. Importer le projet depuis GitHub ou uploader le dossier
3. Vercel détecte automatiquement Next.js
4. Cliquer sur "Deploy"

### 4. Configuration importante
L'application utilise l'API Anthropic via le proxy intégré de Claude.ai.
**Aucune clé API supplémentaire n'est requise** pour les appels depuis l'interface Claude.ai.

Pour un déploiement autonome (hors claude.ai), ajouter dans Vercel :
- `ANTHROPIC_API_KEY` : votre clé API Anthropic

Et modifier les fetch dans `generator/page.tsx` et `chatbot/page.tsx` pour inclure le header d'authentification.

## Structure du projet

```
maitre-mariano/
├── app/
│   ├── layout.tsx          # Layout racine avec fonts
│   ├── globals.css         # Styles globaux
│   ├── page.tsx            # Page d'accueil
│   ├── generator/
│   │   └── page.tsx        # Générateur de dissertations
│   ├── bibliotheque/
│   │   └── page.tsx        # Bibliothèque des cours
│   └── chatbot/
│       └── page.tsx        # Chatbot Maître Mariano
├── components/
│   └── Navbar.tsx          # Navigation partagée
├── lib/
│   └── knowledge-base.ts   # Base de connaissances (PDF)
└── ...
```

## Base de connaissances

Toute la méthodologie est encodée dans `lib/knowledge-base.ts` :
- 6 types de plans (explication, discussion, commentaire, appréciation, comparaison, inventaire)
- 4 étapes d'analyse sémantique
- Structure de l'introduction (4 étapes) et de la conclusion
- 9 secteurs de recherche d'idées
- 6 dimensions de l'homme
- Connecteurs logiques par catégorie
- 11 types d'arguments

## Auteur

**Maître Mariano** — Excellence Pédagogique au Bénin
