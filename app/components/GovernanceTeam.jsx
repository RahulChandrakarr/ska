'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function GovernanceTeam() {
  const teamMembers = [
    {
      name: "Mr. Sunil Kumar Agrawal",
      title: "Founder & Chairman",
      description: "A remarkable individual with a love for nature and a down-to-earth attitude, he is involved in business, social work, religion, politics, and family. His versatility and genuine desire to help others inspire those aiming to make a positive impact while staying humble.",
      image: "/Images/team-member-1.jpg",
      qualities: ["Visionary Leader", "Nature Lover", "Community Builder"]
    },
    {
      name: "Mr. Sushil Agrawal",
      title: "Managing Director",
      description: "An exemplary individual known for dedication and a strong work ethic, he consistently strives for success. As a workaholic, he commits fully to his professional tasks, showcasing determination and focus. His entrepreneurial spirit makes him an invaluable asset to any team or organization.",
      image: "/Images/team-member-2.jpg",
      qualities: ["Dedicated Professional", "Entrepreneurial Spirit", "Results Driven"]
    },
    {
      name: "Mr. Anil Kumar Agrawal",
      title: "Executive Director",
      description: "A dedicated individual who values a friendly and harmonious work environment, he approaches his responsibilities with seriousness and diligence. He fosters teamwork, ensuring staff feel supported and valued. His genuine concern for others' well-being and reliability make him a trusted member of any organization, balancing friendliness with productivity.",
      image: "/Images/team-member-3.jpg",
      qualities: ["Team Builder", "Reliable Partner", "People Focused"]
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-black text-white">
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
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Governance <motion.span 
                className="text-yellow-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Team
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Meet the visionary leaders who drive SKA Group's success and innovation
            </motion.p>
          </motion.div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Team Member Image */}
                <motion.div 
                  className="relative h-80 overflow-hidden"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Image Placeholder with Professional Look */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div 
                        className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </motion.div>
                      <motion.h4 
                        className="text-xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {member.name.split(' ').slice(0, 2).join(' ')}
                      </motion.h4>
                      <motion.p 
                        className="text-sm opacity-90"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {member.title}
                      </motion.p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-yellow-400 text-sm font-medium mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.title}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.description}
                  </motion.p>

                  {/* Qualities Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.qualities.map((quality, qualityIndex) => (
                      <motion.span
                        key={quality}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.8 + index * 0.2 + qualityIndex * 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-500/20"
                      >
                        {quality}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Leadership That Inspires
              </h3>
              <p className="text-lg text-black/80">
                Our governance team combines decades of experience with innovative thinking to drive SKA Group's continued success and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
