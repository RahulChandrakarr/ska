'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const visionaries = [
  {
    id: 1,
    name: "Mr. Sunil Kumar Agrawal",
    position: "Visionary Leader",
    description: "A remarkable individual with a love for nature and a down-to-earth attitude, he is involved in business, social work, religion, politics, and family. His versatility and genuine desire to help others inspire those aiming to make a positive impact while staying humble.",
    image: "/Images/our-team/MrSunilKumarAgrawal.png",
    expertise: ["Business", "Social Work", "Leadership"],
    expertiseIcons: {
      "Business": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      "Social Work": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      "Leadership": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  },
  {
    id: 2,
    name: "Mr. Anil Kumar Agrawal",
    position: "Dedicated Professional",
    description: "A dedicated individual who values a friendly and harmonious work environment, he approaches his responsibilities with seriousness and diligence. He fosters teamwork, ensuring staff feel supported and valued. His genuine concern for others' well-being and reliability make him a trusted member of any organization, balancing friendliness with productivity.",
    image: "/Images/our-team/MrAnilKumarAgrawal.png",
    expertise: ["Teamwork", "Diligence", "Reliability"],
    expertiseIcons: {
      "Teamwork": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      "Diligence": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      "Reliability": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  },
  {
    id: 3,
    name: "Mr. Sushil Agrawal",
    position: "Entrepreneurial Leader",
    description: "An exemplary individual known for dedication and a strong work ethic, he consistently strives for success. As a workaholic, he commits fully to his professional tasks, showcasing determination and focus. His entrepreneurial spirit makes him an invaluable asset to any team or organization.",
    image: "/Images/our-team/SunilKumarAgrawal.png",
    expertise: ["Entrepreneurship", "Dedication", "Success"],
    expertiseIcons: {
      "Entrepreneurship": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      "Dedication": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      "Success": (
        <svg className="w-4 h-4 text-[#C39A41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  }
]

export default function MeetOurVisionaries() {
  return (
    <section className="py-20 bg-black relative">
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C39A41]/3 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
       {/* Section Header */}
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 lg:flex  "
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm font-medium text-gray-300 mb-4 lg:w-1/2"
          >
            • Meet Our Visionaries
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 g:w-1/2"
          >
            Guided by visionary leaders who bring{" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              experience
            </motion.span>,{" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              integrity
            </motion.span>, and{" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              innovation
            </motion.span> to every project we undertake.
          </motion.h2>
        </motion.div>

        {/* Visionaries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionaries.map((visionary, index) => (
              <motion.div
                key={visionary.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <motion.div
                  className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-800"
                  
                >
                  {/* Profile Image */}
                  <motion.div 
                    className="relative h-96 overflow-hidden"
                    
                  >
                    <Image
                      src={visionary.image}
                      alt={visionary.name}
                      fill
                      className="object-contain  transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {visionary.name}
                    </motion.h3>
                    
                    <motion.div
                      className="text-[#C39A41] font-semibold mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.1 + index * 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {visionary.position}
                    </motion.div>

                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {visionary.description}
                    </motion.p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {visionary.expertise.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-[#C39A41]/20 text-[#C39A41] text-sm rounded-full border border-[#C39A41]/30 flex items-center gap-2"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.4 + skillIndex * 0.1 }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {visionary.expertiseIcons[skill]}
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
