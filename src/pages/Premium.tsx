import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, Star } from 'lucide-react'
import { products, faqs } from '../data/products'
import { testimonials } from '../data/testimonials'

export default function Premium() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="bg-surface/40 border-b border-[#27272A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text-primary mb-4"
          >
            Invierte en tu{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transformación con IA
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xl max-w-2xl mx-auto"
          >
            Elige el nivel de acompañamiento que necesitas para dominar la IA y escalar tu negocio
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                p.popular
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-surface shadow-lg shadow-primary/10'
                  : 'border-[#27272A] bg-surface'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold">
                    Más Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-text-primary font-bold text-xl mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-text-primary">{p.price}</span>
                  {p.period && <span className="text-text-muted">{p.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-opacity hover:opacity-90 ${
                  p.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'border border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[#27272A] bg-surface p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-10">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#27272A] bg-surface overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-text-primary font-medium text-sm">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-text-muted shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed border-t border-[#27272A] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
