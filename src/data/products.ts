import type { Product, Testimonial } from '../types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Curso IA para Negocios',
    price: '$97',
    features: [
      'Acceso de por vida al curso completo',
      '+40 lecciones en video HD',
      'Plantillas y recursos descargables',
      'Comunidad privada de estudiantes',
      'Actualizaciones incluidas',
      'Certificado de finalización',
    ],
    cta: 'Quiero Acceso',
    tier: 'basic',
  },
  {
    id: '2',
    name: 'Comunidad Premium',
    price: '$29',
    period: '/mes',
    features: [
      'Todo lo del Curso IA',
      'Sesiones grupales semanales en vivo',
      'Feedback personalizado en tus proyectos',
      'Acceso a todos los recursos futuros',
      'Canal privado de Slack',
      'Early access a nuevas herramientas',
      'Descuentos en Mentorship 1:1',
    ],
    cta: 'Unirme Ahora',
    popular: true,
    tier: 'pro',
  },
  {
    id: '3',
    name: 'Mentorship 1:1',
    price: '$500',
    features: [
      'Todo lo de Comunidad Premium',
      '4 sesiones 1:1 de 60 minutos',
      'Plan de automatización personalizado',
      'Implementación guiada paso a paso',
      'Soporte directo por WhatsApp',
      'Garantía de resultados',
    ],
    cta: 'Quiero Acceso',
    tier: 'enterprise',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    role: 'Fundador, Agencia Digital',
    quote: 'Gracias a Camino Digital automaticé el 60% de mi agencia. Ahora trabajo la mitad del tiempo y gano el doble.',
    avatarColor: 'from-indigo-400 to-violet-500',
  },
  {
    id: '2',
    name: 'María García',
    role: 'Freelancer, Copywriter',
    quote: 'Los prompts y workflows de IA transformaron mi negocio. Pasé de cobrar $500 a $2,500 por proyecto.',
    avatarColor: 'from-cyan-400 to-blue-500',
  },
  {
    id: '3',
    name: 'Roberto Silva',
    role: 'Director de Marketing, SaaS',
    quote: 'El mejor contenido de IA en español. Lo recomiendo a todo mi equipo. El ROI fue inmediato.',
    avatarColor: 'from-emerald-400 to-teal-500',
  },
]

export const faqs = [
  { q: '¿Necesito experiencia técnica para el curso?', a: 'No. El curso está diseñado para profesionales de cualquier área. Si puedes usar Gmail y Google Drive, puedes aprender a usar IA.' },
  { q: '¿En qué idioma está el contenido?', a: 'Todo el contenido está en español latino. Los ejemplos y casos de uso están adaptados al mercado hispanohablante.' },
  { q: '¿Cuánto tiempo necesito dedicar por semana?', a: 'Recomendamos mínimo 3-4 horas semanales para avanzar bien. El acceso es de por vida así que puedes ir a tu ritmo.' },
  { q: '¿Hay garantía de devolución?', a: 'Sí. Ofrecemos garantía de 30 días sin preguntas. Si no estás satisfecho, te devolvemos el 100% de tu inversión.' },
  { q: '¿Puedo facturar el curso para mi empresa?', a: 'Absolutamente. Al completar la compra recibirás una factura con todos los datos fiscales para deducir el costo.' },
]
