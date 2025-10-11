'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Company Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                SKA
              </motion.span>
              <motion.span 
                className="text-yellow-400 ml-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                GROUP
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Building the Future, Today
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span 
                className="text-yellow-400 font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Build with confidence!
              </motion.span> Quality, reliability, and innovation—your trusted partner for exceptional construction solutions.
            </motion.p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div 
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 193, 7, 0.1)" }}
            >
              <motion.div 
                className="text-4xl font-bold text-yellow-400 mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                300+
              </motion.div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 193, 7, 0.1)" }}
            >
              <motion.div 
                className="text-4xl font-bold text-yellow-400 mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                ₹89K+
              </motion.div>
              <div className="text-sm text-gray-300">Crores Project Value</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 193, 7, 0.1)" }}
            >
              <motion.div 
                className="text-4xl font-bold text-yellow-400 mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                30+
              </motion.div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.h3 
              className="text-xl md:text-2xl font-semibold mb-6 text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Our Expertise
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Road Construction', 'Civil Works', 'Steel Manufacturing', 'Real Estate', 'Infrastructure Development'].map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                  whileHover={{ 
                    backgroundColor: "rgba(255, 193, 7, 0.2)",
                    borderColor: "rgb(255, 193, 7)",
                    color: "white"
                  }}
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgb(255, 193, 7)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Projects
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg text-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgb(255, 193, 7)",
                color: "black"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Belief Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-16"
          >
            <motion.p 
              className="text-2xl md:text-3xl font-light italic text-gray-400"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span 
                className="text-yellow-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Belief.
              </motion.span> Stronger Than Steel.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
