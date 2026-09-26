import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function useClock() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 30)
    return () => clearInterval(id)
  }, [])

  return time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

export default function Footer() {
  const time = useClock()

  return (
    <footer className="site-footer">
      <div className="container">
        <p className="eyebrow">Let's work together</p>
        <h2 className="footer__cta">
          Have something to build? <Link to="/contact">Get in touch</Link>
        </h2>

        <div className="site-footer__grid">
          <div>
            <span className="footer__label">Email</span>
            <a href="mailto:christianlagula12345678@example.com">christianlagula12345678@example.com</a>
          </div>
          <div>
            <span className="footer__label">Socials</span>
            <div className="footer__links">
              <a href="https://github.com/CHAANIEE" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://chaaniee.vercel.app" target="_blank" rel="noreferrer">Old portfolio</a>
            </div>
          </div>
          <div>
            <span className="footer__label">Local time</span>
            <span>{time} PHT</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>2026 © Edition</span>
          <span>Based in Davao, Philippines</span>
        </div>
      </div>
    </footer>
  )
}