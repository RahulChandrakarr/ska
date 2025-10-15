'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function OurExpertise() {
  const expertiseAreas = [
    {
      title: "Regional Presence",
      description: "We are a leading Chhattisgarh-based contractor with regional and branch offices in all major cities in the state."
    },
    {
      title: "Project Experience",
      description: "We have a rich history of successfully completing prestigious and challenging projects at different locations throughout Chhattisgarh."
    },
    {
      title: "Infrastructure Expertise",
      description: "We have extensive experience in major infrastructure projects in various areas, supported by a fleet of advanced equipment."
    },
    {
      title: "Professional Team",
      description: "Our team of highly qualified and dedicated professionals ensures exceptional project delivery."
    },
    {
      title: "Track Record",
      description: "Through our experience in various fields of construction, we have built an impressive track record in different areas of infrastructure construction."
    },
    {
      title: "Professional Leadership",
      description: "The company is promoted by a group of dedicated and experienced professionals with excellent skills in all fields of infrastructure work."
    }
  ]

  return (
    <section className="py-20 bg-black relative">
      {/* Horizontal pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C39A41]/3 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
       
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16 lg:flex"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm font-medium text-gray-300 mb-4 lg:w-1/2"
            >
              • Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 "
            >
              Delivering exceptional results through 
              <motion.span
                className="text-[#C39A41]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {" "}proven expertise, regional presence, and professional excellence
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-800"
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
                  {area.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {area.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
{/* 
          <motion.div
            className="mt-16 bg-gray-100 rounded-2xl p-8 border-l-4 border-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-lg text-gray-800 text-center font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              This profile clearly demonstrates our expertise in the field of infrastructure development.
            </motion.p>
          </motion.div> */}
        </div>
      
    </section>
  )
}
