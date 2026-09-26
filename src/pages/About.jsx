import { motion } from 'framer-motion'

export default function About() {
  return (
    <section style={{ paddingTop: 180, borderBottom: 'none' }}>
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">About</p>
          <h1 className="section-heading">
            IT student, full-stack developer, always mid-project.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="about__copy"
        >
          <p>
            Christian T. Lagula is a BS Information Technology student at the University of
            Mindanao Tagum, working full-stack across the backend and the interface.
          </p>
          <p>
            Most projects start as a Laravel or Django app and grow a React front end once the
            data model settles. Comfortable across PHP, Python, Java, and JavaScript, with
            MySQL and MariaDB on the data side.
          </p>
          <p>
            Tools of choice: VS Code, NetBeans, DataGrip, and Git.
          </p>
          <a className="text-link" href="https://github.com/CHAANIEE" target="_blank" rel="noreferrer">
            github.com/CHAANIEE ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}