import Image from "next/image"
import { CheckCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The Problem</h2>
            <div className="mt-8 space-y-8">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-amber-100 rounded-full p-2">
                      <span className="text-amber-600 font-bold text-xl">80%</span>
                    </div>
                    <span>Informal Market Reliance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    In Uganda, over 80% of the population relies on informal markets for their daily food and household
                    needs. Yet, these markets operate without a centralized system for tracking real-time prices.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Lack of Price Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Farmers, traders, and consumers often depend on word-of-mouth or outdated information, making it
                    difficult to make well-informed financial decisions. This lack of price visibility fuels market
                    inefficiencies and increases vulnerability to exploitation and price shocks.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>No Centralized Data Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    There is no centralized platform for collecting and analyzing historical market data. Without trends
                    or forecasts, businesses and households are left vulnerable to sudden price hikes or losses.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Solution</h2>
            <div className="mt-8 space-y-8">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>PricePulse-AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    PricePulse-AI is a price monitoring platform built to bridge the information gap. It allows
                    authorized agents to collect real-time price data from local markets and upload it via our mobile or
                    web platform.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Price Comparison</h3>
                    <p className="text-gray-600">
                      Consumers and businesses can access this data, compare prices across different regions, and make
                      more informed choices. This empowers them to buy or sell at the right time, improving economic
                      outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Forecasting</h3>
                    <p className="text-gray-600">
                      PricePulse-AI uses AI to analyze trends and predict future prices, giving users a forecasting tool
                      that helps them plan ahead and reduce financial risks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Marketplace</h3>
                    <p className="text-gray-600">
                      Our platform connects farmers directly with buyers, eliminating middlemen and ensuring fair prices
                      for agricultural products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.PNG-XxD0yJmZk7WvrjXY5IbJII5OGQ2ryV.png"
                  alt="PricePulse-AI Solution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
