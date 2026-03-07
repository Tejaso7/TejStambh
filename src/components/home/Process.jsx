import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'
import { HiSearch, HiClipboardList, HiCode, HiShieldCheck, HiCloudUpload, HiTrendingUp } from 'react-icons/hi'

const steps = [
  { icon: HiSearch, title: 'Discovery', description: 'We understand your vision, goals, and requirements through deep consultation.' },
  { icon: HiClipboardList, title: 'Planning', description: 'Strategic roadmap with clear milestones, timelines, and architecture.' },
  { icon: HiCode, title: 'Development', description: 'Agile development with regular updates and collaborative iteration.' },
  { icon: HiShieldCheck, title: 'Testing', description: 'Rigorous QA and performance testing to ensure quality delivery.' },
  { icon: HiCloudUpload, title: 'Deployment', description: 'Smooth launch with CI/CD pipelines and monitoring setup.' },
  { icon: HiTrendingUp, title: 'Scaling', description: 'Post-launch optimization, support, and growth strategy.' },
]

export default function Process() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">How We Work</span>
            <h2 className="heading-lg mb-4">Our Development Process</h2>
            <p className="text-body">
              A structured, transparent process that takes your idea from concept 
              to a fully deployed, scalable product.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-7 border border-gray-100 relative group"
              >
                {/* Step number */}
                <span className="absolute top-6 right-6 text-5xl font-heading font-bold text-gray-100 
                              group-hover:text-accent/10 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4
                              group-hover:bg-accent transition-colors duration-300">
                  <step.icon className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
