"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BarChart3, ShoppingCart, Users, LineChart, CloudSun, Bug } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "E-Market",
    description: "Connect directly with buyers and sell your produce at fair market prices without intermediaries.",
    icon: ShoppingCart,
  },
  {
    name: "Expert Portal",
    description: "Access agricultural experts for advice on crop management, disease control, and best practices.",
    icon: Users,
  },
  {
    name: "Agric Assistant",
    description: "AI-powered assistant to help with farming decisions, crop planning, and market timing.",
    icon: LineChart,
  },
  {
    name: "Price Monitoring",
    description: "Track real-time market prices to make informed decisions about when to sell your produce.",
    icon: BarChart3,
  },
  {
    name: "Weather Detection",
    description: "Get accurate weather forecasts and alerts to protect your crops from adverse conditions.",
    icon: CloudSun,
  },
  {
    name: "Pest & Disease Detection",
    description: "Identify and manage crop diseases and pests early with AI-powered image recognition.",
    icon: Bug,
  },
]

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ClyCites provides a comprehensive suite of tools to help farmers succeed in the digital agricultural
            marketplace.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.name} variants={itemVariants}>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle>{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
