'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ContactInfo() {
  return (
    <section className="py-20 bg-black relative">
      {/* Radial pattern overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#C39A41]/4 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" mb-16 lg:flex"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm font-medium text-gray-300 mb-4 lg:w-1/2"
            >
              • Contact Information
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 "
            >
              Get in touch with our team of 
              <motion.span
                className="text-[#C39A41]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {" "}experienced professionals ready to bring your vision to life
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-800"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center mb-8">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                SKA Group
              </motion.h3>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-300">
                    Jora, NH-06 Road, Opp. Agriculture College,<br />
                    Raipur, Chhattisgarh - 492001
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-300">
                    <a href="tel:+917806081661" className="hover:text-white transition-colors">
                      +91 78060 81661
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">
                    <a href="mailto:info@skaprojects.in" className="hover:text-white transition-colors">
                      info@skaprojects.in
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
     
    </section>
  )
}
