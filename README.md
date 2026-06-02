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
- Accès au projet Supabase `ai-sdr-platform`

### Installation

```bash
npm install
```

### Variables d'environnement

Copier `.env.example` en `.env.local` et remplir les valeurs :

```bash
cp .env.example .env.local
```

| Variable | Où trouver | Description |
|----------|-----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase > Settings > API | URL du projet |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase > Settings > API | Clé publique anon |

### Supabase

Le projet Supabase `ai-sdr-platform` contient déjà la table :

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT NOT NULL DEFAULT 'landing',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
-- RLS: INSERT autorisé pour les utilisateurs anonymes
-- RLS: SELECT autorisé pour les utilisateurs authentifiés
```

### Lancement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Déploiement

Le projet est auto-déployé sur Vercel à chaque push sur `main`.

Variables d'environnement à ajouter dans Vercel > Settings > Environment Variables :
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
