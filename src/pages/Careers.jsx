import ScrollReveal from '../components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiBriefcase, HiClock, HiArrowRight, HiHeart, HiAcademicCap, HiCurrencyDollar, HiDesktopComputer } from 'react-icons/hi'

const openings = [
  {
    title: 'Senior Full-Stack Developer',
    type: 'Full-time',
    location: 'Pune / Remote',
    description: 'Build scalable web and mobile applications using React, Node.js, and cloud technologies.',
    requirements: ['3+ years experience', 'React & Node.js', 'Cloud (AWS/GCP)', 'REST & GraphQL APIs'],
  },
  {
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'Pune / Remote',
    description: 'Design and implement AI solutions including chatbots, NLP models, and computer vision systems.',
    requirements: ['2+ years in ML', 'Python & TensorFlow/PyTorch', 'NLP experience', 'Production ML deployment'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Pune',
    description: 'Create stunning user interfaces and seamless experiences for web and mobile products.',
    requirements: ['2+ years in UI/UX', 'Figma proficiency', 'Design systems', 'User research skills'],
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Full-time',
    location: 'Pune / Remote',
    description: 'Drive growth through SEO, paid ads, and content marketing strategies.',
    requirements: ['2+ years in digital marketing', 'SEO & SEM expertise', 'Analytics skills', 'Content strategy'],
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure high availability.',
    requirements: ['2+ years in DevOps', 'Docker & Kubernetes', 'CI/CD pipelines', 'AWS or GCP'],
  },
]

const perks = [
  { icon: HiDesktopComputer, title: 'Remote Flexibility', description: 'Work from anywhere with flexible hours.' },
  { icon: HiAcademicCap, title: 'Learning Budget', description: 'Annual budget for courses, conferences, and certifications.' },
  { icon: HiCurrencyDollar, title: 'Competitive Pay', description: 'Market-rate compensation with performance bonuses.' },
  { icon: HiHeart, title: 'Health Benefits', description: 'Comprehensive health insurance for you and your family.' },
]

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">Careers</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              Build the Future <span className="text-accent">With Us</span>
            </h1>
            <p className="text-body max-w-2xl">
              Join a team of passionate innovators working on cutting-edge technology 
              projects. We're looking for talented people who share our vision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Why Join Us</span>
              <h2 className="heading-lg">Perks & Benefits</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 text-center border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4
                                group-hover:bg-accent transition-colors duration-300">
                    <perk.icon className="text-accent group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{perk.title}</h3>
                  <p className="text-secondary text-sm">{perk.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Open Positions</span>
              <h2 className="heading-lg">Current Openings</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <ScrollReveal key={job.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ x: 4, boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}
                  className="bg-light-gray rounded-xl p-6 border border-gray-100 group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-secondary">
                        <span className="flex items-center gap-1">
                          <HiBriefcase size={14} className="text-accent" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiLocationMarker size={14} className="text-accent" /> {job.location}
                        </span>
                      </div>
                      <p className="text-secondary text-sm mt-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.requirements.map(req => (
                          <span key={req} className="text-xs bg-white text-secondary px-2.5 py-1 rounded-full border border-gray-200">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="btn-primary text-sm !px-5 !py-2">
                        Apply <HiArrowRight />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-lg text-white mb-4">Don't See Your Role?</h2>
              <p className="text-gray-400 mb-8">
                We're always looking for talented people. Send us your resume and we'll 
                reach out when a matching position opens up.
              </p>
              <a href="mailto:contact@tejstambh.in" className="btn-primary text-base">
                Send Your Resume <HiArrowRight />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
