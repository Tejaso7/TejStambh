import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

const footerLinks = {
  Services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'AI & Automation', path: '/services' },
    { name: 'Cloud Infrastructure', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ],
  Portfolio: [
    { name: 'Intermost', path: '/portfolio' },
    { name: 'Access Mails', path: '/portfolio' },
    { name: 'RyRaah', path: '/portfolio' },
    { name: 'Ombase', path: '/portfolio' },
    { name: 'Nikam Interior', path: '/portfolio' },
  ],
}

const socials = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src="/assets/logo/tejstambh-logo.png" alt="TejStambh" className="h-10 w-auto" />
              <span className="text-xl font-heading font-bold text-white">
                Tej<span className="text-accent">Stambh</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Pillar of Innovations — Transforming ideas into scalable digital products 
              through AI, development, and automation.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="mailto:contact@tejstambh.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                <FiMail className="text-accent" /> contact@tejstambh.in
              </a>
              <a href="tel:+917447679060" className="flex items-center gap-2 hover:text-accent transition-colors">
                <FiPhone className="text-accent" /> +91 7447679060
              </a>
              <span className="flex items-center gap-2">
                <FiMapPin className="text-accent" /> Pune, India
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TejStambh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center 
                           text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
