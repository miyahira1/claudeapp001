import { motion } from 'framer-motion'
import { Eye, Clock, ArrowRight } from 'lucide-react'
import { tutorials } from '../../data/tutorials'

export default function FeaturedTutorials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
              Tutoriales Destacados
            </h2>
            <p className="text-text-muted text-lg">
              Los videos más populares de la comunidad
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all shrink-0"
          >
            Ver Todos los Tutoriales
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide">
          {tutorials.map((t, i) => (
            <motion.a
              key={t.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group shrink-0 w-72 md:w-auto rounded-xl border border-[#27272A] bg-surface overflow-hidden hover:border-primary/40 transition-colors"
            >
              {/* Thumbnail placeholder */}
              <div className={`h-44 bg-gradient-to-br ${t.thumbnailColor} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {t.duration}
                </span>
                <span className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                  {t.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-text-primary font-semibold text-sm leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {t.title}
                </h3>
                <div className="flex items-center gap-4 text-text-muted text-xs">
                  <span className="flex items-center gap-1">
                    <Eye size={12} /> {t.views} vistas
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {t.duration}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
