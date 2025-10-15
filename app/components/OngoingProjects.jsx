'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ongoingProjects = [
  {
    id: 1,
    title: "Bakaruma–Lailunga Road Project",
    description: "Major road construction project connecting Bakaruma to Lailunga, featuring modern road infrastructure development with advanced construction techniques.",
    image: "/Images/ongoing-projects/Bakaruma–LailungaRoad.jpg",
    status: "In Progress",
    progress: 75
  },
  {
    id: 2,
    title: "Bilaspur Municipal Corporation Project",
    description: "Comprehensive municipal infrastructure development project in Bilaspur, including urban planning and civic amenities construction.",
    image: "/Images/ongoing-projects/BilaspurMunicipalCorporationProject.jpg",
    status: "Active Construction",
    progress: 60
  },
  {
    id: 3,
    title: "Gharghoda–Lailunga Road Development",
    description: "Strategic road connectivity project between Gharghoda and Lailunga, enhancing regional transportation infrastructure.",
    image: "/Images/ongoing-projects/Gharghoda–LailungaRoad.jpg",
    status: "In Progress",
    progress: 45
  },
  {
    id: 4,
    title: "Dharamjaigarh–Kapu Road Construction",
    description: "Highway development project connecting Dharamjaigarh to Kapu, featuring modern road engineering and sustainable construction practices.",
    image: "/Images/ongoing-projects/Dharamjaigarh–KapuRoad.jpg",
    status: "Planning Phase",
    progress: 25
  },
  {
    id: 5,
    title: "Monnet Ispat Industrial Work",
    description: "Industrial construction project for Monnet Ispat, involving specialized industrial infrastructure development and heavy machinery installation.",
    image: "/Images/ongoing-projects/MonnetIspatIndustrialWork.jpg",
    status: "Active Construction",
    progress: 80
  }
]

export default function OngoingProjects() {
  return (
    <section className="py-20 bg-black relative">
      {/* Vertical pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C39A41]/2 to-transparent"></div>
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
            • Ongoing Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 g:w-1/2"
          >
            Delivering quality infrastructure with efficiency, precision, {" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              and expertise across every project.
            </motion.span>
          </motion.h2>
        </motion.div>
        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Featured Project - First Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8"
          >
            <motion.div 
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={ongoingProjects[0].image}
                alt={ongoingProjects[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {ongoingProjects[0].title}
                  </h3>
                  <p className="text-gray-200 text-lg">
                    {ongoingProjects[0].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Four Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingProjects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="relative h-80 rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="text-white"
                    >
                      <h3 className="text-lg font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-xs leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  )
}
