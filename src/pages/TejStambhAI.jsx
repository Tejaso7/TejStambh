import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTA from '../components/home/CTA'
import {
  HiChat, HiMicrophone, HiEye, HiRefresh, HiChip, HiLightningBolt,
  HiDatabase, HiDocumentText, HiShieldCheck, HiUserGroup, HiArrowRight,
  HiCube, HiPuzzle, HiSearchCircle, HiPhotograph
} from 'react-icons/hi'

const aiServices = [
  {
    icon: HiChat,
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI for customer support, lead qualification, sales automation, and 24/7 engagement across web, WhatsApp, and social platforms.',
    features: ['GPT-powered conversations', 'Multi-language support', 'CRM integration', 'Lead scoring', 'Sentiment analysis'],
  },
  {
    icon: HiMicrophone,
    title: 'Voice Bots & Voice AI',
    description: 'Natural language voice assistants for IVR systems, call centers, smart devices, and hands-free business operations.',
    features: ['Speech-to-text', 'Text-to-speech', 'Call routing', 'Voice authentication', 'Real-time transcription'],
  },
  {
    icon: HiEye,
    title: 'Vision AI & Computer Vision',
    description: 'Advanced image and video analysis for quality inspection, object detection, facial recognition, and visual search.',
    features: ['Object detection', 'Image classification', 'OCR & document parsing', 'Facial recognition', 'Video analytics'],
  },
  {
    icon: HiRefresh,
    title: 'Workflow Automation',
    description: 'End-to-end business process automation using AI to eliminate repetitive tasks, reduce errors, and boost productivity.',
    features: ['RPA integration', 'Smart document processing', 'Email automation', 'Data entry automation', 'Approval workflows'],
  },
  {
    icon: HiLightningBolt,
    title: 'Predictive Analytics',
    description: 'Machine learning models for demand forecasting, risk assessment, customer churn prediction, and business intelligence.',
    features: ['Sales forecasting', 'Customer segmentation', 'Risk modeling', 'Trend analysis', 'Real-time dashboards'],
  },
  {
    icon: HiDatabase,
    title: 'AI Data Engineering',
    description: 'Data pipeline design, data lake architecture, and ML-ready data infrastructure for scalable AI applications.',
    features: ['ETL pipelines', 'Data lake setup', 'Feature engineering', 'Data quality monitoring', 'Real-time streaming'],
  },
  {
    icon: HiDocumentText,
    title: 'Natural Language Processing',
    description: 'Text analysis, content generation, summarization, translation, and intelligent document processing.',
    features: ['Text summarization', 'Sentiment analysis', 'Named entity recognition', 'Language translation', 'Content generation'],
  },
  {
    icon: HiPuzzle,
    title: 'AI Integration & APIs',
    description: 'Integrate AI capabilities into your existing systems with custom APIs, SDKs, and plug-and-play AI modules.',
    features: ['OpenAI/GPT integration', 'Custom model APIs', 'Webhook automation', 'Third-party AI connectors', 'Microservices architecture'],
  },
  {
    icon: HiSearchCircle,
    title: 'Recommendation Engines',
    description: 'Personalized recommendation systems for e-commerce, content platforms, and user engagement optimization.',
    features: ['Collaborative filtering', 'Content-based filtering', 'Hybrid models', 'A/B testing', 'Real-time personalization'],
  },
  {
    icon: HiShieldCheck,
    title: 'AI Security & Fraud Detection',
    description: 'AI-powered anomaly detection, fraud prevention, and cybersecurity threat analysis for enterprise protection.',
    features: ['Anomaly detection', 'Transaction monitoring', 'Behavioral analysis', 'Threat intelligence', 'Automated alerts'],
  },
  {
    icon: HiPhotograph,
    title: 'Generative AI Solutions',
    description: 'Custom generative AI applications for content creation, image generation, code assistance, and creative automation.',
    features: ['Image generation', 'Text-to-video', 'Code generation', 'Creative copywriting', 'Design automation'],
  },
  {
    icon: HiUserGroup,
    title: 'AI Consulting & Strategy',
    description: 'Expert guidance on AI adoption roadmap, technology selection, team training, and ROI-driven implementation.',
    features: ['AI readiness assessment', 'Tech stack selection', 'POC development', 'Team training', 'Ongoing optimization'],
  },
]

