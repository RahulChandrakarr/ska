'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CompanyOverview() {
  return (
        <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
      
          {/* Company Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16 lg:flex "
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm font-medium text-gray-600 mb-4 lg:w-1/2"
            >
              • Company Overview
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 "
            >
              Building the Future, Today with 
              <motion.span
                className="text-yellow-400"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {" "}excellence, innovation, and unwavering commitment
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* About Us Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              About Us
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-gray-700 leading-relaxed text-lg">
                  SKA Group is widely recognized for our unwavering commitment to excellence. With a legacy spanning several decades, we have earned the trust of our clients as a reliable partner in transforming visions into reality. Our relentless pursuit of superior results and innovative solutions sets us apart.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  From concept to completion, we prioritize efficiency, sustainability, and cutting-edge solutions to create structures that stand the test of time. Our unwavering dedication to client satisfaction and our ability to execute complex projects with finesse set us apart in the industry.
                </p>
              </motion.div>
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-gray-700 leading-relaxed text-lg">
                  At SKA Group, we don't just build structures—we bring dreams to life with passion, integrity, and expertise. We empower visions with our proven expertise and a track record of delivering exceptional outcomes.
                </p>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-gray-800 font-medium italic">
                    "We don't just build structures—we bring dreams to life with passion, integrity, and expertise."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
     
    </section>
  )
}
