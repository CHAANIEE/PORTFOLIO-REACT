import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import projects from '../data/projects.js'

export default function Home() {
  const recent = projects.slice(0, 4)

  return (
    <>
      <Hero />

      <section id="work">
        <div className="container">
          <p className="eyebrow">Recent work</p>
          <h2 className="section-heading">A few things Christian has shipped.</h2>

          <div className="work-list">
            {recent.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={`/work/${p.slug}`} className="work-list__row">
                  <span className="work-list__title">{p.title}</span>
                  <span className="work-list__year">{p.year}</span>
                  <span className="work-list__arrow">↗</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <Link className="text-link" to="/work">More work →</Link>
        </div>
      </section>

      <Skills />
    </>
  )
}