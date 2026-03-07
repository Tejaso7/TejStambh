import { useState } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight, HiClock } from 'react-icons/hi'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'contact@tejstambh.in', href: 'mailto:contact@tejstambh.in' },
  { icon: HiPhone, label: 'Phone', value: '+91 7447679060', href: 'tel:+917447679060' },
  { icon: HiLocationMarker, label: 'Location', value: 'Pune, India', href: null },
  { icon: HiClock, label: 'Hours', value: 'Mon - Fri, 9AM - 6PM IST', href: null },
]

const socials = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', budget: '', message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', company: '', budget: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">Contact</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              Let's Start a <span className="text-accent">Conversation</span>
            </h1>
            <p className="text-body max-w-2xl">
              Have a project in mind? We'd love to hear about it. Get in touch 
              and let's discuss how we can bring your vision to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                  <h2 className="heading-md mb-2">Send Us a Message</h2>
                  <p className="text-secondary text-sm mb-8">Fill out the form and we'll respond within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm 
                                   focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm 
                                   focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm 
                                   focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm 
                                   focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-secondary
                                 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="<1000">Less than $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="5000-15000">$5,000 - $15,000</option>
                        <option value="15000-50000">$15,000 - $50,000</option>
                        <option value="50000+">$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm resize-none
                                 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base">
                      Send Message <HiArrowRight />
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {/* Contact info */}
                  <div className="bg-white rounded-2xl p-8 border border-gray-100">
                    <h3 className="font-heading font-semibold text-lg mb-6">Contact Information</h3>
                    <div className="space-y-5">
                      {contactInfo.map((info) => (
                        <div key={info.label} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="text-accent" size={20} />
                          </div>
                          <div>
                            <span className="text-xs text-secondary">{info.label}</span>
                            {info.href ? (
                              <a href={info.href} className="block text-sm font-medium text-primary hover:text-accent transition-colors">
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-sm font-medium text-primary">{info.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social */}
                  <div className="bg-white rounded-2xl p-8 border border-gray-100">
                    <h3 className="font-heading font-semibold text-lg mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      {socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center 
                                   text-secondary hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                        >
                          <social.icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick CTA */}
                  <div className="bg-primary rounded-2xl p-8 text-white">
                    <h3 className="font-heading font-semibold text-lg mb-2">Prefer a Quick Call?</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Schedule a free 30-minute consultation to discuss your project.
                    </p>
                    <a href="tel:+917447679060" className="btn-primary text-sm w-full justify-center">
                      Call Now <HiArrowRight />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
