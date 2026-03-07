import ScrollReveal from '../ui/ScrollReveal'
import { HiLightningBolt, HiCube, HiCurrencyDollar, HiChip } from 'react-icons/hi'
import { motion } from 'framer-motion'

const advantages = [
  {
    icon: HiChip,
    title: 'Emerging Technology Expertise',
    description: 'We stay ahead of the curve with AI, ML, and next-gen frameworks to deliver cutting-edge solutions.',
  },
  {
    icon: HiCube,
    title: 'Scalable Architecture',
    description: 'Our solutions are built to grow with your business, handling millions of users effortlessly.',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Cost Efficient Development',
    description: 'High-quality products delivered on budget without compromising on quality or timelines.',
  },
  {
    icon: HiLightningBolt,
    title: 'AI-Driven Automation',
    description: 'We integrate intelligent automation to streamline your workflows and boost productivity.',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <ScrollReveal>
            <span className="section-label">Why Choose Us</span>
            <h2 className="heading-lg mb-6">
              Why Businesses Trust{' '}
              <span className="text-accent">TejStambh</span>
            </h2>
            <p className="text-body mb-8">
              We combine deep technical expertise with a client-first approach 
              to deliver digital products that are scalable, efficient, and 
              built for the future.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">98%</div>
                <div className="text-xs text-secondary mt-1">On-Time Delivery</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">3x</div>
                <div className="text-xs text-secondary mt-1">Faster Development</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">24/7</div>
                <div className="text-xs text-secondary mt-1">Support Available</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((adv, index) => (
              <ScrollReveal key={adv.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                  className="bg-light-gray rounded-xl p-6 border border-gray-100 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4
                                group-hover:bg-accent transition-colors duration-300">
                    <adv.icon className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">{adv.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{adv.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
