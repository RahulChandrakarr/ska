'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function StatisticsSection({ 
  statistics = []
}) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-4"
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-lg md:text-xl text-amber-800 font-medium"
                  >
                    {stat.description}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
