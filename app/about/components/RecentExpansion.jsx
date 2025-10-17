'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function RecentExpansion() {
  const facilities = [
    {
      title: "Four 12 MT Furnaces",
      description: "High-capacity furnaces for efficient steel production"
    },
    {
      title: "Four 10 MT Furnaces",
      description: "Additional furnaces to meet production demands"
    },
    {
      title: "Urla Industrial Area",
      description: "Strategic location in Raipur for optimal operations"
    },
    {
      title: "Siltara Industrial Area",
      description: "Second plant location for expanded production"
    }
  ]

  // Consistent animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-black relative">
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C39A41]/3 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-sm font-medium text-gray-300 mb-4"
          >
            • Recent Expansion
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Expanding our capabilities with 
            <span className="text-[#C39A41]">
              {" "}advanced steel manufacturing and industrial infrastructure
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Production Capacity
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white">TMT/CTD Bars Manufacturing</p>
                <p className="text-gray-300">Annual production capacity: 300,000 MT</p>
              </div>
              <div>
                <p className="font-semibold text-white">Hot Charging Method</p>
                <p className="text-gray-300">Advanced production technique</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Plant Locations
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-semibold text-white">Urla Industrial Area</p>
                  <p className="text-gray-300">Raipur, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-semibold text-white">Siltara Industrial Area</p>
                  <p className="text-gray-300">Raipur, Chhattisgarh</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Facilities
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-800"
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-white mb-2">
                  {facility.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>
      
    </section>
  )
}
