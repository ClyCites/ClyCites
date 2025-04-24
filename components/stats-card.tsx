"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function StatsCard() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: "African Cities", value: "8+", suffix: "" },
    { label: "Community Champions", value: "1500+", suffix: "" },
    { label: "Data Records", value: "67", suffix: "K+" },
    { label: "Research Papers", value: "10+", suffix: "" },
    { label: "Partners", value: "300+", suffix: "" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 py-12">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center bg-white dark:bg-emerald-900 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                {stat.value}
                {stat.suffix}
              </h3>
              <p className="text-gray-600 dark:text-emerald-100 text-center">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
