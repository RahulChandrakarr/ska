'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  {
    id: 1,
    name: "South East Central Railway",
    logo: "/Images/our-clients/b9ff03116249eb20a13bec6a2c4a474493b3da2f.png",
    category: "Government"
  },
  {
    id: 2,
    name: "IRCON International Limited",
    logo: "/Images/our-clients/719029823ed0a46f3f4c0629b95e5767615a61ef.png",
    category: "Infrastructure"
  },
  {
    id: 3,
    name: "SARDA ENERGY & MINERALS LTD",
    logo: "/Images/our-clients/a1e6060b949cd5332621319d0d2a8ac18bd83932.png",
    category: "Energy"
  },
  {
    id: 4,
    name: "Public Works Department",
    logo: "/Images/our-clients/43bc01333aa7c5723fc24a838ca1ac2762712191.png",
    category: "Government"
  },
  {
    id: 5,
    name: "ISL ENERGY LIMITED",
    logo: "/Images/our-clients/518d1038ebe43de7f6a55a018cba4908069d8e1a.png",
    category: "Energy"
  },
  {
    id: 6,
    name: "JINDAL POWER",
    logo: "/Images/our-clients/0ba963b0d4931163f23d81b062ba16bcae15ffc2.png",
    category: "Power"
  },
  {
    id: 7,
    name: "NECO GROUP OF INDUSTRIES",
    logo: "/Images/our-clients/252c0d426a66f20db3b51ec908aeacf96180f1e5.png",
    category: "Industrial"
  },
  {
    id: 8,
    name: "NBCC",
    logo: "/Images/our-clients/40fcf0cea8ec106465c52a7a5d9cc6d42a4fb522.png",
    category: "Construction"
  },
  {
    id: 9,
    name: "SHRI BAJRANG",
    logo: "/Images/our-clients/da7653584e41d8d4e17abdc1080bae42700a4ca6.png",
    category: "Power & Steel"
  },
  {
    id: 10,
    name: "CGWRD",
    logo: "/Images/our-clients/0072b895d31c30ccb5228f5d589de67d504d97fa.png",
    category: "Water Resources"
  },
  {
    id: 11,
    name: "RES",
    logo: "/Images/our-clients/aa2d6db3081316568046b65bcfc7bacead3e2a1a.png",
    category: "Engineering"
  },
  {
    id: 12,
    name: "PWD",
    logo: "/Images/our-clients/9b09d3a716a4a314e9c818b78e6f926c77eae79d.png",
    category: "Government"
  },
  {
    id: 13,
    name: "Infrastructure Development",
    logo: "/Images/our-clients/8b961382ef4685bd0982117ce0f6782078d0100b (2).png",
    category: "Development"
  }
]

export default function OurClients() {
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
          • Our Clients
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 g:w-1/2"
        >
          Proudly associated with leading corporations and government organizations who trust our commitment to 
          <motion.span
            className="text-[#C39A41]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            quality and excellence.
          </motion.span>
        </motion.h2>
      </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <motion.div
                  className="bg-gray-50 rounded-xl p-6 h-32 flex items-center justify-center border border-gray-100"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          
        </motion.div>
      </div>
    </section>
  )
}
