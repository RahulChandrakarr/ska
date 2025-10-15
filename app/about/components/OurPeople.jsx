'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function OurPeople() {
  const teamRoles = [
    {
      role: "Civil Engineers",
      description: "Expert professionals who design and oversee construction projects"
    },
    {
      role: "Mechanical Engineers",
      description: "Specialists in mechanical systems and equipment"
    },
    {
      role: "Surveyors",
      description: "Precision experts who ensure accurate measurements and layouts"
    },
    {
      role: "Skilled Technicians",
      description: "Hands-on professionals with specialized technical skills"
    },
    {
      role: "Mechanics",
      description: "Equipment specialists who maintain and repair machinery"
    }
  ]

  const keyPoints = [
    "Completing projects on time is crucial",
    "Committed team of professionals",
    "High standards throughout every phase",
    "Modern techniques for efficient delivery",
    "Outstanding results through collaboration"
  ]

  return (
    <section className="py-20 bg-black relative">
      {/* Circular pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#C39A41]/6 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">  
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" text-center mb-16 lg:flex"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm font-medium text-gray-300 mb-4 lg:w-1/2"
            >
              • Our People
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 "
            >
              Guided by visionary leaders who bring 
              <motion.span
                className="text-[#C39A41]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {" "}experience, integrity, and innovation to every project we undertake
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamRoles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <motion.h3
                  className="text-xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {role.role}
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {role.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Our Commitment
            </motion.h3>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <motion.p
                  className="text-lg text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Additionally, we employ modern techniques to ensure projects are finished within the established timeline.
                </motion.p>
              </div>
              
              <div>
                <motion.ul
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                 
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      
    </section>
  )
}
