'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OtherPagesHeroSection({ 
  backgroundImage, 
  pageTitle, 
  mainText, 
  altText = "Hero background" 
}) {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={altText}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Golden gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C39A41]/20 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="w-full text-center">
              {/* Page Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {pageTitle}
                </motion.h1>
                
                {/* Horizontal line separator */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-16 h-1 bg-white mx-auto mb-6"
                ></motion.div>
              </motion.div>

              {/* Main Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  {mainText}
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
