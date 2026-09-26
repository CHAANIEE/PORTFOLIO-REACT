import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/CHAANIEE' },
  { label: 'Portfolio (old)', href: 'https://chaaniee.vercel.app' },
]

export default function Menu() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="site-header">
        <Link to="/" className="site-header__logo" onClick={() => setOpen(false)}>
          Christian Lagula
        </Link>
        <button
          className="menu-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className={`menu-trigger__icon ${open ? 'menu-trigger__icon--open' : ''}`}>
            <span />
            <span />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <nav className="menu-overlay__nav">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={location.pathname === link.to ? 'is-active' : ''}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="menu-overlay__socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}