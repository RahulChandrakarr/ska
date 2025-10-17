'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  "/Images/our-clients/logos/secr-removebg-preview.png",
  "/Images/our-clients/logos/images-Photoroom.png",
  "/Images/our-clients/logos/sarda_logo_01.png",
  "/Images/our-clients/logos/download (4)-Photoroom.png",
  "/Images/our-clients/logos/download-removebg-preview.png",
  "/Images/our-clients/logos/download (3)-Photoroom.png",
  "/Images/our-clients/logos/download (17)-Photoroom.png",
  "/Images/our-clients/logos/NBCC_ANNUAL_REPORT_2014_15.svg.png",
  "/Images/our-clients/logos/WhatsApp Image 2025-10-17 at 10.47.56 PM (1).jpeg",
  "/Images/our-clients/logos/download (16)-Photoroom.png",
  "/Images/our-clients/logos/download (15)-Photoroom.png",
  "/Images/our-clients/logos/download (11)-Photoroom.png",
  "/Images/our-clients/logos/WhatsApp Image 2025-10-17 at 10.47.56 PM.jpeg",
  "/Images/our-clients/logos/WhatsApp Image 2025-10-17 at 10.46.44 PM.jpeg",
  "/Images/our-clients/logos/WhatsApp Image 2025-10-17 at 10.43.35 PM (1).jpeg"
]

export default function OurClients() {
  return (
    <section className="py-20 bg-black relative">
      {/* Radial pattern overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#C39A41]/4 via-transparent to-transparent"></div>
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
          • Our Clients
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 g:w-1/2"
        >
          Proudly associated with leading corporations and government organizations who trust our commitment to  {" "}
          <motion.span
            className="text-[#C39A41]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            quality and excellence.
          </motion.span>
        </motion.h2>
      </motion.div>

        {/* Clients Grid - Continuous Auto Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-full mx-auto"
        >
          <div className="relative overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-scroll">
              {/* First set of clients */}
              {clients.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="group flex-shrink-0 flex items-center justify-center w-32 h-20 bg-[#3d3d3d] rounded-lg p-2"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain filter grayscale w-full h-full bg-[#3d3d3d]"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="group flex-shrink-0 flex items-center justify-center w-32 h-20 bg-[#3d3d3d] rounded-lg p-2"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain filter grayscale w-full h-full bg-[#3d3d3d]"
                  />
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {clients.map((logo, index) => (
                <div
                  key={`third-${index}`}
                  className="group flex-shrink-0 flex items-center justify-center w-32 h-20 bg-[#3d3d3d] rounded-lg p-2"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain filter grayscale w-full h-full bg-[#3d3d3d]"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          
        </motion.div>
      </div>
    </section>
  )
}
