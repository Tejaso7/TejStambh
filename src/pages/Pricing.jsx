import ScrollReveal from '../components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheck, HiArrowRight } from 'react-icons/hi'

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: 'per project',
    description: 'Perfect for startups and small businesses getting started with their digital presence.',
    features: [
      'Single page website or landing page',
      'Responsive mobile-first design',
      'Basic SEO setup & optimization',
      'Contact form integration',
      'Social media integration',
      '1 month post-launch support',
      '2 revision rounds',
      'Analytics dashboard setup',
    ],
    notIncluded: [
      'Custom backend development',
      'AI integrations',
      'Dedicated project manager',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$4,999',
    period: 'per project',
    description: 'Ideal for growing businesses that need a feature-rich digital product.',
    features: [
      'Multi-page website or web application',
      'Custom UI/UX design',
      'CMS integration (Headless CMS)',
      'Advanced SEO & analytics',
      'Third-party API integrations',
      'Database design & implementation',
      '3 months post-launch support',
      '5 revision rounds',
      'Performance optimization',
      'Email notification system',
    ],
    notIncluded: [
      'AI integrations',
      'Unlimited revisions',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Full-scale solutions for enterprises with complex technical requirements.',
    features: [
      'Custom software / SaaS development',
      'AI & automation integration',
      'Cloud infrastructure setup (AWS/GCP)',
      'Dedicated project manager',
      'Unlimited revisions',
      '12 months premium support',
      'Priority response time (< 2 hours)',
      'Scalable microservices architecture',
      'CI/CD pipeline setup',
      'Security audit & compliance',
      'Team training & documentation',
      'White-label solutions available',
    ],
    notIncluded: [],
    featured: false,
  },
]

const faqs = [
  {
    q: 'How do I get started?',
    a: 'Simply reach out through our contact form or book a consultation call. We\'ll discuss your project requirements and recommend the best plan for your needs.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely! You can upgrade your plan at any time. We\'ll adjust the scope and deliverables to match your growing needs.',
  },
  {
    q: 'Do you offer custom pricing?',
    a: 'Yes, our Enterprise plan is fully customizable. We also offer custom quotes for unique projects that don\'t fit standard plans.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers, credit cards, and PayPal. Payment is typically split into milestones tied to project deliverables.',
  },
  {
    q: 'What if I\'m not satisfied with the result?',
    a: 'Every plan includes revision rounds to ensure you\'re happy. We work closely with you throughout the project to align with your vision.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">Pricing</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              Simple, <span className="text-accent">Transparent</span> Pricing
            </h1>
            <p className="text-body max-w-2xl">
              Choose the plan that fits your project. No hidden fees, no surprises.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
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
                        <HiCheck className="text-accent mt-0.5 flex-shrink-0" size={18} />
                        <span className={plan.featured ? 'text-gray-300' : 'text-secondary'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 rounded-md font-medium transition-all duration-300 block
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

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">FAQ</span>
              <h2 className="heading-lg">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-light-gray rounded-xl p-6 border border-gray-100">
                  <h3 className="font-heading font-semibold mb-2">{faq.q}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
