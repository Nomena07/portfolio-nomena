import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Process from '../components/Process'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollAnimations from '../components/ScrollAnimations'

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
