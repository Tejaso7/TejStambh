import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTA from '../components/home/CTA'
import { HiLightningBolt, HiUserGroup, HiGlobe, HiHeart, HiChip, HiCode, HiSpeakerphone, HiDatabase, HiServer, HiCube, HiShieldCheck } from 'react-icons/hi'

/* ── Leadership ── */
const leadership = [
  {
    name: 'Tejas Sawant',
    role: 'Founder & Chief Executive Officer',
    initials: 'TS',
    color: '#E63946',
    bio: 'Visionary technologist and entrepreneur with deep expertise in AI, full-stack development, and scalable architecture. Tejas founded TejStambh to bridge the gap between innovative ideas and world-class technology solutions.',
  },
  {
    name: 'Tushar Sawant',
    role: 'Chief Technology Officer',
    initials: 'TS',
    color: '#2563EB',
    bio: 'Seasoned engineering leader responsible for the overall technology vision, architecture decisions, and R&D roadmap. Tushar drives innovation across all three verticals — AI, Tech, and Digital.',
  },
]

/* ── Team by Division ── */
const teamDivisions = [
  {
    division: 'Artificial Intelligence',
    tag: 'TejStambh.ai',
    tagColor: '#7C3AED',
    icon: HiChip,
    members: [
      { name: 'Atharv Tandale', role: 'AI Lead' },
      { name: 'Prashant Upadhyay', role: 'AI Architect' },
      { name: 'Neha Shinde', role: 'AI Innovator' },
      { name: 'Prathmesh Phadthare', role: 'AI Innovator' },
      { name: 'Prathmesh Lohar', role: 'AI Automation Specialist' },
      { name: 'Yash Kotia', role: 'AI Researcher' },
    ],
  },
  {
    division: 'Engineering & Development',
    tag: 'TejStambh.tech',
    tagColor: '#2563EB',
    icon: HiCode,
    members: [
      { name: 'Shubham Lingyat', role: 'Full Stack Developer' },
      { name: 'Aniket Kshirsagar', role: 'Frontend Developer' },
      { name: 'Ritesh J', role: 'Mobile App Developer' },
    ],
  },
  {
    division: 'Data & Intelligence',
    tag: 'TejStambh.ai',
    tagColor: '#7C3AED',
    icon: HiDatabase,
    members: [
      { name: 'Suraj Jorwar', role: 'Data Scientist & BI Specialist' },
      { name: 'Pratap Pawar', role: 'Data Analyst' },
    ],
  },
  {
    division: 'Infrastructure & Operations',
    tag: 'TejStambh.tech',
    tagColor: '#2563EB',
    icon: HiServer,
    members: [
      { name: 'Rushikesh Kamble', role: 'DevOps Lead' },
      { name: 'Pritviraj Magar', role: 'Head of Site Reliability Engineering' },
    ],
  },
  {
    division: 'Enterprise Systems',
    tag: 'TejStambh.tech',
    tagColor: '#2563EB',
    icon: HiCube,
    members: [
      { name: 'Aditya Patil', role: 'SAP Specialist' },
    ],
  },
  {
    division: 'Digital & Design',
    tag: 'TejStambh.digital',
    tagColor: '#E63946',
    icon: HiSpeakerphone,
    members: [
      { name: 'Trupti Shinde', role: 'Head of Digital' },
      { name: 'Shital Sawant', role: 'Digital Marketing Lead' },
      { name: 'Rudra Tavre', role: 'Head of Graphics & Design' },
    ],
  },
  {
    division: 'Quality Assurance',
    tag: 'TejStambh.tech',
    tagColor: '#2563EB',
    icon: HiShieldCheck,
    members: [
      { name: 'Shivanji Pawar', role: 'Senior QA Engineer' },
      { name: 'Akshay Pawar', role: 'QA Lead' },
    ],
  },
]

const values = [
  { icon: HiLightningBolt, title: 'Innovation First', description: 'We push boundaries with emerging technologies to deliver future-ready solutions.' },
  { icon: HiUserGroup, title: 'Client Partnership', description: 'We treat every client as a partner, deeply invested in their success.' },
  { icon: HiGlobe, title: 'Global Standards', description: 'World-class quality in every product, adhering to international best practices.' },
  { icon: HiHeart, title: 'Passion Driven', description: 'Our team is fueled by genuine passion for technology and problem-solving.' },
]

const milestones = [
  { year: '2023', event: 'TejStambh founded in Pune by Tejas Sawant' },
  { year: '2023', event: 'First 5 client projects delivered successfully' },
  { year: '2024', event: 'Expanded team and launched AI automation services' },
  { year: '2024', event: 'Reached 30+ clients across multiple industries' },
  { year: '2025', event: 'Launched SaaS product development vertical' },
  { year: '2026', event: 'Scaling operations with enterprise partnerships' },
]

