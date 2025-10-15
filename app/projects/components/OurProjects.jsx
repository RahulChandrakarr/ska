'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "CM House",
    description: "A landmark government residence built with meticulous planning and superior craftsmanship. The CM House reflects elegance, precision, and our dedication to building structures that inspire pride.",
    image: "/Images/featured-projects/CMHouse.png",
    design: "left-image",
    category: "Government Building",
    status: "Completed"
  },
  {
    id: 2,
    title: "Raj Bhavan",
    description: "A project that combines heritage with modern engineering. The Raj Bhavan stands as a symbol of dignity and excellence, built with attention to detail and architectural finesse.",
    image: "/Images/featured-projects/RajBhavan.png",
    design: "right-image",
    category: "Heritage & Modern",
    status: "Completed"
  },
  {
    id: 3,
    title: "Minister's Bungalow",
    description: "Built with exceptional craftsmanship, reflecting SKA's commitment to prestigious and elegant residences.",
    image: "/Images/featured-projects/MinisterBungalow.png",
    design: "left-image",
    category: "Luxury Residential",
    status: "Completed"
  },
  {
    id: 4,
    title: "Kanker Medical College",
    description: "An advanced medical institution developed to strengthen healthcare and education. The project showcases our ability to deliver large-scale facilities with precision and reliability.",
    image: "/Images/featured-projects/KankerMedicalCollege.png",
    design: "right-image",
    category: "Healthcare",
    status: "Completed"
  }
]

export default function OurProjects() {
  return (
    <section className="py-20 bg-black relative">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C39A41]/3 via-transparent to-[#C39A41]/5"></div>
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
            • Our Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 g:w-1/2"
          >
            Showcasing excellence through {" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              exceptional projects
            </motion.span>
          </motion.h2>
        </motion.div>


        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-20 last:mb-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                project.design === 'right-image' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <motion.div 
                  className={`${project.design === 'right-image' ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: project.design === 'right-image' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="space-y-6">
                    {/* Project Icon & Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {project.title}
                      </h3>
                    </motion.div>


                    {/* Description */}
                    <motion.p
                      className="text-lg text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className={`${project.design === 'right-image' ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: project.design === 'right-image' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Project Number Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-[#C39A41] text-black font-bold rounded-full flex items-center justify-center">
                        {project.id.toString().padStart(2, '0')}
                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              </div>

              {/* Divider Line */}
              {index < projects.length - 1 && (
                <motion.div 
                  className="mt-20 border-t border-gray-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        

      </div>
    </section>
  )
}
