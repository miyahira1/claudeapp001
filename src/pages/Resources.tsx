import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Mail, CheckCircle } from 'lucide-react'
import { resources } from '../data/resources'

const categories = ['Todos', 'Guías', 'Prompts', 'Plantillas', 'Checklists']

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedResource, setSelectedResource] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [downloaded, setDownloaded] = useState(false)

  const filtered = resources.filter(
    (r) => activeCategory === 'Todos' || r.category === activeCategory,
  )

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setDownloaded(true)
  }

  const closeModal = () => {
    setSelectedResource(null)
    setEmail('')
    setDownloaded(false)
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="bg-surface/40 border-b border-[#27272A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Download size={14} />
            100% Gratis — Sin tarjeta de crédito
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-text-primary mb-4"
          >
            Recursos Gratuitos de IA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-xl max-w-2xl mx-auto"
          >
            Guías, prompts, plantillas y checklists listos para usar. Descarga gratis y empieza a trabajar con IA hoy.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-surface border border-[#27272A] text-text-muted hover:text-text-primary hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#27272A] bg-surface overflow-hidden hover:border-primary/40 transition-colors group"
            >
              <div className={`h-40 bg-gradient-to-br ${r.coverColor} relative`}>
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                  {r.fileType}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs">
                  {r.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-text-primary font-bold mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {r.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {r.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-text-muted text-xs">
                    <Download size={11} /> {r.downloads} descargas
                  </span>
                  <button
                    onClick={() => setSelectedResource(r.id)}
                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Descargar Gratis
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download modal */}
      <AnimatePresence>
        {selectedResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-[#27272A] rounded-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary"
              >
                <X size={20} />
              </button>

              {!downloaded ? (
                <>
                  <h3 className="text-text-primary font-bold text-xl mb-2">
                    Descarga tu recurso gratis
                  </h3>
                  <p className="text-text-muted text-sm mb-6">
                    Ingresa tu email y te enviaremos el acceso inmediatamente.
                  </p>
                  <form onSubmit={handleDownload} className="space-y-4">
                    <div className="relative">
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
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                      Obtener Acceso Gratis
                    </button>
                  </form>
                  <p className="text-text-muted text-xs text-center mt-4">Sin spam. Cancela cuando quieras.</p>
                </>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-text-primary font-bold text-xl mb-2">¡Listo!</h3>
                  <p className="text-text-muted text-sm">Revisa tu email. Tu recurso está en camino.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
