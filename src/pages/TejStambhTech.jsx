import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import {
  HiCode, HiDeviceMobile, HiCog, HiCloud, HiServer, HiTerminal, HiCube,
  HiGlobe, HiDatabase, HiShieldCheck, HiDesktopComputer, HiArrowRight,
  HiLightningBolt, HiRefresh, HiPuzzle, HiChartBar
} from 'react-icons/hi'

const techServices = [
  {
    icon: HiGlobe,
    title: 'Website Development',
    description: 'High-performance, responsive websites built with modern frameworks. From landing pages to complex web applications.',
    features: ['React / Next.js / Vue', 'Server-side rendering', 'Progressive Web Apps', 'Headless CMS integration', 'Performance optimization', 'SEO-friendly architecture'],
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with beautiful UIs and smooth performance.',
    features: ['React Native / Flutter', 'Native iOS (Swift)', 'Native Android (Kotlin)', 'Push notifications', 'Offline-first design', 'App Store optimization'],
  },
  {
    icon: HiCog,
    title: 'Custom Software Development',
    description: 'Tailor-made enterprise software solutions built to solve your unique business challenges.',
    features: ['Requirements analysis', 'System architecture', 'Agile development', 'Third-party integrations', 'Legacy modernization', 'Maintenance & support'],
  },
  {
    icon: HiCube,
    title: 'SaaS Platform Development',
    description: 'Scalable SaaS products with multi-tenancy, subscription billing, analytics dashboards, and user management.',
    features: ['Multi-tenant architecture', 'Stripe/Razorpay billing', 'Role-based access control', 'Usage analytics', 'Onboarding flows', 'API-first design'],
  },
  {
    icon: HiDesktopComputer,
    title: 'ERP & CRM Systems',
    description: 'Custom enterprise resource planning and customer relationship management systems tailored to your operations.',
    features: ['Inventory management', 'Sales pipeline', 'Contact management', 'Reporting & analytics', 'Workflow automation', 'Custom modules'],
  },
  {
    icon: HiDatabase,
    title: 'Database Design & Engineering',
    description: 'Robust database architecture, optimization, and migration for high-performance data-driven applications.',
    features: ['PostgreSQL / MySQL', 'MongoDB / DynamoDB', 'Redis caching', 'Database optimization', 'Data migration', 'Backup & recovery'],
  },
  {
    icon: HiPuzzle,
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs, webhooks, microservices communication, and third-party service integrations.',
    features: ['REST & GraphQL APIs', 'API gateway setup', 'OAuth & JWT auth', 'Rate limiting', 'API documentation', 'Webhook systems'],
  },
  {
    icon: HiCode,
    title: 'Frontend Engineering',
    description: 'Pixel-perfect, accessible, and performant frontend development with modern JavaScript frameworks.',
    features: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Component libraries', 'State management', 'Automated testing'],
  },
  {
    icon: HiServer,
    title: 'Backend Engineering',
    description: 'Scalable backend systems with microservices, event-driven architecture, and high-availability design.',
    features: ['Node.js / Python / Go', 'Microservices', 'Message queues', 'Event sourcing', 'CQRS patterns', 'Load balancing'],
  },
  {
    icon: HiCloud,
    title: 'Cloud Infrastructure (AWS / GCP / Azure)',
    description: 'Cloud architecture, migration, and managed infrastructure for reliability, scalability, and cost optimization.',
    features: ['Cloud architecture design', 'Multi-cloud strategy', 'Auto-scaling setup', 'Cost optimization', 'Disaster recovery', 'Security hardening'],
  },
  {
    icon: HiTerminal,
    title: 'DevOps & CI/CD',
    description: 'Infrastructure as code, containerization, continuous deployment pipelines, and monitoring for agile teams.',
    features: ['Docker & Kubernetes', 'GitHub Actions / GitLab CI', 'Terraform / Pulumi', 'Monitoring (Grafana)', 'Log management', 'Automated deployments'],
  },
  {
    icon: HiShieldCheck,
    title: 'Security & Compliance',
    description: 'Application security audits, penetration testing, GDPR compliance, and secure coding practices.',
    features: ['Security audits', 'Penetration testing', 'GDPR / SOC2 compliance', 'SSL/TLS setup', 'Vulnerability scanning', 'Data encryption'],
  },
  {
    icon: HiRefresh,
    title: 'Legacy System Modernization',
    description: 'Migrate and modernize outdated systems to modern tech stacks without disrupting business operations.',
    features: ['Tech stack migration', 'Monolith to microservices', 'Database migration', 'UI/UX redesign', 'Performance upgrade', 'Incremental rollout'],
  },
  {
    icon: HiChartBar,
    title: 'Quality Assurance & Testing',
    description: 'Comprehensive testing strategies including automated, manual, performance, and security testing.',
    features: ['Unit & integration tests', 'E2E testing (Cypress)', 'Performance testing', 'Mobile app testing', 'Accessibility testing', 'Test automation'],
  },
  {
    icon: HiLightningBolt,
    title: 'MVP & Rapid Prototyping',
    description: 'Launch your idea fast with minimum viable products — validated, tested, and market-ready in weeks.',
    features: ['2-4 week delivery', 'User validation', 'Core feature focus', 'Iterative development', 'Scalable foundation', 'Investor-ready demos'],
  },
]

