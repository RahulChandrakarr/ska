'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    number: "01",
    title: "CM House",
    description: "Completed with precision and excellence, the CM House showcases SKA's expertise in government building projects and superior craftsmanship.",
    image: "/Images/featured-projects/CMHouse.png",
    category: "Government Building"
  },
  {
    id: 2,
    number: "02", 
    title: "Raj Bhavan",
    description: "An iconic architectural masterpiece, combining quality, aesthetics and precision engineering.",
    image: "/Images/featured-projects/RajBhavan.png",
    category: "Architectural Excellence"
  },
  {
    id: 3,
    number: "03",
    title: "Minister's Bungalow", 
    description: "Built with exceptional craftsmanship, reflecting SKA's commitment to prestigious and elegant residences.",
    image: "/Images/featured-projects/MinisterBungalow.png",
    category: "Luxury Residential"
  },
  {
    id: 4,
    number: "04",
    title: "Kanker Medical College",
    description: "A modern healthcare facility designed with efficiency, innovation, and sustainability.",
    image: "/Images/featured-projects/KankerMedicalCollege.png",
    category: "Healthcare Infrastructure"
  }
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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
            className="text-sm font-medium text-gray-600 mb-4 lg:w-1/2"
          >
            • Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 g:w-1/2"
          >
            Delivering exceptional projects with quality, innovation, and precision,{" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              turning visions into reality.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Project Content */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="space-y-6">
                    {/* Project Number */}
                    <motion.div 
                      className="text-6xl md:text-7xl font-bold text-gray-200"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {project.number}
                    </motion.div>

                    {/* Project Title */}
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Project Description */}
                    <motion.p 
                      className="text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                   
                  </div>
                </motion.div>

                {/* Project Image */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Divider Line */}
              {index < projects.length - 1 && (
                <motion.div 
                  className="mt-16 border-t border-gray-200"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.9 }}
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