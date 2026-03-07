import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiLightningBolt, HiChip, HiSpeakerphone } from 'react-icons/hi'

const brands = [
  {
    name: 'TejStambh',
    suffix: '.ai',
    path: '/ai',
    icon: HiChip,
    color: '#7C3AED',
    bg: 'bg-purple-600',
    hoverBg: 'hover:bg-purple-700',
    description: 'AI Solutions',
  },
  {
    name: 'TejStambh',
    suffix: '.tech',
    path: '/tech',
    icon: HiLightningBolt,
    color: '#2563EB',
    bg: 'bg-blue-600',
    hoverBg: 'hover:bg-blue-700',
    description: 'Technology',
  },
  {
    name: 'TejStambh',
    suffix: '.digital',
    path: '/digital',
    icon: HiSpeakerphone,
    color: '#E63946',
    bg: 'bg-accent',
    hoverBg: 'hover:bg-accent-dark',
    description: 'Digital Marketing',
  },
]

export default function TopBar() {
  const location = useLocation()

  return (
    <div className="bg-primary text-white">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-1 sm:gap-2 py-2">
          <span className="hidden sm:block text-xs text-gray-400 mr-2">Explore:</span>
          {brands.map((brand) => {
            const isActive = location.pathname === brand.path
            return (
              <Link
                key={brand.path}
                to={brand.path}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium 
                    transition-all duration-300 cursor-pointer border
                    ${isActive
                      ? `${brand.bg} text-white border-transparent shadow-lg`
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                    }`}
                >
                  <brand.icon size={14} className={isActive ? 'text-white' : ''} />
                  <span className="font-heading">
                    <span className="hidden sm:inline">TejStambh</span>
                    <span className="sm:hidden">TS</span>
                    <span className="font-bold" style={{ color: isActive ? 'white' : brand.color }}>
                      {brand.suffix}
                    </span>
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
