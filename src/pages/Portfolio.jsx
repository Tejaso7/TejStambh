import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTA from '../components/home/CTA'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'
import projects from '../data/projects.json'

const filters = ['All', 'Web', 'AI Automation', 'AI']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">Portfolio</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              Projects That <span className="text-accent">Make an Impact</span>
            </h1>
            <p className="text-body max-w-2xl">
              Explore our portfolio of digital products built for startups and enterprises.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-accent text-white'
                      : 'bg-white text-secondary border border-gray-200 hover:border-accent hover:text-accent'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 group cursor-pointer h-full flex flex-col"
                  >
                    {/* Image area */}
                    <div
                      className="h-52 flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: project.color + '10' }}
                    >
                      <span className="text-6xl font-heading font-bold opacity-15" style={{ color: project.color }}>
                        {project.name.charAt(0)}
                      </span>
                      <div className="absolute inset-0 bg-accent/90 flex items-center justify-center 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-medium flex items-center gap-2">
                          View Details <HiExternalLink />
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-heading font-semibold text-lg mt-1 mb-2">{project.name}</h3>
                      <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs bg-light-gray text-secondary px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Result */}
                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-xs text-secondary">Result:</span>
                        <span className="text-sm font-medium text-accent ml-2">{project.result}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  )
}
