import React from 'react'
import OtherPagesHeroSection from '../components/OtherPagesHeroSection'
import StatisticsSection from '../components/StatisticsSection'
import CompanyOverview from './components/CompanyOverview'
import ContactInfo from './components/ContactInfo'
import CompanyTurnover from './components/CompanyTurnover'
import OurExpertise from './components/OurExpertise'
import RecentExpansion from './components/RecentExpansion'
import OurPeople from './components/OurPeople'
import MeetOurVisionaries from '../components/MeetOurVisionaries'
import CTASection from '../components/CTASection'

export default function page() {
  const statistics = [
    {
      number: "15+",
      description: "Years of Excellence"
    },
    {
      number: "30",
      description: "Completed Projects"
    },
    {
      number: "20+",
      description: "Ongoing Projects"
    }
  ]

  return (
    <div className='overflow-x-hidden w-screen'>
      <OtherPagesHeroSection 
        backgroundImage="/Images/about-us/about-us-hero-section.jpg"
        pageTitle="ABOUT USsdfasdf"
        mainText="We build the foundations of progress, shaping tomorrow with integrity and innovation"
        altText="About us hero section background"
      />
      
      <CompanyOverview />
      
      <StatisticsSection statistics={statistics} />
      
      <OurExpertise />
      
      <RecentExpansion />
      
      <CompanyTurnover />
      
      <OurPeople />
      
      <MeetOurVisionaries />
      
      {/* <ContactInfo /> */}
      
      <CTASection />
    </div>
  )
}
