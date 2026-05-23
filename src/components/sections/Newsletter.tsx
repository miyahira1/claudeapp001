import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Gift, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="newsletter" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-secondary/10 p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 rounded-full blur-3xl -z-0" />

          <div className="relative z-10">
            {/* Lead magnet callout */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Gift size={14} />
              + Recibe gratis: Pack de 50 Prompts de IA
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Recibe workflows de IA gratis cada semana
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto">
              Únete a más de 50,000 profesionales que automatizan su trabajo con IA. Sin spam, solo valor.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full pl-9 pr-4 py-3 rounded-xl bg-background border border-[#27272A] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Suscribirme Gratis
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3"
              >
                <CheckCircle size={40} className="text-primary" />
                <p className="text-text-primary font-semibold text-lg">¡Gracias! Revisa tu email.</p>
                <p className="text-text-muted text-sm">Tu Pack de 50 Prompts está en camino.</p>
              </motion.div>
            )}

            {!submitted && (
              <p className="text-text-muted text-xs mt-4">
                Sin spam. Cancela cuando quieras.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
