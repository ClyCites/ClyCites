import Image from "next/image"
import { TrendingUp, ShieldCheck, LineChart } from "lucide-react"

export function Impact() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Expected Impact</h2>
          <p className="mt-4 text-lg text-gray-600">
            ClyCites' PricePulse-AI will transform agricultural markets and empower communities across Uganda and
            beyond.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 rounded-xl p-8">
            <TrendingUp className="h-12 w-12 text-emerald-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Price Transparency</h3>
            <p className="text-gray-600">
              Improve price transparency in Uganda's local markets, helping consumers avoid exploitation and helping
              sellers price competitively and fairly.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-xl p-8">
            <LineChart className="h-12 w-12 text-emerald-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic Edge</h3>
            <p className="text-gray-600">
              Our AI-powered forecasting engine will give traders, farmers, and households an economic edge by enabling
              them to anticipate and plan around price fluctuations.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-xl p-8">
            <ShieldCheck className="h-12 w-12 text-emerald-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Policy Planning</h3>
            <p className="text-gray-600">
              By centralizing this data, we'll also contribute to policy planning, market research, and food security
              strategies, particularly for vulnerable communities.
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.PNG-R2esSCLutxX5deZUdoq4FTUEeDj3jD.png"
            alt="Expected Impact"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
