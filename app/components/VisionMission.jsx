'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VisionMission() {
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                BUILDING A
              </motion.span>
              <br />
              <motion.span 
                className="text-yellow-500"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                BETTER
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                TOMORROW
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Innovative, Sustainable, and Reliable
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Solutions for a Better Tomorrow
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Vision and Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    VISION
                  </motion.h3>
                </motion.div>
                
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  To be the ultimate one-stop solution, driving excellence, innovation, and sustainability. 
                  We aspire to transform possibilities into reality through cutting-edge technology, strong 
                  partnerships, and a commitment to a better future.
                </motion.p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    MISSION
                  </motion.h3>
                </motion.div>
                
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  At SKA Group, we deliver high-quality, responsible, and sustainable solutions. 
                  We innovate, grow, and embrace change to create lasting value for our customers, 
                  communities, and the world.
                </motion.p>
                
                <motion.div 
                  className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.p 
                    className="text-lg font-semibold text-yellow-600 italic"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    "Our Group, Your Solutions."
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Construction Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">Infrastructure</h4>
                    <p className="text-sm opacity-90">Building Tomorrow</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>

              {/* Construction Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">Quality</h4>
                    <p className="text-sm opacity-90">Excellence Assured</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>

              {/* Construction Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg md:col-span-2 lg:col-span-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">Innovation</h4>
                    <p className="text-sm opacity-90">Future Forward</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-yellow-500 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Ready to Build the Future Together?
              </h3>
              <p className="text-lg text-black/80 mb-6">
                Let's transform your vision into reality with our innovative solutions and proven expertise.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white font-semibold rounded-lg text-lg hover:bg-gray-800 transition-colors"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
