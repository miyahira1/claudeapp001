import { motion } from 'framer-motion'
import { Building2, Users, Briefcase, Search, Settings, Rocket, HeadphonesIcon, ArrowRight } from 'lucide-react'

const audiences = [
  { icon: Building2, title: 'PyMEs y Negocios', desc: 'Empresas que quieren automatizar procesos y reducir costos operativos con IA.' },
  { icon: Users, title: 'Equipos y Startups', desc: 'Teams que necesitan implementar IA en su stack de herramientas y workflows.' },
  { icon: Briefcase, title: 'Emprendedores', desc: 'Fundadores que quieren construir un negocio más eficiente desde el primer día.' },
]

const services = [
  {
    icon: Search,
    name: 'Auditoría de IA',
    price: 'Desde $500',
    desc: 'Analizamos tu negocio e identificamos los 10 procesos que puedes automatizar con IA en las próximas 4 semanas.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
  },
  {
    icon: Settings,
    name: 'Implementación de Automatizaciones',
    price: 'Desde $2,500',
    desc: 'Diseñamos e implementamos workflows de IA personalizados que ahorran tiempo y eliminan tareas repetitivas.',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
  },
  {
    icon: Users,
    name: 'Formación de Equipos',
    price: 'Desde $1,500',
    desc: 'Capacitamos a tu equipo para usar IA en su trabajo diario con talleres prácticos y materiales personalizados.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
  },
]

const steps = [
  { icon: Search, step: '01', title: 'Diagnóstico', desc: 'Llamada gratuita de 30 min para entender tu negocio y necesidades.' },
  { icon: Briefcase, step: '02', title: 'Propuesta', desc: 'Plan personalizado con ROI estimado, timeline y costos detallados.' },
  { icon: Rocket, step: '03', title: 'Implementación', desc: 'Desarrollamos e implementamos las soluciones acordadas en tu negocio.' },
  { icon: HeadphonesIcon, step: '04', title: 'Soporte', desc: 'Acompañamiento continuo para asegurar que los resultados se mantengan.' },
]

const caseStudies = [
  {
    industry: 'Agencia de Marketing',
    result: '+40% productividad',
    metric: '20h/semana ahorradas',
    desc: 'Automatizamos el proceso de creación de reportes y propuestas con IA, reduciendo el tiempo de producción en un 70%.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    industry: 'E-commerce Fashion',
    result: '3x conversión',
    metric: '$120K revenue adicional',
    desc: 'Implementamos chatbot de IA para atención al cliente y recomendaciones personalizadas de productos.',
    color: 'from-cyan-500 to-blue-600',
  },
]

export default function Consulting() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="bg-surface/40 border-b border-[#27272A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-5 leading-tight"
          >
            Automatiza tu Negocio{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              con Inteligencia Artificial
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xl max-w-2xl mx-auto mb-8"
          >
            Ayudamos a empresas hispanohablantes a implementar IA y automatizaciones que ahorran tiempo, reducen costos y escalan ingresos.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Agenda una Llamada Gratuita <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-24">
        {/* Audiences */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary text-center mb-3">¿Para quién es esto?</h2>
          <p className="text-text-muted text-center mb-10">Trabajamos con empresas y profesionales que están listos para crecer</p>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[#27272A] bg-surface p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <a.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-text-primary font-bold mb-2">{a.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary text-center mb-10">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[#27272A] bg-surface p-6"
              >
                <div className={`w-12 h-12 rounded-xl border ${s.bg} flex items-center justify-center mb-5`}>
                  <s.icon size={22} className={s.color} />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-text-primary font-bold">{s.name}</h3>
                  <span className="text-primary text-sm font-semibold ml-3 shrink-0">{s.price}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process timeline */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Nuestro Proceso</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-primary/20 mb-3">{s.step}</div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <s.icon size={18} className="text-primary" />
                </div>
                <h3 className="text-text-primary font-bold mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case studies */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary text-center mb-10">Casos de Éxito</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[#27272A] bg-surface overflow-hidden"
              >
                <div className={`h-3 bg-gradient-to-r ${c.color}`} />
                <div className="p-6">
                  <span className="text-text-muted text-sm">{c.industry}</span>
                  <div className="flex items-center gap-4 my-3">
                    <span className="text-2xl font-bold text-text-primary">{c.result}</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                      {c.metric}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div id="cta" className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-secondary/10 p-10 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Agenda una Llamada Gratuita de Diagnóstico
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            30 minutos sin costo para entender tu negocio e identificar las oportunidades de automatización con mayor ROI.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            Agendar con Calendly <ArrowRight size={20} />
          </a>
          <p className="text-text-muted text-sm mt-4">Sin compromiso. Sin tarjeta de crédito.</p>
        </div>
      </div>
    </main>
  )
}
