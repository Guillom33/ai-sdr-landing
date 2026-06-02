# AI SDR — Landing page

Landing page de validation avec formulaire waitlist.

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Supabase](https://supabase.com) (PostgreSQL)
- [Vercel](https://vercel.com) (déploiement)

## Développement local

### Prérequis

- Node.js 20+
- Un projet Supabase avec la table `waitlist` créée

### Installation

```bash
npm install
```

### Variables d'environnement

Copier `.env.example` en `.env.local` et remplir les valeurs :

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SUPABASE_URL` : URL du projet Supabase
- `SUPABASE_SERVICE_ROLE_KEY` : clé service role (Settings > API)

### Schéma Supabase

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT NOT NULL DEFAULT 'landing',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
```

### Lancement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Déploiement

Le projet est auto-déployé sur Vercel à chaque push sur `main`.
Ajouter les variables d'environnement dans Vercel > Settings > Environment Variables.
