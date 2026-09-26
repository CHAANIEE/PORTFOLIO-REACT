import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import projects from '../data/projects.js'

export default function Work() {
  return (
    <section style={{ paddingTop: 180 }}>
      <div className="container">
        <p className="eyebrow">Work</p>
        <h2 className="section-heading">Everything Christian's built so far.</h2>

        <div className="projects__list">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Link to={`/work/${p.slug}`} className="project-row">
                <div className="project-row__main">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="project-row__tags">
                    {p.stack.map((s) => (
                      <span className="tag tag--small" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="project-row__meta">
                  <span className={`status ${p.status === 'Live' ? 'status--live' : 'status--progress'}`}>
                    {p.status}
                  </span>
                  <span className="project-row__arrow">↗</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}