import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheck, HiArrowRight } from 'react-icons/hi'

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: 'per project',
    description: 'Perfect for startups and small businesses getting started.',
    features: [
      'Single page website or landing page',
      'Responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month support',
      '2 revision rounds',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$4,999',
    period: 'per project',
    description: 'Ideal for growing businesses that need advanced features.',
    features: [
      'Multi-page website or web app',
      'Custom UI/UX design',
      'CMS integration',
      'Advanced SEO & analytics',
      'API integrations',
      '3 months support',
      '5 revision rounds',
      'Performance optimization',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Full-scale solutions for enterprises with complex requirements.',
    features: [
      'Custom software / SaaS development',
      'AI & automation integration',
      'Cloud infrastructure setup',
      'Dedicated project manager',
      'Unlimited revisions',
      '12 months support',
      'Priority response time',
      'Scalable architecture',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Pricing</span>
            <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
            <p className="text-body">
              Flexible plans designed to match your project scope and business goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`rounded-xl p-8 h-full flex flex-col border ${
                  plan.featured
                    ? 'bg-primary text-white border-primary shadow-2xl shadow-black/20 relative'
                    : 'bg-white border-gray-100'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs 
                                 font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-semibold text-lg mb-2">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-heading font-bold">{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.featured ? 'text-gray-400' : 'text-secondary'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-400' : 'text-secondary'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <HiCheck className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-accent' : 'text-accent'}`} size={18} />
                      <span className={plan.featured ? 'text-gray-300' : 'text-secondary'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 rounded-md font-medium transition-all duration-300 
                    ${plan.featured
                      ? 'bg-accent text-white hover:bg-accent-dark'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                >
                  Get Started <HiArrowRight className="inline ml-1" />
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
