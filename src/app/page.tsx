import { About } from '@/components/About'
import { Book } from '@/components/Book'
import { Consultation } from '@/components/Consultation'
import { ContactPanel } from '@/components/ContactPanel'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Problems } from '@/components/Problems'
import { VideoSection } from '@/components/VideoSection'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problems />
        <About />
        <VideoSection />
        <Consultation />
        <Book />
        <ContactPanel />
      </main>
    </>
  )
}
