import { useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Rahul Deshmukh',
    role: 'CEO, Intermost',
    text: 'TejStambh transformed our vision into a polished SaaS product. Their technical expertise and attention to detail exceeded our expectations. The team was responsive and delivered ahead of schedule.',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Founder, Access Mails',
    text: 'Working with TejStambh was a game-changer for our business. They built an AI-powered email platform that increased our conversion rates by 40%. Highly recommend their services.',
  },
  {
    name: 'Amit Patil',
    role: 'CTO, Lyra',
    text: 'The AI solutions TejStambh delivered were remarkably sophisticated yet user-friendly. Their deep understanding of machine learning helped us create a truly intelligent product.',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, Ombase',
    text: 'TejStambh rebuilt our entire cloud infrastructure, resulting in 60% cost savings and 99.9% uptime. Their DevOps expertise is world-class.',
  },
  {
    name: 'Vikram Nikam',
    role: 'Owner, Nikam Interior',
    text: 'Our new website by TejStambh has generated 3x more leads than our old site. The design is stunning, and the user experience is incredibly smooth.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Testimonials</span>
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-body">
              Real feedback from businesses we've helped transform.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-light-gray rounded-2xl p-8 md:p-12 min-h-[280px]">
              {/* Quote mark */}
              <div className="absolute top-6 left-8 text-6xl text-accent/10 font-heading font-bold leading-none">"</div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-accent" size={20} />
                    ))}
                  </div>

                  <p className="text-secondary text-lg leading-relaxed mb-8 italic">
                    "{testimonials[current].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-heading font-bold">
                        {testimonials[current].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-primary">
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm text-secondary">
                        {testimonials[current].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center 
                         hover:bg-accent hover:border-accent hover:text-white text-secondary transition-all duration-300"
                aria-label="Previous"
              >
                <HiChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-accent w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center 
                         hover:bg-accent hover:border-accent hover:text-white text-secondary transition-all duration-300"
                aria-label="Next"
              >
                <HiChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