const techStack = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Flutter'],
  Backend: ['Node.js', 'Python', 'Go', 'Java', 'Express', 'FastAPI', 'NestJS'],
  Database: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch'],
  Cloud: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'DigitalOcean'],
  DevOps: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
  Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
}

export default function TejStambhTech() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'rgba(37, 99, 235, 0.06)' }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'rgba(37, 99, 235, 0.04)' }} />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <HiLightningBolt className="text-white" size={28} />
              </div>
              <span className="font-heading text-2xl font-bold">
                TejStambh<span className="text-blue-600">.tech</span>
              </span>
            </div>
            <h1 className="heading-xl mb-6 max-w-4xl">
              Full-Stack <span className="text-blue-600">Technology Solutions</span> for Modern Businesses
            </h1>
            <p className="text-body max-w-2xl mb-10">
              Websites, mobile apps, custom software, SaaS platforms, cloud infrastructure, 
              DevOps — everything your business needs to build, scale, and succeed in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 inline-flex items-center gap-2">
                Start Your Project <HiArrowRight />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Tech Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Tech Services</span>
              <h2 className="heading-lg mb-4">Build Anything, At Any Scale</h2>
              <p className="text-body">
                From MVPs to enterprise systems — our full-stack engineering team delivers 
                robust, scalable technology solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(37,99,235,0.08)' }}
                  className="bg-white rounded-xl p-7 h-full border border-gray-100 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4
                                group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-secondary">
                        <span className="w-1 h-1 bg-blue-600 rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Our Stack</span>
              <h2 className="heading-lg">Technologies We Master</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Object.entries(techStack).map(([category, techs], catIdx) => (
              <ScrollReveal key={category} delay={catIdx * 0.08}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-heading font-semibold text-blue-600 mb-4 text-sm uppercase tracking-wider">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, backgroundColor: '#2563EB', color: '#fff' }}
                        className="px-3 py-1.5 bg-white text-secondary rounded-full text-xs font-medium
                                 border border-gray-200 cursor-default transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">How It Works</span>
              <h2 className="heading-lg">Our Development Process</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Discovery', 'Architecture', 'Development', 'Testing', 'Deployment', 'Support'].map((step, i) => (
              <ScrollReveal key={step} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="bg-white rounded-xl p-5 text-center border border-gray-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-sm">{step}</h3>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-lg text-white mb-6">Ready to Build Something Great?</h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-10">
                Whether it's an MVP, a mobile app, or a full enterprise platform — our tech 
                team has the expertise to bring it to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95 inline-flex items-center gap-2">
                  Start Your Project <HiArrowRight />
                </Link>
                <Link to="/pricing" className="border-2 border-white/30 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-blue-600 inline-flex items-center gap-2">
                  View Pricing
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
