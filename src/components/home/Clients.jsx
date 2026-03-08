import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

const clients = [
  { name: 'Intermost', initials: 'IM' },
  { name: 'Access Mails', initials: 'AM' },
  { name: 'RyRaah', initials: 'RR' },
  { name: 'Ombase', initials: 'OB' },
  { name: 'Nikam Interior', initials: 'NI' },
]

export default function Clients() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">Trusted By</span>
            <h2 className="heading-lg">Our Clients</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 rounded-xl bg-light-gray border border-gray-200 flex items-center justify-center
                              group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                  <span className="text-xl font-heading font-bold text-secondary group-hover:text-accent transition-colors">
                    {client.initials}
                  </span>
                </div>
                <span className="text-sm font-medium text-secondary group-hover:text-accent transition-colors">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
