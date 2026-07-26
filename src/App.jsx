import { motion, useScroll, useSpring } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import { Preloader } from './components/Preloader'
import { Cursor } from './components/Cursor'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Categories } from './components/Categories'
import { Signature } from './components/Signature'
import { MenuList } from './components/MenuList'
import { Story } from './components/Story'
import { Opening } from './components/Opening'
import { Testimonials } from './components/Testimonials'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'
import { WhatsAppFab } from './components/WhatsAppFab'

export default function App() {
  useLenis()

  const { scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 220, damping: 34, restDelta: 0.001 })

  return (
    <>
      <Preloader />
      <Cursor />

      {/* Scroll progress rail */}
      <motion.div
        aria-hidden
        style={{ scaleX: bar }}
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gold"
      />

      <Nav />

      {/* Content is never gated behind an animation — the preloader is an opaque
          overlay on top of it, so a stalled transition can't blank the site. */}
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Signature />
        <MenuList />
        <Story />
        <Opening />
        <Testimonials />
        <Visit />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
