import React from 'react'
import OtherPagesHeroSection from '../components/OtherPagesHeroSection'
import OurOngoingProjects from './components/OurOngoingProjects'
import CTASection from '../components/CTASection'

export default function OngoingProjects() {
  return (
    <div className='overflow-x-hidden w-screen'>
      <OtherPagesHeroSection 
        backgroundImage="/Images/ongoing-projects/ongoing-projects-hero-section.jpg"
        pageTitle="ONGOING PROJECTS"
        mainText="Witness our expertise in action through current construction projects that showcase innovation and precision"
        altText="Ongoing construction projects background"
      />
      <OurOngoingProjects />
      <CTASection />
    </div>
  )
}

