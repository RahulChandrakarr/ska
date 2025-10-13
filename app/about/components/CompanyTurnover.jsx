'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CompanyTurnover() {
  const skaGroupData = [
    { year: "2023-2024", turnover: "313.87" },
    { year: "2022-2023", turnover: "326.35" },
    { year: "2021-2022", turnover: "244.80" },
    { year: "2020-2021", turnover: "265.66" },
    { year: "2019-2020", turnover: "148.43" }
  ]

  const hillbrowData = [
    { year: "2023-2024", turnover: "135.96" },
    { year: "2022-2023", turnover: "105.75" },
    { year: "2021-2022", turnover: "168.09" },
    { year: "2020-2021", turnover: "106.87" },
    { year: "2019-2020", turnover: "90.52" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" text-center mb-16 lg:flex"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm font-medium text-gray-600 mb-4 lg:w-1/2"
            >
              • Company Turnover
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 "
            >
              Demonstrating consistent growth through 
              <motion.span
                className="text-yellow-400"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {" "}strong financial performance and strategic business development
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SKA Group Table */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                SKA Group (Financial Years)
              </motion.h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-yellow-400">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Year</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Turnover (in Cr.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skaGroupData.map((row, index) => (
                      <motion.tr
                        key={row.year}
                        className="border-b border-gray-200 hover:bg-yellow-50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <td className="py-3 px-4 text-gray-700">{row.year}</td>
                        <td className="py-3 px-4 text-right font-semibold text-gray-900">{row.turnover}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Hillbrow Division Table */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Hillbrow Division (Financial Years)
              </motion.h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-yellow-400">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Year</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Turnover (in Cr.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hillbrowData.map((row, index) => (
                      <motion.tr
                        key={row.year}
                        className="border-b border-gray-200 hover:bg-yellow-50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <td className="py-3 px-4 text-gray-700">{row.year}</td>
                        <td className="py-3 px-4 text-right font-semibold text-gray-900">{row.turnover}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      
    </section>
  )
}
