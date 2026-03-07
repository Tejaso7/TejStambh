import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import {
  HiSpeakerphone, HiSearchCircle, HiCurrencyDollar, HiShare,
  HiColorSwatch, HiPhotograph, HiFilm, HiPencilAlt, HiArrowRight,
  HiTrendingUp, HiUserGroup, HiChartBar, HiMail, HiGlobe,
  HiDocumentText, HiStar
} from 'react-icons/hi'

const digitalServices = [
  {
    icon: HiSearchCircle,
    title: 'Search Engine Optimization (SEO)',
    description: 'Dominate search rankings with comprehensive on-page, off-page, and technical SEO strategies.',
    features: ['Keyword research & strategy', 'On-page optimization', 'Technical SEO audits', 'Link building', 'Local SEO', 'Monthly reporting & analytics'],
  },
  {
    icon: HiCurrencyDollar,
    title: 'Google Ads (PPC)',
    description: 'Maximize ROI with data-driven Google Ads campaigns — Search, Display, Shopping, and YouTube.',
    features: ['Search campaigns', 'Display & remarketing', 'Shopping ads', 'YouTube ads', 'Conversion tracking', 'Bid optimization & A/B testing'],
  },
  {
    icon: HiShare,
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Targeted advertising on Meta platforms with advanced audience segmentation and creative strategies.',
    features: ['Facebook & Instagram ads', 'Lookalike audiences', 'Retargeting funnels', 'Carousel & video ads', 'Lead generation campaigns', 'Conversion API setup'],
  },
  {
    icon: HiUserGroup,
    title: 'Social Media Management',
    description: 'Complete social media presence management — content strategy, publishing, engagement, and growth.',
    features: ['Content calendar planning', 'Post creation & scheduling', 'Community management', 'Engagement strategy', 'Hashtag research', 'Growth analytics'],
  },
  {
    icon: HiTrendingUp,
    title: 'LinkedIn Marketing',
    description: 'B2B lead generation and thought leadership through targeted LinkedIn campaigns and content.',
    features: ['LinkedIn Ads', 'InMail campaigns', 'Company page management', 'Thought leadership content', 'Employee advocacy', 'Lead gen forms'],
  },
  {
    icon: HiPencilAlt,
    title: 'Content Marketing',
    description: 'Engage your audience with compelling blog posts, whitepapers, case studies, and content that converts.',
    features: ['Blog writing & strategy', 'Whitepapers & ebooks', 'Case studies', 'Infographics', 'Newsletter content', 'Content distribution'],
  },
  {
    icon: HiColorSwatch,
    title: 'Brand Identity & Design',
    description: 'Complete brand identity creation — logos, brand guidelines, visual systems, and brand positioning.',
    features: ['Logo design', 'Brand guidelines', 'Color palette & typography', 'Business card & stationery', 'Brand positioning', 'Visual identity system'],
  },
  {
    icon: HiPhotograph,
    title: 'Creative & Graphic Design',
    description: 'Eye-catching visual content for social media, advertisements, presentations, and marketing materials.',
    features: ['Social media graphics', 'Ad creatives', 'Pitch decks', 'Brochures & flyers', 'Banner design', 'Packaging design'],
  },
  {
    icon: HiFilm,
    title: 'Video Production & Reels',
    description: 'Professional video content for marketing — product videos, reels, testimonials, and animations.',
    features: ['Product videos', 'Instagram Reels & TikTok', 'Testimonial videos', 'Motion graphics', 'Video editing', 'YouTube content'],
  },
  {
    icon: HiChartBar,
    title: 'Lead Generation',
    description: 'Multi-channel lead generation strategies that fill your sales pipeline with qualified prospects.',
    features: ['Landing page creation', 'Lead magnet development', 'Funnel optimization', 'A/B testing', 'CRM integration', 'Lead scoring & nurturing'],
  },
  {
    icon: HiMail,
    title: 'Email Marketing',
    description: 'High-converting email campaigns — newsletters, drip sequences, promotional emails, and automation.',
    features: ['Email template design', 'Drip campaigns', 'Segmentation', 'A/B testing', 'Automation workflows', 'Deliverability optimization'],
  },
  {
    icon: HiGlobe,
    title: 'Influencer Marketing',
    description: 'Connect with the right influencers to amplify your brand reach and build trust with your audience.',
    features: ['Influencer identification', 'Campaign strategy', 'Content collaboration', 'Performance tracking', 'Micro & macro influencers', 'ROI reporting'],
  },
  {
    icon: HiDocumentText,
    title: 'Copywriting',
    description: 'Persuasive copy for websites, ads, emails, and landing pages that drives action and conversions.',
    features: ['Website copy', 'Ad copywriting', 'Email copy', 'Landing page copy', 'Product descriptions', 'Taglines & slogans'],
  },
  {
    icon: HiStar,
    title: 'Online Reputation Management',
    description: 'Monitor, manage, and improve your brand\'s online reputation across review platforms and social media.',
    features: ['Review monitoring', 'Response management', 'Negative review mitigation', 'Brand mention tracking', 'Crisis management', 'Review generation'],
  },
  {
    icon: HiChartBar,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights with custom dashboards, conversion tracking, and actionable marketing intelligence.',
    features: ['Google Analytics setup', 'Custom dashboards', 'Conversion tracking', 'Attribution modeling', 'Monthly performance reports', 'Competitor analysis'],
  },
]

