import React from 'react'
import OtherPagesHeroSection from '../components/OtherPagesHeroSection'
import ContactForm from './components/ContactForm'

export default function Contact() {
  return (
    <div className='overflow-x-hidden w-screen'>
      <OtherPagesHeroSection 
        backgroundImage="/Images/contact-us/contact-us-hero-section.jpg"
        pageTitle="CONTACT US"
        mainText="Have a project in mind? Our experts are just a message away. Connect with SKA Group to discuss opportunities, ideas, and tailored solutions for your construction needs."
        altText="Contact us hero section background"
      />
      <ContactForm />
    </div>
  )
}

