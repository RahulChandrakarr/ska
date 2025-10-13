import React from 'react'
import OtherPagesHeroSection from '../components/OtherPagesHeroSection'
import OurProjects from './components/OurProjects'
import CTASection from '../components/CTASection'

export default function Projects() {
  return (
    <div>
      <OtherPagesHeroSection 
        backgroundImage="/Images/projects/engineer-construction-site.jpg"
        pageTitle="PROJECTS"
        mainText="Showcasing our expertise through exceptional construction projects that define excellence"
        altText="Engineer at construction site background"
      />
      <OurProjects />
      <CTASection />
    </div>
  )
}
