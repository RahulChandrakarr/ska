'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function FeaturedProjects() {
  const projects = [
    {
      title: "CM House",
      description: "The construction of the CM house was completed with utmost success, reflecting the significance and importance of the structure. Detailed planning and skilled craftsmanship were integral to the project, resulting in the creation of a distinguished and functional residence for the honorable Chief Minister.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: "IIT Bhubaneswar",
      description: "The construction of IIT Bhubaneswar was accomplished with great success, demonstrating careful planning, precise execution, and a dedication to fostering academic brilliance. The project's successful conclusion has yielded a cutting-edge educational establishment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Raj Bhavan",
      description: "The construction of the Raj Bhavan was a resounding success, exemplifying the highest standards of architectural excellence and craftsmanship. Meticulous planning, skilled labor, and unwavering attention to detail were instrumental in creating a majestic and iconic structure.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "South East Central Railways",
      description: "Successfully completed railway infrastructure projects demonstrating expertise in complex transportation infrastructure.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Minister's Bungalow",
      description: "The Minister's bungalow was built with exceptional precision and skill. This project required thorough planning, expert craftsmanship, and a keen eye for detail, leading to the successful creation of an impressive and functional home that reflects the dignity of a minister.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Kanker Medical College",
      description: "The development of Kanker Medical College represents a benchmark in healthcare infrastructure, highlighting exceptional architectural standards and practicality. It embodies careful planning and skilled craftsmanship, leading to a contemporary facility focused on medical education and patient care.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Featured <motion.span 
                className="text-yellow-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Projects
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Showcasing our expertise through prestigious projects that demonstrate our commitment to excellence and innovation
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden group cursor-pointer"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-400/5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-300 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-black">
                      {project.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900 rounded-xl"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">₹89K+</div>
                <div className="text-sm text-gray-300">Crores Project Value</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900 rounded-xl"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">300+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900 rounded-xl"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">30+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
