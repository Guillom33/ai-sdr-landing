import WaitlistForm from '@/components/WaitlistForm'

const valueProps = [
  {
    icon: '⚡',
    title: 'Emails ultra-personnalisés en secondes',
    description:
      "Notre IA analyse chaque prospect et génère des emails qui parlent directement de ses enjeux — sans passer des heures en recherche manuelle.",
  },
  {
    icon: '📈',
    title: '3x plus de meetings réservés',
    description:
      "Des messages qui résonnent vraiment. Taux de réponse jusqu'à 3x supérieurs aux séquences génériques habituelles.",
  },
  {
    icon: '🎯',
    title: 'Scalez sans recruter',
    description:
      "Prospectez 10x plus de comptes avec la même équipe. Notre IA s'intègre dans votre CRM et vos outils existants.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 text-sm text-blue-400 border border-blue-400/30 rounded-full bg-blue-400/10 mb-8">
          Beta privée · Places limitées
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          Générez{' '}
          <span className="text-blue-400">3x plus de meetings</span>
          {' '}avec des emails IA ultra-personnalisés
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Fini les emails génériques ignorés. Notre IA SDR analyse chaque prospect
          et rédige des messages personnalisés qui déclenchent de vraies conversations.
        </p>
        <WaitlistForm />
        <p className="text-gray-500 text-sm mt-4">
          Plus de 200 équipes commerciales en attente · Aucune carte bancaire requise
        </p>
      </section>

      {/* Value props */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((vp) => (
            <div
              key={vp.title}
              className="p-6 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="text-3xl mb-4">{vp.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{vp.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{vp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-4">Prêt à multiplier vos résultats ?</h2>
        <p className="text-gray-400 mb-8">
          Rejoignez la waitlist et soyez parmi les premiers à accéder à la beta privée.
        </p>
        <WaitlistForm />
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-gray-600 text-sm border-t border-white/5">
        © 2026 AI SDR · Tous droits réservés
      </footer>
    </main>
  )
}
