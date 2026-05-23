import { NavLink } from 'react-router-dom'
import { Zap, Play, MessageSquare, Briefcase, Camera } from 'lucide-react'

const columns = [
  {
    heading: 'Recursos',
    links: [
      { label: 'Guías Gratis', to: '/resources' },
      { label: 'Prompt Packs', to: '/resources' },
      { label: 'Plantillas', to: '/resources' },
      { label: 'Checklists', to: '/resources' },
    ],
  },
  {
    heading: 'Herramientas',
    links: [
      { label: 'Directorio IA', to: '/tools' },
      { label: 'Escritura', to: '/tools' },
      { label: 'Automatización', to: '/tools' },
      { label: 'Productividad', to: '/tools' },
    ],
  },
  {
    heading: 'Premium',
    links: [
      { label: 'Curso IA', to: '/premium' },
      { label: 'Comunidad', to: '/premium' },
      { label: 'Mentorship 1:1', to: '/premium' },
      { label: 'Consultoría', to: '/consulting' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacidad', to: '/' },
      { label: 'Términos', to: '/' },
      { label: 'Cookies', to: '/' },
      { label: 'Contacto', to: '/' },
    ],
  },
]

const socials = [
  { icon: Play, label: 'YouTube', href: '#' },
  { icon: MessageSquare, label: 'Twitter/X', href: '#' },
  { icon: Briefcase, label: 'LinkedIn', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[#27272A] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-text-primary">
                Camino<span className="text-primary">Digital</span>
              </span>
            </NavLink>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Learn AI. Build Faster. Work Smarter.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-background border border-[#27272A] flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-text-primary font-semibold text-sm mb-4">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className="text-text-muted text-sm hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Camino Digital. Todos los derechos reservados.
          </p>
          <p className="text-text-muted text-sm">
            Hecho con ❤️ para la comunidad hispana de IA
          </p>
        </div>
      </div>
    </footer>
  )
}
