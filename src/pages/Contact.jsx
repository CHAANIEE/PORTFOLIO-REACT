import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section style={{ paddingTop: 180, borderBottom: 'none' }}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.p>
        <motion.h1
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have something to build? I'd like to hear about it.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact__links"
        >
          <a className="btn btn--primary" href="mailto:your-email@example.com">Email me</a>
          <a className="text-link" href="https://github.com/CHAANIEE" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-link" href="https://chaaniee.vercel.app" target="_blank" rel="noreferrer">Old portfolio ↗</a>
        </motion.div>
      </div>
    </section>
  )
}