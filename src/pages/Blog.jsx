import ScrollReveal from '../components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendar, HiUser, HiTag } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'How AI is Transforming Small Business Operations in 2026',
    excerpt: 'Discover how artificial intelligence is helping small businesses automate workflows, reduce costs, and compete with larger enterprises.',
    category: 'AI & Automation',
    author: 'Tejas Sawant',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    color: '#E63946',
  },
  {
    title: 'The Complete Guide to Building Scalable SaaS Platforms',
    excerpt: 'From architecture decisions to deployment strategies, learn everything you need to build a SaaS product that scales to millions of users.',
    category: 'Development',
    author: 'Tejas Sawant',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    color: '#1A1A1A',
  },
  {
    title: 'Why Every Business Needs a Cloud Migration Strategy',
    excerpt: 'Moving to the cloud isn\'t just about hosting — it\'s about agility, reliability, and cost optimization. Here\'s how to plan your migration.',
    category: 'Cloud',
    author: 'Tejas Sawant',
    date: 'Jan 30, 2026',
    readTime: '6 min read',
    color: '#333333',
  },
  {
    title: 'React vs Next.js: Choosing the Right Framework in 2026',
    excerpt: 'A detailed comparison of React and Next.js for modern web development, with real-world use cases and performance benchmarks.',
    category: 'Development',
    author: 'Tejas Sawant',
    date: 'Jan 18, 2026',
    readTime: '7 min read',
    color: '#E63946',
  },
  {
    title: 'SEO Strategies That Actually Work for Tech Companies',
    excerpt: 'Cut through the noise with proven SEO strategies specifically tailored for technology companies and SaaS businesses.',
    category: 'Marketing',
    author: 'Tejas Sawant',
    date: 'Jan 5, 2026',
    readTime: '5 min read',
    color: '#1A1A1A',
  },
  {
    title: 'The Rise of Voice AI: Building Intelligent Voice Assistants',
    excerpt: 'Voice AI is changing how businesses interact with customers. Learn about the technology behind modern voice assistants.',
    category: 'AI & Automation',
    author: 'Tejas Sawant',
    date: 'Dec 20, 2025',
    readTime: '6 min read',
    color: '#333333',
  },
]

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">Blog</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              Insights & <span className="text-accent">Resources</span>
            </h1>
            <p className="text-body max-w-2xl">
              Stay updated with the latest trends in technology, AI, development, 
              and digital marketing from the TejStambh team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 group cursor-pointer h-full flex flex-col"
                >
                  {/* Image area */}
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ backgroundColor: post.color + '08' }}
                  >
                    <span className="text-5xl font-heading font-bold opacity-10" style={{ color: post.color }}>
                      {post.title.charAt(0)}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h2 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-secondary pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <HiUser size={14} /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar size={14} /> {post.date}
                      </span>
                      <span className="ml-auto text-accent font-medium">{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="heading-lg text-white mb-4">Stay Updated</h2>
              <p className="text-gray-400 mb-8">
                Subscribe to our newsletter for the latest insights on technology, 
                AI, and digital innovation.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-md bg-white/10 border border-white/10 text-white 
                           placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe <HiArrowRight />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
