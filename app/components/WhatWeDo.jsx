'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhatWeDo() {
  const services = [
    {
      id: 1,
      title: "Road Construction",
      description: "SKA Group, with a deep understanding of market needs, shapes infrastructure and positively impacts the communities it serves.",
      image: "/Images/our-services/Road Construction.jpg"
    },
    {
      id: 2,
      title: "Civil Works",
      description: "We construct government buildings, labor and housing colonies, industrial structures, culverts, bridges, dams, canals, and railway tracks.",
      image: "/Images/our-services/Civil Works.jpg"
    },
    {
      id: 3,
      title: "Mass Earth Excavation",
      description: "We excavate large amounts of earth and rocks for canals, dams, and other development projects.",
      image: "/Images/our-services/Mass Earth Excavation.jpg"
    },
    {
      id: 4,
      title: "Loading and Transportation",
      description: "We load and transport minerals, aggregates, and ores.",
      image: "/Images/our-services/Loading & Transportation.jpg"
    },
    {
      id: 5,
      title: "Foundation Excavation, Earthwork & Site Grading",
      description: "We have a skilled team that efficiently handles foundation excavation, earthwork, and site grading.",
      image: "/Images/our-services/FoundationExcavationEarthworkSiteGrading.jpg"
    },
    {
      id: 6,
      title: "Steel Manufacturing",
      description: "We own a limestone lease, which gives us access to a vast supply of limestone.",
      image: "/Images/our-services/Steel Manufacturing.jpg"
    },
    {
      id: 7,
      title: "Manufacturing of Stone",
      description: "We have a wide range of stone products available, including crushed stone, sand, gravel, and other aggregates.",
      image: "/Images/our-services/Stone Products.jpg"
    },
    {
      id: 8,
      title: "Dealing in Real Estate",
      description: "We deal in real estate and have a wide range of properties available.",
      image: "/Images/our-services/Road Construction.jpg"
    }
  ]

  return (
    <section className="py-20 bg-black relative">
      {/* Horizontal pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C39A41]/3 to-transparent"></div>
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
            • What we do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 g:w-1/2"
          >
            From large-scale infrastructure to modern real estate developments, our work  {" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              combines innovation, reliability, and precision
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Sliding Cards Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * (services.length - 3)]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
            style={{ width: `${services.length * 320}px` }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-shrink-0 w-80"
              >
                <motion.div
                  className=" overflow-hidden transition-shadow duration-300"
                 
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                     
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-white mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    <hr className="border-[#C39A41] border-2 mb-3" />
                    <motion.p
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for smooth edges */}
         
        </div>

      
      </div>
    </section>
  )
}
