import Image from "next/image"
import { Percent } from "lucide-react"

export function BusinessModel() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Business & Revenue Model</h2>
            <p className="mt-6 text-lg text-gray-600">
              PricePulse-AI operates on a freemium model for consumers and micro-businesses, while offering premium
              analytics and forecasting tools for businesses, government agencies, and NGOs via subscription.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We will also partner with agritech firms and market cooperatives for B2B licensing and data-sharing deals.
              Our business model supports scalability across East Africa.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Percent className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900">Revenue Split</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Institutional Subscriptions</span>
                      <span className="text-gray-700 font-medium">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Analytics Services</span>
                      <span className="text-gray-700 font-medium">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Percent className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900">User Adoption</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Mobile Users</span>
                      <span className="text-gray-700 font-medium">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Web-based Users</span>
                      <span className="text-gray-700 font-medium">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.PNG-S8umK2JJbGQ2KOImipJ0FLBtBrXcSt.png"
              alt="Business & Revenue Model"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Scalable Model</h3>
              <p className="text-gray-600">
                Our business model is designed to scale across East Africa, with a focus on Uganda initially.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
