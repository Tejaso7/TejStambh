import { motion } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTA from '../components/home/CTA'
import {
  HiCode, HiDeviceMobile, HiCog, HiCloud,
  HiChat, HiMicrophone, HiEye, HiRefresh,
  HiSearchCircle, HiCurrencyDollar, HiShare, HiColorSwatch,
  HiServer, HiTerminal, HiCube
} from 'react-icons/hi'

const serviceCategories = [
  {
    title: 'Development',
    description: 'Full-stack development solutions from web apps to enterprise software.',
    services: [
      { icon: HiCode, name: 'Website Development', description: 'High-performance, responsive websites built with modern frameworks and best practices.' },
      { icon: HiDeviceMobile, name: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android.' },
      { icon: HiCog, name: 'Custom Software', description: 'Tailor-made software solutions designed for your specific business requirements.' },
      { icon: HiCloud, name: 'SaaS Platforms', description: 'Scalable SaaS products with subscription management, multi-tenancy, and analytics.' },
    ],
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent solutions that automate processes and enhance decision-making.',
    services: [
      { icon: HiChat, name: 'AI Chatbots', description: 'Smart conversational AI bots for customer support, lead generation, and engagement.' },
      { icon: HiMicrophone, name: 'Voice Bots', description: 'Natural language voice assistants for phone systems and smart devices.' },
      { icon: HiEye, name: 'Vision AI', description: 'Computer vision solutions for image recognition, quality inspection, and analytics.' },
      { icon: HiRefresh, name: 'Workflow Automation', description: 'End-to-end business process automation to eliminate manual tasks and reduce errors.' },
    ],
  },
  {
    title: 'Marketing',
    description: 'Data-driven marketing strategies that drive visibility and conversions.',
    services: [
      { icon: HiSearchCircle, name: 'SEO', description: 'Search engine optimization to boost organic visibility and drive qualified traffic.' },
      { icon: HiCurrencyDollar, name: 'Paid Ads', description: 'Strategic PPC campaigns across Google, Meta, and LinkedIn for maximum ROI.' },
      { icon: HiShare, name: 'Social Media Management', description: 'Content strategy, publishing, and community management across all platforms.' },
      { icon: HiColorSwatch, name: 'Branding', description: 'Complete brand identity design including logos, guidelines, and visual systems.' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Reliable, scalable infrastructure for modern applications.',
    services: [
      { icon: HiServer, name: 'Cloud Migration', description: 'Seamless migration of your applications and data to AWS, GCP, or Azure.' },
      { icon: HiTerminal, name: 'DevOps', description: 'CI/CD pipelines, containerization, and infrastructure as code for agile teams.' },
      { icon: HiCube, name: 'Scalable Architecture', description: 'Microservices, serverless, and event-driven architectures built for scale.' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">Our Services</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              Technology Solutions That <span className="text-accent">Drive Results</span>
            </h1>
            <p className="text-body max-w-2xl">
              From development to deployment, we offer comprehensive services to 
              help you build, scale, and grow your digital presence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.title}
          className={`section-padding ${catIndex % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}
        >
          <div className="container-custom">
            <ScrollReveal>
              <div className="mb-12">
                <span className="section-label">{String(catIndex + 1).padStart(2, '0')}</span>
                <h2 className="heading-lg mb-2">{category.title}</h2>
                <p className="text-body max-w-xl">{category.description}</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, index) => (
                <ScrollReveal key={service.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.06)' }}
                    className={`rounded-xl p-8 h-full border border-gray-100 group cursor-pointer ${
                      catIndex % 2 === 0 ? 'bg-white' : 'bg-light-gray'
                    }`}
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5
                                  group-hover:bg-accent transition-colors duration-300">
                      <service.icon className="text-accent group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{service.name}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA />
    </>
  )
}
