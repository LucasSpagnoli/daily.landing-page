import { useScrollReveal } from './hooks/useScrollReveal.ts'
import { Header } from './components/header/Header.tsx'
import { Hero } from './components/hero/Hero.tsx'
import { TrustStrip } from './components/trust/TrustStrip.tsx'
import { Benefits } from './components/benefits/Benefits.tsx'
import { ContrastSection } from './components/contrast/ContrastSection.tsx'
import { Process } from './components/process/Process.tsx'
import { PricingSection } from './components/pricing/PricingSection.tsx'
import { FaqSection } from './components/faq/FaqSection.tsx'
import { Footer } from './components/footer/Footer.tsx'
import { MobileCta } from './components/footer/MobileCta.tsx'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-black font-sans selection:bg-[#D4AF37] selection:text-black">
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <TrustStrip />
        <Benefits />
        <ContrastSection />
        <Process />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileCta />
    </div>
  )
}

export default App
