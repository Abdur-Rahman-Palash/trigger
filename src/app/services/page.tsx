"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Heat Pumps",
    description: "Efficient, eco-friendly hot water solutions that save you money year-round.",
    color: "from-primary-500 to-primary-700",
    icon: "🔥",
    link: "/heat-pumps/overview"
  },
  {
    title: "Solar & Battery Systems",
    description: "Generate your own clean energy and reduce your electricity bills significantly.",
    color: "from-secondary-500 to-secondary-700",
    icon: "☀️",
    link: "/solar-battery"
  },
  {
    title: "Whole Home Water Filtration",
    description: "Enjoy clean, pure water from every tap in your home for drinking and bathing.",
    color: "from-accent-500 to-accent-700",
    icon: "💧",
    link: "/water-filtration"
  },
  {
    title: "Heating & Cooling",
    description: "Stay comfortable in every season with our efficient heating and cooling solutions.",
    color: "from-primary-600 to-secondary-600",
    icon: "❄️",
    link: "/heating-cooling"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Premium plumbing, electrical and energy solutions for Melbourne homes
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <span className="text-6xl">{service.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
