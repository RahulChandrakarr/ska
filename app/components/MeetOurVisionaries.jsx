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
    expertise: ["Business", "Social Work", "Leadership"]
  },
  {
    id: 2,
    name: "Mr. Anil Kumar Agrawal",
    position: "Dedicated Professional",
    description: "A dedicated individual who values a friendly and harmonious work environment, he approaches his responsibilities with seriousness and diligence. He fosters teamwork, ensuring staff feel supported and valued. His genuine concern for others' well-being and reliability make him a trusted member of any organization, balancing friendliness with productivity.",
    image: "/Images/our-team/MrAnilKumarAgrawal.png",
    expertise: ["Teamwork", "Diligence", "Reliability"]
  },
  {
    id: 3,
    name: "Mr. Sushil Agrawal",
    position: "Entrepreneurial Leader",
    description: "An exemplary individual known for dedication and a strong work ethic, he consistently strives for success. As a workaholic, he commits fully to his professional tasks, showcasing determination and focus. His entrepreneurial spirit makes him an invaluable asset to any team or organization.",
    image: "/Images/our-team/SunilKumarAgrawal.png",
    expertise: ["Entrepreneurship", "Dedication", "Success"]
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
