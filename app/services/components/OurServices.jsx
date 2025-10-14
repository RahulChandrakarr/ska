'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: "Road Construction",
    description: "At SKA Group, we design and build roads that connect communities and drive progress. From highways to rural roads, our road construction services combine careful planning, modern machinery, and skilled teams to deliver projects that are safe, durable, and on schedule. Every road we construct reflects our commitment to quality, innovation, and the lasting impact of well-planned infrastructure.",
    image: "/Images/our-services/Road Construction.jpg",
    design: "left-image",
  },
  {
    id: 2,
    title: "Civil Works",
    description: "At SKA Group, we bring precision and expertise to every civil works project. From constructing industrial structures to labor and housing colonies, our team ensures that each project is completed with exceptional quality and attention to detail. Using modern techniques and skilled professionals, we deliver reliable solutions that stand the test of time, contributing to infrastructure that supports communities and industries alike.",
    image: "/Images/our-services/Civil Works.jpg",
    design: "right-image",
  },
  {
    id: 3,
    title: "Mass Earth Excavation",
    description: "At SKA Group, we tackle large-scale excavation projects with expertise and precision. Our mass earth excavation services allow us to efficiently move vast quantities of earth and rock, creating the foundation for canals, dams, and other major infrastructure projects. With modern machinery and a skilled workforce, we ensure that every excavation is executed safely, on time, and to the highest quality standards, providing a solid base for long-lasting construction.",
    image: "/Images/our-services/Mass Earth Excavation.jpg",
    design: "left-image",
  },
  {
    id: 4,
    title: "Loading & Transportation",
    description: "At SKA Group, moving materials efficiently is as important as constructing them. Our loading and transportation services ensure that minerals, aggregates, and other resources reach their destination safely and on time. With a skilled team and modern fleet, we handle every load with care, maintaining high standards of safety and reliability. This seamless logistics approach supports smooth project execution and contributes to the timely completion of every construction endeavor.",
    image: "/Images/our-services/Loading & Transportation.jpg",
    design: "right-image",
  },
  {
    id: 5,
    title: "Foundation Excavation, Earthwork & Site Grading",
    description: "At SKA Group, we lay the groundwork for every project with precision and care. From deep foundation excavations to careful earthwork and site grading, our skilled team ensures that every site is prepared for lasting construction. Using modern machinery and proven techniques, we transform raw land into stable, level sites, ensuring that every structure built on it stands strong and safe. Our commitment to efficiency and quality guarantees that projects stay on schedule without compromising on excellence.",
    image: "/Images/our-services/Mass Earth Excavation.jpg",
    design: "left-image",
  },
  {
    id: 6,
    title: "Earthwork & Site Grading",
    description: "Transforming raw terrain into a solid foundation is at the heart of our expertise. At SKA Group, our earthwork and site grading services prepare every construction site with precision and care. Using advanced machinery and a skilled workforce, we cut, fill, and level the land to create stable, well-drained surfaces. This meticulous preparation ensures that every project begins on the strongest possible footing, combining efficiency, safety, and long-lasting quality.",
    image: "/Images/our-services/Mass Earth Excavation.jpg",
    design: "right-image",
  },
  {
    id: 7,
    title: "Owning Limestone Lease",
    description: "At SKA Group, our limestone reserves give us the power to consistently supply high-quality materials for our projects. By owning and managing our quarries, we ensure that every ton of limestone meets the highest standards, supporting construction and industrial projects alike. With a skilled team and modern equipment, we extract and process limestone responsibly, maintaining sustainability while delivering reliability and excellence to every client.",
    image: "/Images/our-services/Stone Products.jpg",
    design: "left-image",
  }
]

export default function OurServices() {
  return (
    <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
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
          className="text-sm font-medium text-gray-600 mb-4 lg:w-1/2"
        >
          • Our Services
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 g:w-1/2"
        >
          Comprehensive construction solutions with 
          <motion.span
            className="text-[#C39A41]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
           expertise and innovation
          </motion.span>
        </motion.h2>
      </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-20 last:mb-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                service.design === 'right-image' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <motion.div 
                  className={`${service.design === 'right-image' ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: service.design === 'right-image' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="space-y-6">
                    {/* Service Icon & Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Learn More Button */}
                    {/* <motion.button
                      className="inline-flex items-center px-6 py-3 bg-[#C39A41] text-black font-semibold rounded-lg hover:bg-[#C39A41]0 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button> */}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className={`${service.design === 'right-image' ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: service.design === 'right-image' ? -50 : 50 }}
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
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Service Number Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-[#C39A41] text-black font-bold rounded-full flex items-center justify-center">
                        {service.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Divider Line */}
              {index < services.length - 1 && (
                <motion.div 
                  className="mt-20 border-t border-gray-200"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}
