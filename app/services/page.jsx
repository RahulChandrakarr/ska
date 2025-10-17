import React from 'react'
import OtherPagesHeroSection from '../components/OtherPagesHeroSection'
import OurServices from './components/OurServices'
import CTASection from '../components/CTASection'

export default function Services() {
  return (
    <div className='overflow-x-hidden w-screen'>
      <OtherPagesHeroSection 
        backgroundImage="/Images/service-section/services-section-hero-section.jpg"
        pageTitle="SERVICES"
        mainText="Delivering innovative and sustainable construction solutions across diverse sectors"
        altText="Services section hero background"
      />
      <OurServices />
      <CTASection />
    </div>
  )
}
