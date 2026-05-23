import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '../../lib/utils'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/tools', label: 'AI Tools' },
  { to: '/resources', label: 'Resources' },
  { to: '/premium', label: 'Premium' },
  { to: '/consulting', label: 'Consulting' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-[#27272A]'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg text-text-primary tracking-tight">
              Camino<span className="text-primary">Digital</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-text-primary bg-surface'
                      : 'text-text-muted hover:text-text-primary hover:bg-surface/60',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="hidden md:block px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Únete Gratis
            </button>
            <button
              className="md:hidden text-text-muted hover:text-text-primary transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-surface border-l border-[#27272A] flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg text-text-primary">
                Camino<span className="text-primary">Digital</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-text-muted hover:text-text-primary"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'text-text-primary bg-background'
                        : 'text-text-muted hover:text-text-primary hover:bg-background/60',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Únete Gratis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer so content doesn't hide under fixed header */}
      <div className="h-16" />
    </>
  )
}
