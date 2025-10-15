'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ongoingProjects = [
  {
    id: 1,
    title: "Monnet Ispat Industrial Work",
    description: "Industrial-grade construction and infrastructure work for Monnet Ispat's expansion. Our team focuses on maintaining pace, safety, and structural excellence throughout.",
    image: "/Images/ongoing-projects/MonnetIspatIndustrialWork.jpg",
    design: "left-image",
    category: "Industrial Construction",
    status: "In Progress",
    progress: 75
  },
  {
    id: 2,
    title: "Dharamjaigarh – Kapu Road",
    description: "Part of an extensive regional connectivity initiative, this roadwork project is progressing steadily with advanced equipment and strict quality monitoring. Our team ensures safety, durability, and efficiency at every stage to deliver a smooth, long-lasting roadway.",
    image: "/Images/ongoing-projects/Dharamjaigarh–KapuRoad.jpg",
    design: "right-image",
    category: "Road Construction",
    status: "In Progress",
    progress: 60
  },
  {
    id: 3,
    title: "Gharghoda – Lailunga Road",
    description: "An essential infrastructure development aimed at improving regional transport and trade routes. The project focuses on strong foundations, durable surfacing, and timely completion through efficient resource management.",
    image: "/Images/ongoing-projects/Gharghoda–LailungaRoad.jpg",
    design: "left-image",
    category: "Infrastructure Development",
    status: "In Progress",
    progress: 45
  },
  {
    id: 4,
    title: "Bilaspur Municipal Corporation Project",
    description: "This urban development initiative is under active execution, enhancing municipal facilities and road networks to improve public infrastructure and accessibility across the city.",
    image: "/Images/ongoing-projects/BilaspurMunicipalCorporationProject.jpeg",
    design: "right-image",
    category: "Urban Development",
    status: "In Progress",
    progress: 80
  },
  {
    id: 5,
    title: "Bakaruma – Lailunga Road",
    description: "Ongoing road construction project aimed at strengthening inter-district connectivity. With precision planning and efficient execution, the project is being delivered on schedule with strict adherence to quality standards.",
    image: "/Images/ongoing-projects/Bakaruma–LailungaRoad.jpg",
    design: "left-image",
    category: "Road Construction",
    status: "In Progress",
    progress: 55
  }
]

export default function OurOngoingProjects() {
  return (
    <section className="py-20 bg-black relative">
      {/* Dynamic construction pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#C39A41]/4 via-transparent to-[#C39A41]/6"></div>
      <div className="container mx-auto px-4 relative z-10">
       {/* Section Header */}
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 lg:flex  "
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm font-medium text-gray-300 mb-4 lg:w-1/2"
          >
            • Ongoing Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 g:w-1/2"
          >
           Witness our expertise in{" "}
            <motion.span
              className="text-[#C39A41]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              action
            </motion.span>
          </motion.h2>
        </motion.div>


        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          {ongoingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-20 last:mb-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                project.design === 'right-image' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <motion.div 
                  className={`${project.design === 'right-image' ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: project.design === 'right-image' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="space-y-6">
                    {/* Project Icon & Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {project.title}
                      </h3>
                    </motion.div>


                    {/* Description */}
                    <motion.p
                      className="text-lg text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className={`${project.design === 'right-image' ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: project.design === 'right-image' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Project Number Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-[#C39A41] text-black font-bold rounded-full flex items-center justify-center">
                        {project.id.toString().padStart(2, '0')}
                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              </div>

              {/* Divider Line */}
              {index < ongoingProjects.length - 1 && (
                <motion.div 
                  className="mt-20 border-t border-gray-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.9 }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Active Projects", value: "12+", color: "text-[#C39A41]" },
              { label: "Team Members", value: "150+", color: "text-gray-300" },
              { label: "Completion Rate", value: "98%", color: "text-gray-300" },
              { label: "On Schedule", value: "100%", color: "text-gray-300" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center"
              >
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

