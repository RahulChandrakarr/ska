'use client';

import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Expert Team",
      description: "Our experienced professionals bring years of expertise to every project."
    },
    {
      title: "Quality Service",
      description: "We maintain the highest standards in all our deliverables."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your success."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-slate-300">
            We deliver excellence in every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
