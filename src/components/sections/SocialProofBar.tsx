import { motion } from 'framer-motion'
import { Users, Video, Globe, Download } from 'lucide-react'

const stats = [
  { icon: Users, value: '50K+', label: 'Suscriptores' },
  { icon: Video, value: '200+', label: 'Videos' },
  { icon: Globe, value: '15+', label: 'Países' },
  { icon: Download, value: '10K+', label: 'Descargas' },
]

const featuredIn = ['Forbes', 'HubSpot', 'Product Hunt', 'LinkedIn News', 'Entrepreneur']

export default function SocialProofBar() {
  return (
    <section className="py-16 border-y border-[#27272A] bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Icon size={18} className="text-primary" />
              </div>
              <span className="text-2xl font-bold text-text-primary">{value}</span>
              <span className="text-text-muted text-sm">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Featured-in bar */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-text-muted text-xs uppercase tracking-widest">Mencionado en</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {featuredIn.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-lg border border-[#27272A] bg-background text-text-muted text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
