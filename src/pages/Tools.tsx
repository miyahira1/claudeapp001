import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Star, ExternalLink } from 'lucide-react'
import { tools, toolCategories } from '../data/tools'

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')

  const featured = tools.find((t) => t.featured)
  const filtered = tools.filter((t) => {
    const matchCat = activeCategory === 'Todos' || t.category === activeCategory
    return matchCat && !t.featured
  })

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Page header */}
      <div className="bg-surface/40 border-b border-[#27272A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text-primary mb-4"
          >
            Directorio de Herramientas IA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xl max-w-2xl mx-auto"
          >
            Las mejores herramientas de inteligencia artificial, seleccionadas y probadas por nuestra comunidad
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Featured tool */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-secondary/10 p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-start gap-6"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${featured.logoColor} flex items-center justify-center text-white font-bold text-xl shrink-0`}>
              {featured.name[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wide">
                  Herramienta Destacada
                </span>
                <span className="text-text-muted text-sm">{featured.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">{featured.name}</h2>
              <p className="text-text-muted mb-4">{featured.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                  <Star size={14} fill="currentColor" />
                  {featured.rating}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Ver Herramienta <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Buscar herramientas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface border border-[#27272A] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {toolCategories.map((cat) => (
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

        {/* Tools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#27272A] bg-surface p-5 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tool.logoColor} flex items-center justify-center text-white font-bold text-base shrink-0`}>
                  {tool.name[0]}
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-text-muted text-xs">{tool.category}</span>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                {tool.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-yellow-400 text-xs font-medium">
                  <Star size={12} fill="currentColor" />
                  {tool.rating}
                </div>
                <a
                  href="#"
                  className="text-primary text-xs font-medium hover:underline flex items-center gap-1"
                >
                  Ver Herramienta <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
