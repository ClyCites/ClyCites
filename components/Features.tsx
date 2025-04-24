import { BarChart3, ShoppingCart, Users, LineChart, CloudSun, Bug } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            ClyCites provides a comprehensive suite of tools to help farmers succeed in the digital agricultural
            marketplace.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.name} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
