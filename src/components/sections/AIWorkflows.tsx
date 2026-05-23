import { motion } from 'framer-motion'
import { Mail, PenTool, BarChart2, ArrowRight } from 'lucide-react'

const workflows = [
  {
    id: '1',
    icon: Mail,
    name: 'Automatiza tu Email con IA',
    description: 'Clasifica, responde y organiza tu bandeja de entrada automáticamente usando GPT-4 y Make.com.',
    tools: ['ChatGPT', 'Make.com', 'Gmail'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
  },
  {
    id: '2',
    icon: PenTool,
    name: 'Crea Contenido con ChatGPT',
    description: 'Pipeline completo de creación de contenido: ideas, guión, subtítulos y publicación en redes.',
    tools: ['ChatGPT', 'Notion', 'Buffer'],
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
  },
  {
    id: '3',
    icon: BarChart2,
    name: 'Analiza Datos con Claude',
    description: 'Sube tus hojas de cálculo y obtén análisis, gráficos e insights accionables en segundos.',
    tools: ['Claude', 'Python', 'Google Sheets'],
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10 border-indigo-400/20',
  },
]

export default function AIWorkflows() {
  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Workflows de IA que Funcionan
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Automatizaciones reales que nuestros estudiantes usan en sus negocios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {workflows.map((w, i) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#27272A] bg-surface p-6 hover:border-primary/40 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl border ${w.bg} flex items-center justify-center mb-5`}>
                <w.icon size={22} className={w.color} />
              </div>
              <h3 className="text-text-primary font-bold text-lg mb-3">{w.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5">{w.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {w.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-background border border-[#27272A] text-text-muted text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all"
              >
                Ver Workflow <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
