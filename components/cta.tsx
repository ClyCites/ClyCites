import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-emerald-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Invest In Us?</h2>
          <p className="mt-6 text-lg text-emerald-100">
            We're solving a real, urgent problem affecting millions of Ugandans—price instability and lack of market
            visibility. With a solid technical foundation, a clear impact model, and a growing demand for AI-powered
            economic tools, ClyCites' PricePulse-AI is poised to scale fast. Investing in us means backing a solution
            with both high social impact and strong commercial potential.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 rounded-full">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-emerald-800 rounded-full"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
