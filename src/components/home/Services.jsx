import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { HiCode, HiLightningBolt, HiSpeakerphone, HiCloud } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const categories = [
  {
    icon: HiCode,
    title: 'Development',
    description: 'End-to-end digital product development from web to mobile.',
    services: ['Website Development', 'Mobile App Development', 'Custom Software', 'SaaS Platforms'],
  },
  {
    icon: HiLightningBolt,
    title: 'AI & Automation',
    description: 'Intelligent solutions powered by artificial intelligence.',
    services: ['AI Chatbots', 'Voice Bots', 'Vision AI', 'Workflow Automation'],
  },
  {
    icon: HiSpeakerphone,
    title: 'Marketing',
    description: 'Data-driven marketing strategies that drive growth.',
    services: ['SEO', 'Paid Ads', 'Social Media Management', 'Branding'],
  },
  {
    icon: HiCloud,
    title: 'Cloud & Infrastructure',
    description: 'Scalable and reliable infrastructure for modern apps.',
    services: ['Cloud Migration', 'DevOps', 'Scalable Architecture'],
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="heading-lg mb-4">Services That Drive Growth</h2>
            <p className="text-body">
              We provide comprehensive technology solutions to help businesses 
              innovate, automate, and scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <ScrollReveal key={cat.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 h-full border border-gray-100 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5 
                              group-hover:bg-accent transition-colors duration-300">
                  <cat.icon className="text-accent group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="heading-md text-xl mb-2">{cat.title}</h3>
                <p className="text-secondary text-sm mb-4">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-secondary">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
