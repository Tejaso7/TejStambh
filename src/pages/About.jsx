import { motion } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTA from '../components/home/CTA'
import { HiLightningBolt, HiUserGroup, HiGlobe, HiHeart } from 'react-icons/hi'

const values = [
  { icon: HiLightningBolt, title: 'Innovation First', description: 'We push boundaries with emerging technologies to deliver future-ready solutions.' },
  { icon: HiUserGroup, title: 'Client Partnership', description: 'We treat every client as a partner, deeply invested in their success.' },
  { icon: HiGlobe, title: 'Global Standards', description: 'World-class quality in every product, adhering to international best practices.' },
  { icon: HiHeart, title: 'Passion Driven', description: 'Our team is fueled by genuine passion for technology and problem-solving.' },
]

const milestones = [
  { year: '2023', event: 'TejStambh founded in Pune by Tejas Sawant' },
  { year: '2023', event: 'First 5 client projects delivered successfully' },
  { year: '2024', event: 'Expanded team and launched AI automation services' },
  { year: '2024', event: 'Reached 30+ clients across multiple industries' },
  { year: '2025', event: 'Launched SaaS product development vertical' },
  { year: '2026', event: 'Scaling operations with enterprise partnerships' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">About Us</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              The <span className="text-accent">Pillar of Innovation</span> for Modern Businesses
            </h1>
            <p className="text-body max-w-2xl mb-0">
              Founded in 2023 in Pune, India, TejStambh is a modern technology and AI innovation 
              agency helping businesses transform ideas into scalable digital products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="section-label">Our Story</span>
              <h2 className="heading-lg mb-6">Built by a Builder, for Builders</h2>
              <p className="text-body mb-4">
                TejStambh was founded by <strong>Tejas Sawant</strong> with a clear mission: to bridge 
                the gap between innovative ideas and scalable technology solutions. Starting from a 
                small workspace in Pune, we have grown into a full-service technology partner trusted 
                by businesses across multiple industries.
              </p>
              <p className="text-body mb-6">
                Our name "TejStambh" means "Pillar of Light" — symbolizing our commitment to being 
                the foundation upon which businesses build their digital future. We combine deep 
                technical expertise with a genuine passion for innovation.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">50+</div>
                  <div className="text-sm text-secondary">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">30+</div>
                  <div className="text-sm text-secondary">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">2023</div>
                  <div className="text-sm text-secondary">Founded</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-lg">
                <div className="w-20 h-20 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-heading font-bold text-3xl">TS</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-1">Tejas Sawant</h3>
                <p className="text-accent text-sm font-medium mb-4">Founder & CEO</p>
                <p className="text-secondary text-sm leading-relaxed">
                  A passionate technologist and entrepreneur with expertise in AI, full-stack development, 
                  and scalable architecture. Tejas founded TejStambh to help businesses harness the 
                  power of modern technology for growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">Our Values</span>
              <h2 className="heading-lg mb-4">What Drives Us</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-xl bg-light-gray border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4
                                group-hover:bg-accent transition-colors duration-300">
                    <value.icon className="text-accent group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">Our Journey</span>
              <h2 className="heading-lg">Milestones</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {milestones.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 flex-1 bg-accent/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-accent text-sm font-semibold">{item.year}</span>
                    <p className="text-secondary mt-1">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
