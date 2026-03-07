import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Clients from '../components/home/Clients'
import Portfolio from '../components/home/Portfolio'
import WhyChoose from '../components/home/WhyChoose'
import Process from '../components/home/Process'
import Testimonials from '../components/home/Testimonials'
import Pricing from '../components/home/Pricing'
import CTA from '../components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  )
}
