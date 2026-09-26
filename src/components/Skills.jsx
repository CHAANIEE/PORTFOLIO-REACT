import { motion } from 'framer-motion'

const groups = [
  {
    label: 'Languages & frameworks',
    items: ['PHP', 'Laravel', 'Python', 'Java', 'React', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MariaDB'],
  },
  {
    label: 'Tools',
    items: ['VS Code', 'NetBeans', 'DataGrip', 'Git'],
  },
]

const row = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I reach for day to day.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {groups.map((group) => (
            <motion.div className="skills__row" key={group.label} variants={row}>
              <span className="skills__label">{group.label}</span>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}