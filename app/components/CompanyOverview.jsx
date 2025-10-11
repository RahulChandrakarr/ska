'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CompanyOverview() {
  const overviewData = [
    {
      title: "Our Expertise",
      description: "Through our experience in various fields of construction, we have built an impressive track record in different areas of infrastructure construction. This profile clearly demonstrates our expertise in the field of infrastructure development.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Recent Expansion",
      description: "We have recently added two steel plants to our business portfolio. We manufacture TMT/CTD bars with an annual production capacity of 300,000 MT through the hot charging method.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Our People",
      description: "Our group of civil and mechanical engineers, surveyors, skilled technicians, and mechanics work effectively to deliver outstanding results. We understand that completing projects on time is crucial.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  const facilities = [
    "Four 12 MT furnaces",
    "Four 10 MT furnaces", 
    "Both plants located in Raipur (CG)",
    "Industrial areas of Urla and Siltara"
  ]

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
              Company <motion.span 
                className="text-yellow-500"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Overview
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              We are a leading Chhattisgarh-based contractor with regional and branch offices in all major cities in the state. We have a rich history of successfully completing prestigious and challenging projects.
            </motion.p>
          </motion.div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {overviewData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden group cursor-pointer"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-500/5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-300 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-black">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-500/30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Facilities Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl p-8 lg:p-12 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold mb-6 text-yellow-400">
                  Steel Plant Facilities
                </h3>
                <p className="text-lg text-gray-300 mb-8">
                  We manufacture TMT/CTD bars with an annual production capacity of 300,000 MT through the hot charging method.
                </p>
                
                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={facility}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                      <span className="text-gray-300">{facility}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold mb-2">Steel Manufacturing</h4>
                      <p className="text-sm opacity-90">300,000 MT Annual Capacity</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
