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

  return (
    <section className="py-20 bg-black relative">
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C39A41]/3 to-transparent"></div>
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
              • Recent Expansion
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 "
            >
              Expanding our capabilities with 
              <motion.span
                className="text-[#C39A41]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {" "}advanced steel manufacturing and industrial infrastructure
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Production Capacity
              </motion.h3>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <p className="font-semibold text-white">TMT/CTD Bars Manufacturing</p>
                  <p className="text-gray-300">Annual production capacity: 300,000 MT</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Hot Charging Method</p>
                  <p className="text-gray-300">Advanced production technique</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Plant Locations
              </motion.h3>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
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
              </motion.div>
            </motion.div>
          </div>

          <motion.div
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
              Facilities
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="text-3xl mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.0 + index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {facility.icon}
                  </motion.div>
                  <motion.h4
                    className="font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {facility.title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-300 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.4 + index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {facility.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      
    </section>
  )
}
