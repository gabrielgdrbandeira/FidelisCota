import Hero from '@/components/Hero'
import About from '@/components/About'
import PracticeAreas from '@/components/PracticeAreas'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Contact />
    </div>
  )
}

