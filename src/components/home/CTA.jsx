import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import { HiArrowRight } from 'react-icons/hi'

export default function CTA() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Build Your Next Innovation?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Let's turn your vision into a scalable digital product. 
              Get in touch with our team and start your project today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Start Your Project <HiArrowRight />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white/20 text-white px-8 py-3 rounded-md font-medium 
                         transition-all duration-300 hover:bg-white hover:text-primary inline-flex items-center gap-2"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
