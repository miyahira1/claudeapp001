import { motion } from 'framer-motion'
import { ArrowRight, Play, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <Users size={14} />
          50,000+ Suscriptores
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Aprende IA.
          </span>
          <br />
          <span className="text-text-primary">Construye Más Rápido.</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
            Trabaja Más Inteligente.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          El canal de IA en español para profesionales, emprendedores y freelancers que quieren automatizar su trabajo y construir negocios más inteligentes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            Explorar Recursos Gratis
            <ArrowRight size={18} />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#27272A] text-text-primary font-semibold text-base hover:border-primary/50 hover:bg-surface transition-all"
          >
            <Play size={16} className="text-primary" />
            Ver el Canal →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
