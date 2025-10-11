'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              About <motion.span 
                className="text-yellow-500"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Us
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Building the Future, Today
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  SKA Group is widely recognized for our unwavering commitment to excellence. With a legacy spanning several decades, we have earned the trust of our clients as a reliable partner in transforming visions into reality.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  From concept to completion, we prioritize efficiency, sustainability, and cutting-edge solutions to create structures that stand the test of time. Our unwavering dedication to client satisfaction and our ability to execute complex projects with finesse set us apart in the industry.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  At SKA Group, we don't just build structures—we bring dreams to life with passion, integrity, and expertise. We empower visions with our proven expertise and a track record of delivering exceptional outcomes.
                </motion.p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <motion.div 
                    className="text-3xl font-bold text-yellow-500 mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    30+
                  </motion.div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <motion.div 
                    className="text-3xl font-bold text-yellow-500 mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    300+
                  </motion.div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Excellence in Construction</h3>
                    <p className="text-sm opacity-90">Building Tomorrow's Infrastructure</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
