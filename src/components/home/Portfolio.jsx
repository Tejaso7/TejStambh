import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

const projects = [
  {
    name: 'Intermost',
    category: 'SaaS Platform',
    description: 'A modern SaaS platform for internal team communication and project management.',
    color: '#E63946',
  },
  {
    name: 'Access Mails',
    category: 'Email Automation',
    description: 'AI-driven email marketing platform with advanced automation workflows.',
    color: '#1A1A1A',
  },
  {
    name: 'RyRaah',
    category: 'AI Application',
    description: 'Intelligent voice assistant application powered by natural language processing.',
    color: '#333333',
  },
  {
    name: 'Ombase',
    category: 'Cloud Infrastructure',
    description: 'Enterprise cloud management dashboard with real-time monitoring.',
    color: '#E63946',
  },
  {
    name: 'Nikam Interior',
    category: 'Web Application',
    description: 'Modern portfolio and booking platform for an interior design studio.',
    color: '#1A1A1A',
  },
]

export default function Portfolio() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Our Work</span>
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="text-body">
              Explore some of the impactful digital products we've built for our clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer"
              >
                {/* Image placeholder */}
                <div
                  className="h-52 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: project.color + '10' }}
                >
                  <span
                    className="text-5xl font-heading font-bold opacity-20"
                    style={{ color: project.color }}
                  >
                    {project.name.charAt(0)}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/90 flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium flex items-center gap-2">
                      View Project <HiArrowRight />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-lg mt-1 mb-2 text-primary">
                    {project.name}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary">
            View All Projects
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
