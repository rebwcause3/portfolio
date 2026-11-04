import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import CaseStudies from './components/CaseStudies'
import AiInnovation from './components/AiInnovation'
import CredentialsAndSpeaking from './components/CredentialsAndSpeaking'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Expertise />
        <CaseStudies />
        <AiInnovation />
        <CredentialsAndSpeaking />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
