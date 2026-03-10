import ScrollReveal from '../ui/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { useState, useEffect } from 'react'

const clients = [
  { name: 'Intermost', initials: 'IM', url: 'https://intermost.in', logo: '/assets/clients/intermost.png' },
  { name: 'Access Mails', initials: 'AM', url: 'https://accessmails.in', logo: '/assets/clients/Accessmails.png' },
  { name: 'RyRaah', initials: 'RR', url: 'https://ryraah.in', logo: '/assets/clients/ryraah.png' },
  { name: 'Ombase', initials: 'OB', url: 'https://ombase.in', logo: '/assets/clients/Ombase.jpg' },
  { name: 'KrishnaKala Plants', initials: 'KK', url: 'https://krishnakalaplants.in', logo: '/assets/clients/krishnakalaplants.png' },
  { name: 'Nikam Interior', initials: 'NI', url: null, logo: null },
  { name: 'Tech Amplifiers', initials: 'TA', url: 'https://techamplifiers.com/', logo: '/assets/clients/Tech Amplifiers.png' },
  { name: 'Cognatech Solutions', initials: 'CS', url: 'https://cognatech.in/', logo: '/assets/clients/Cognatech Solutions.png' },
  { name: 'JS13 FINANCIALS', initials: 'JF', url: null, logo: '/assets/clients/JS13 Financials.jpeg' },
]

/* Morphing blob shape variants for the background */
const blobVariants = {
  initial: {
    borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
  },
  animate: {
    borderRadius: [
      '42% 58% 70% 30% / 45% 45% 55% 55%',
      '60% 40% 30% 70% / 50% 60% 40% 50%',
      '35% 65% 55% 45% / 55% 35% 65% 45%',
      '50% 50% 40% 60% / 40% 55% 45% 55%',
      '42% 58% 70% 30% / 45% 45% 55% 55%',
    ],
    transition: {
      duration: 8,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

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
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {clients.map((client, i) => {
              const content = (
                <>
                  <div className="w-28 h-28 rounded-2xl bg-light-gray border border-gray-200 flex items-center justify-center
                                group-hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                    {/* Morphing blob background on hover */}
                    <motion.div
                      className="absolute inset-1 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500"
                      variants={blobVariants}
                      initial="initial"
                      animate="animate"
                    />
                    {client.logo ? (
                      <motion.img
                        src={client.logo}
                        alt={client.name}
                        className="h-20 w-auto object-contain relative z-10"
                        whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                        transition={{ duration: 0.4 }}
                      />
                    ) : (
                      <motion.span
                        className="text-2xl font-heading font-bold text-secondary group-hover:text-accent transition-colors relative z-10"
                        whileHover={{ scale: 1.1 }}
                      >
                        {client.initials}
                      </motion.span>
                    )}
                    {client.url && (
                      <HiExternalLink className="absolute top-2 right-2 text-sm text-gray-300 group-hover:text-accent transition-colors z-10" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-secondary group-hover:text-accent transition-colors duration-300">
                    {client.name}
                  </span>
                </>
              )

              return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
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
