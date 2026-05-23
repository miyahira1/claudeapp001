import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resources } from '../../data/resources'

const featured = resources.slice(0, 3)

export default function FeaturedResources() {
  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
              Recursos Gratuitos
            </h2>
            <p className="text-text-muted text-lg">
              Descarga y empieza a usar la IA hoy mismo
            </p>
          </div>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all shrink-0"
          >
            Ver Todos los Recursos
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#27272A] bg-surface overflow-hidden hover:border-primary/40 transition-colors group"
            >
              {/* Cover placeholder */}
              <div className={`h-36 bg-gradient-to-br ${r.coverColor} flex items-end p-4`}>
                <span className="px-2 py-1 rounded-md bg-black/40 text-white text-xs font-medium">
                  {r.fileType}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-medium uppercase tracking-wide">
                  {r.category}
                </span>
                <h3 className="text-text-primary font-bold mt-1 mb-2 leading-snug group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {r.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-text-muted text-xs">
                    <Download size={12} /> {r.downloads} descargas
                  </span>
                  <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold hover:opacity-90 transition-opacity">
                    Descargar Gratis
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