/* ── Helper: get initials ── */
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2)
}

/* ── Helper: deterministic color from name ── */
const memberColors = ['#E63946', '#2563EB', '#7C3AED', '#059669', '#D97706', '#6366F1', '#0891B2', '#DC2626']
function getMemberColor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return memberColors[Math.abs(hash) % memberColors.length]
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <span className="section-label">About Us</span>
            <h1 className="heading-xl mb-6 max-w-3xl">
              The <span className="text-accent">Pillar of Innovation</span> for Modern Businesses
            </h1>
            <p className="text-body max-w-2xl mb-0">
              Founded in 2023 in Pune, India, TejStambh is a modern technology and AI innovation 
              agency helping businesses transform ideas into scalable digital products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="section-label">Our Story</span>
              <h2 className="heading-lg mb-6">Built by a Builder, for Builders</h2>
              <p className="text-body mb-4">
                TejStambh was founded by <strong>Tejas Sawant</strong> with a clear mission: to bridge 
                the gap between innovative ideas and scalable technology solutions. Starting from a 
                small workspace in Pune, we have grown into a full-service technology partner trusted 
                by businesses across multiple industries.
              </p>
              <p className="text-body mb-6">
                Our name "TejStambh" means "Pillar of Light" — symbolizing our commitment to being 
                the foundation upon which businesses build their digital future. We combine deep 
                technical expertise with a genuine passion for innovation.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">50+</div>
                  <div className="text-sm text-secondary">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">30+</div>
                  <div className="text-sm text-secondary">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">20+</div>
                  <div className="text-sm text-secondary">Team Members</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'TejStambh.ai', color: '#7C3AED', path: '/ai', count: '8', desc: 'AI Experts' },
                  { label: 'TejStambh.tech', color: '#2563EB', path: '/tech', count: '8', desc: 'Engineers' },
                  { label: 'TejStambh.digital', color: '#E63946', path: '/digital', count: '3', desc: 'Creatives' },
                ].map((div) => (
                  <Link key={div.label} to={div.path}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                      className="bg-white rounded-xl p-5 border border-gray-100 text-center cursor-pointer"
                    >
                      <div className="text-2xl font-heading font-bold" style={{ color: div.color }}>{div.count}</div>
                      <div className="text-xs text-secondary mt-1">{div.desc}</div>
                      <div className="text-[10px] font-semibold mt-2 px-2 py-1 rounded-full" style={{ color: div.color, backgroundColor: div.color + '12' }}>
                        {div.label}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Leadership Crew ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">Leadership</span>
              <h2 className="heading-lg mb-4">Our Leadership Crew</h2>
              <p className="text-body">The people steering TejStambh's vision and strategy.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <ScrollReveal key={leader.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  className="bg-light-gray rounded-2xl p-8 border border-gray-100 group"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: leader.color }}
                    >
                      <span className="text-white font-heading font-bold text-2xl">{leader.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-0.5">{leader.name}</h3>
                      <p className="text-sm font-medium mb-3" style={{ color: leader.color }}>{leader.role}</p>
                      <p className="text-secondary text-sm leading-relaxed">{leader.bio}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Team (by Division) ─── */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">Our People</span>
              <h2 className="heading-lg mb-4">The Ones Who Make It Happen</h2>
              <p className="text-body">A multi-disciplinary team of 20+ innovators across AI, engineering, and digital.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {teamDivisions.map((div, divIdx) => (
              <ScrollReveal key={div.division} delay={divIdx * 0.06}>
                <div>
                  {/* Division header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: div.tagColor + '15' }}>
                      <div.icon size={22} style={{ color: div.tagColor }} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{div.division}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ color: div.tagColor, backgroundColor: div.tagColor + '12' }}>
                        {div.tag}
                      </span>
                    </div>
                  </div>

                  {/* Members grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {div.members.map((member, memIdx) => {
                      const color = getMemberColor(member.name)
                      return (
                        <motion.div
                          key={member.name}
                          whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }}
                          className="bg-white rounded-xl p-5 text-center border border-gray-100 group cursor-default"
                        >
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: color + '15' }}
                          >
                            <span className="font-heading font-bold text-sm" style={{ color }}>{getInitials(member.name)}</span>
                          </div>
                          <h4 className="font-heading font-semibold text-sm leading-tight mb-1">{member.name}</h4>
                          <p className="text-xs text-secondary leading-snug">{member.role}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">Our Values</span>
              <h2 className="heading-lg mb-4">What Drives Us</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-xl bg-light-gray border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4
                                group-hover:bg-accent transition-colors duration-300">
                    <value.icon className="text-accent group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">Our Journey</span>
              <h2 className="heading-lg">Milestones</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {milestones.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 flex-1 bg-accent/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-accent text-sm font-semibold">{item.year}</span>
                    <p className="text-secondary mt-1">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
