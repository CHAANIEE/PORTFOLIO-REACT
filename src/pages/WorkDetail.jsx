import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from '../data/projects.js'

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  return (
    <section style={{ paddingTop: 180, borderBottom: 'none' }}>
      <div className="container">
        <Link className="text-link" to="/work">← Back to work</Link>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {project.year} — {project.status}
        </motion.p>

        <motion.h1
          className="hero__title"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {project.title}
        </motion.h1>

        <motion.div
          className="project-row__tags"
          style={{ margin: '20px 0 32px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {project.stack.map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </motion.div>

        <motion.p
          className="hero__subtitle"
          style={{ maxWidth: 620 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project.details}
        </motion.p>

        {project.link !== '#' && (
          <a className="btn btn--primary" href={project.link} target="_blank" rel="noreferrer">
            Visit project ↗
          </a>
        )}
      </div>
    </section>
  )
}