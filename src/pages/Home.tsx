import Hero from '../components/sections/Hero'
import SocialProofBar from '../components/sections/SocialProofBar'
import FeaturedTutorials from '../components/sections/FeaturedTutorials'
import AIWorkflows from '../components/sections/AIWorkflows'
import Newsletter from '../components/sections/Newsletter'
import FeaturedResources from '../components/sections/FeaturedResources'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProofBar />
      <FeaturedTutorials />
      <AIWorkflows />
      <Newsletter />
      <FeaturedResources />
    </main>
  )
}