const aiStack = [
  'Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face',
  'Scikit-learn', 'FastAPI', 'Docker', 'Kubernetes', 'AWS SageMaker', 'Google Vertex AI',
  'Pinecone', 'ChromaDB', 'Redis', 'PostgreSQL', 'Apache Kafka', 'Airflow',
]

const useCases = [
  { industry: 'Healthcare', example: 'AI-powered diagnosis assistance and patient triage chatbots' },
  { industry: 'E-Commerce', example: 'Personalized product recommendations and dynamic pricing' },
  { industry: 'Finance', example: 'Fraud detection systems and automated risk assessment' },
  { industry: 'Manufacturing', example: 'Quality inspection using computer vision and predictive maintenance' },
  { industry: 'Education', example: 'Adaptive learning platforms and automated grading systems' },
  { industry: 'Real Estate', example: 'AI property valuation and virtual tour generation' },
  { industry: 'Logistics', example: 'Route optimization and demand forecasting' },
  { industry: 'Customer Service', example: 'Multi-channel AI support bots with 90% resolution rate' },
]

export default function TejStambhAI() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'rgba(124, 58, 237, 0.06)' }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'rgba(124, 58, 237, 0.04)' }} />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <HiChip className="text-white" size={28} />
              </div>
              <span className="font-heading text-2xl font-bold">
                TejStambh<span className="text-purple-600">.ai</span>
              </span>
            </div>
            <h1 className="heading-xl mb-6 max-w-4xl">
              AI-Powered Solutions for the{' '}
              <span className="text-purple-600">Future of Business</span>
            </h1>
            <p className="text-body max-w-2xl mb-10">
              Our dedicated AI division builds intelligent, scalable AI systems — from 
              conversational chatbots to predictive analytics to generative AI. We help 
              businesses automate, predict, and innovate with artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20 active:scale-95 inline-flex items-center gap-2">
                Get AI Consultation <HiArrowRight />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View AI Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-4 block">AI Services</span>
              <h2 className="heading-lg mb-4">Everything AI, Under One Roof</h2>
              <p className="text-body">
                From chatbots to computer vision, from NLP to generative AI — our AI team 
                delivers end-to-end intelligent solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(124,58,237,0.08)' }}
                  className="bg-white rounded-xl p-7 h-full border border-gray-100 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4
                                group-hover:bg-purple-600 transition-colors duration-300">
                    <service.icon className="text-purple-600 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-secondary">
                        <span className="w-1 h-1 bg-purple-600 rounded-full flex-shrink-0" />
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
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Tech Stack</span>
              <h2 className="heading-lg">AI Technologies We Use</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {aiStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.08, backgroundColor: '#7C3AED', color: '#fff' }}
                  className="px-5 py-2.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium 
                           border border-purple-100 cursor-default transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Use Cases</span>
              <h2 className="heading-lg">AI Across Industries</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc, index) => (
              <ScrollReveal key={uc.industry} delay={index * 0.06}>
                <motion.div whileHover={{ y: -4 }} className="bg-white rounded-xl p-6 border border-gray-100 h-full">
                  <h3 className="font-heading font-semibold text-purple-600 mb-2">{uc.industry}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{uc.example}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-lg text-white mb-6">Ready to Integrate AI Into Your Business?</h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-10">
                Let our AI specialists build intelligent solutions that automate your workflows, 
                delight your customers, and drive measurable results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95 inline-flex items-center gap-2">
                  Start AI Project <HiArrowRight />
                </Link>
                <Link to="/portfolio" className="border-2 border-white/30 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-purple-600 inline-flex items-center gap-2">
                  View Case Studies
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
