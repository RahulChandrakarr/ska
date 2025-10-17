'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  {
    id: 1,
    name: "South East Central Railway",
    logo: "/Images/our-clients/logos/secr-removebg-preview.png",
    category: "Government"
  },
  {
    id: 2,
    name: "IRCON International Limited",
    logo: "/Images/our-clients/logos/images-Photoroom.png",
    category: "Infrastructure"
  },
  {
    id: 3,
    name: "SARDA ENERGY & MINERALS LTD",
    logo: "/Images/our-clients/logos/sarda_logo_01.png",
    category: "Energy"
  },
  {
    id: 4,
    name: "Public Works Department",
    logo: "/Images/our-clients/logos/download (4)-Photoroom.png",
    category: "Government"
  },
  {
    id: 5,
    name: "ISL ENERGY LIMITED",
    logo: "/Images/our-clients/logos/download-removebg-preview.png",
    category: "Energy"
  },
  {
    id: 6,
    name: "JINDAL POWER",
    logo: "/Images/our-clients/logos/download (3)-Photoroom.png",
    category: "Power"
  },
  {
    id: 7,
    name: "NECO GROUP OF INDUSTRIES",
    logo: "/Images/our-clients/logos/download (17)-Photoroom.png",
    category: "Industrial"
  },
  {
    id: 8,
    name: "NBCC",
    logo: "/Images/our-clients/logos/NBCC_ANNUAL_REPORT_2014_15.svg.png",
    category: "Construction"
  },
  {
    id: 9,
    name: "SHRI BAJRANG",
    logo: "/Images/our-clients/logos/download (2)-Photoroom.png",
    category: "Power & Steel"
  },
  {
    id: 10,
    name: "CGWRD",
    logo: "/Images/our-clients/logos/download (16)-Photoroom.png",
    category: "Water Resources"
  },
  {
    id: 11,
    name: "RES",
    logo: "/Images/our-clients/logos/download (15)-Photoroom.png",
    category: "Engineering"
  },
  {
    id: 12,
    name: "PWD",
    logo: "/Images/our-clients/logos/download (11)-Photoroom.png",
    category: "Government"
  },
  {
    id: 13,
    name: "Infrastructure Development",
    logo: "/Images/our-clients/logos/download (14).png",
    category: "Development"
  }
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
              {clients.map((client, index) => (
                <div
                  key={`first-${client.id}`}
                  className="group flex-shrink-0 flex items-center justify-center w-32 h-20 bg-[#3d3d3d] rounded-lg p-2"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="object-contain filter grayscale w-full h-full"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${client.id}`}
                  className="group flex-shrink-0 flex items-center justify-center w-32 h-20 bg-[#3d3d3d] rounded-lg p-2"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="object-contain filter grayscale w-full h-full"
                  />
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {clients.map((client, index) => (
                <div
                  key={`third-${client.id}`}
                  className="group flex-shrink-0 flex items-center justify-center w-32 h-20 bg-[#3d3d3d] rounded-lg p-2"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="object-contain filter grayscale w-full h-full"
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
