'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Une erreur est survenue')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Une erreur est survenue')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-6 px-4 rounded-xl bg-green-900/20 border border-green-500/30 max-w-xl mx-auto">
        <div className="text-green-400 text-xl font-bold mb-1">✓ Vous êtes sur la liste !</div>
        <p className="text-gray-400 text-sm">On vous contacte dès l&apos;ouverture de la beta privée.</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
        >
          {status === 'loading' ? 'Inscription...' : 'Rejoindre la waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2 text-center">{errorMessage}</p>
      )}
    </div>
  )
}