const platforms = [
  { name: 'Google Ads', category: 'Ads' },
  { name: 'Meta Business Suite', category: 'Ads' },
  { name: 'LinkedIn Ads', category: 'Ads' },
  { name: 'Google Analytics', category: 'Analytics' },
  { name: 'Google Search Console', category: 'SEO' },
  { name: 'Ahrefs / SEMrush', category: 'SEO' },
  { name: 'Canva Pro', category: 'Design' },
  { name: 'Adobe Creative Suite', category: 'Design' },
  { name: 'Figma', category: 'Design' },
  { name: 'Mailchimp / Brevo', category: 'Email' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Hootsuite / Buffer', category: 'Social' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Hotjar / Clarity', category: 'Analytics' },
  { name: 'Notion / ClickUp', category: 'Collaboration' },
]

const packages = [
  {
    name: 'Starter Digital',
    price: '$499',
    period: '/month',
    features: ['Social media management (3 platforms)', '12 posts/month', 'Basic SEO optimization', 'Monthly performance report', 'Hashtag strategy', 'Community engagement'],
  },
  {
    name: 'Growth Digital',
    price: '$1,499',
    period: '/month',
    features: ['Social media management (5 platforms)', '24 posts/month + Stories/Reels', 'Google Ads management', 'Meta Ads management', 'SEO (on-page + off-page)', 'Content writing (4 blogs)', 'Lead generation setup', 'Bi-weekly reports'],
    featured: true,
  },
  {
    name: 'Enterprise Digital',
    price: 'Custom',
    period: 'contact us',
    features: ['All Growth features', 'LinkedIn Ads', 'Email marketing automation', 'Video content production', 'Influencer collaboration', 'Brand identity design', 'Dedicated account manager', 'Weekly strategy calls', 'Complete analytics suite'],
  },
]

export default function TejStambhDigital() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'rgba(230, 57, 70, 0.06)' }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'rgba(230, 57, 70, 0.04)' }} />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <HiSpeakerphone className="text-white" size={28} />
              </div>
              <span className="font-heading text-2xl font-bold">
                TejStambh<span className="text-accent">.digital</span>
              </span>
            </div>
            <h1 className="heading-xl mb-6 max-w-4xl">
              <span className="text-accent">Digital Marketing</span> That Drives Real Results
            </h1>
            <p className="text-body max-w-2xl mb-10">
              Social media management, Google & Meta ads, SEO, creative design, lead generation, 
              branding — everything to grow your business online. Measurable results, transparent pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Get Digital Strategy <HiArrowRight />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                See Results
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
              <span className="section-label">Digital Services</span>
              <h2 className="heading-lg mb-4">Complete Digital Marketing Arsenal</h2>
              <p className="text-body">
                Every digital marketing service you need — from strategy to execution to optimization.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(230,57,70,0.08)' }}
                  className="bg-white rounded-xl p-7 h-full border border-gray-100 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4
                                group-hover:bg-accent transition-colors duration-300">
                    <service.icon className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-secondary">
                        <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
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

      {/* Platforms & Tools */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Platforms & Tools</span>
              <h2 className="heading-lg">Tools We Work With</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {platforms.map((platform) => (
                <motion.span
                  key={platform.name}
                  whileHover={{ scale: 1.08, backgroundColor: '#E63946', color: '#fff' }}
                  className="px-5 py-2.5 bg-red-50 text-accent rounded-full text-sm font-medium
                           border border-red-100 cursor-default transition-colors"
                >
                  {platform.name}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">Pricing</span>
              <h2 className="heading-lg mb-4">Digital Marketing Packages</h2>
              <p className="text-body">Flexible monthly plans to match your growth goals.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`rounded-xl p-8 h-full flex flex-col border ${
                    pkg.featured
                      ? 'bg-primary text-white border-primary shadow-2xl shadow-black/20 relative'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs 
                                   font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading font-semibold text-lg mb-2">{pkg.name}</h3>
                  <div className="mb-1">
                    <span className="text-4xl font-heading font-bold">{pkg.price}</span>
                    <span className={`text-sm ml-2 ${pkg.featured ? 'text-gray-400' : 'text-secondary'}`}>
                      {pkg.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 mt-6 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1">✓</span>
                        <span className={pkg.featured ? 'text-gray-300' : 'text-secondary'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 rounded-md font-medium transition-all duration-300 block
                      ${pkg.featured
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

      {/* Results */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Our Impact</span>
              <h2 className="heading-lg">Results That Speak</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '500%', label: 'Average ROI on Ads' },
              { value: '10M+', label: 'Social Impressions' },
              { value: '50K+', label: 'Leads Generated' },
              { value: '200+', label: 'Campaigns Managed' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl font-heading font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-secondary mt-1">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-lg text-white mb-6">Ready to Grow Your Digital Presence?</h2>
              <p className="text-red-200 text-lg leading-relaxed mb-10">
                Get a free digital audit and a custom growth strategy tailored for your business. 
                Let's turn clicks into customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-accent px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95 inline-flex items-center gap-2">
                  Get Free Audit <HiArrowRight />
                </Link>
                <Link to="/pricing" className="border-2 border-white/30 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-accent inline-flex items-center gap-2">
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
