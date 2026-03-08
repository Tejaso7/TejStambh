import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'

const clients = [
  { name: 'Intermost', initials: 'IM', url: 'https://intermost.in' },
  { name: 'Access Mails', initials: 'AM', url: 'https://accessmails.in' },
  { name: 'RyRaah', initials: 'RR', url: 'https://ryraah.in' },
  { name: 'Ombase', initials: 'OB', url: 'https://ombase.in' },
  { name: 'KrishnaKala Plants', initials: 'KK', url: 'https://krishnakalaplants.in' },
  { name: 'Nikam Interior', initials: 'NI', url: null },
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
            {clients.map((client, i) => {
              const content = (
                <>
                  <div className="w-20 h-20 rounded-xl bg-light-gray border border-gray-200 flex items-center justify-center
                                group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300 relative">
                    <span className="text-xl font-heading font-bold text-secondary group-hover:text-accent transition-colors">
                      {client.initials}
                    </span>
                    {client.url && (
                      <HiExternalLink className="absolute top-1.5 right-1.5 text-xs text-gray-300 group-hover:text-accent transition-colors" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-secondary group-hover:text-accent transition-colors">
                    {client.name}
                  </span>
                </>
              )

              return (
                <motion.div
                  key={client.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  {client.url ? (
                    <a href={client.url} target="_blank" rel="noopener noreferrer"
                       className="flex flex-col items-center gap-3">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
