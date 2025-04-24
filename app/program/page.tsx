import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const programs = [
  {
    title: "Farmer Training Program",
    description: "Comprehensive training for farmers on digital agriculture and market access.",
    image: "/images/agri.jpg",
    link: "/program/farmer-training",
  },
  {
    title: "Research Collaboration",
    description: "Joint research initiatives with universities and agricultural institutions.",
    image: "/images/agri.jpg",
    link: "/program/research",
  },
  {
    title: "Community Champions",
    description: "Empowering local leaders to drive agricultural innovation in their communities.",
    image: "/images/agri.jpg",
    link: "/program/champions",
  },
  {
    title: "Youth in Agriculture",
    description: "Engaging young people in modern agricultural practices and entrepreneurship.",
    image: "/images/agri.jpg",
    link: "/program/youth",
  },
  {
    title: "Women Empowerment",
    description: "Supporting women farmers with technology and market access.",
    image: "/images/agri.jpg",
    link: "/program/women",
  },
  {
    title: "Data Collection Network",
    description: "Building a network of data collectors for market price information.",
    image: "/images/agri.jpg",
    link: "/program/data-network",
  },
  {
    title: "Agricultural Innovation Hub",
    description: "A space for testing and developing new agricultural technologies.",
    image: "/images/agri.jpg",
    link: "/program/innovation-hub",
  },
  {
    title: "Market Access Initiative",
    description: "Connecting farmers directly with buyers through digital platforms.",
    image: "/images/agri.jpg",
    link: "/program/market-access",
  },
]

export default function ProgramPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-emerald-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Programs</h1>
            <p className="mt-6 text-lg text-gray-600">
              Opportunities and joint research collaborations to advance digital agriculture in Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Research Collaborations</h2>
            <p className="mt-4 text-lg text-gray-600">
              ClyCites collaborates with the global research community through programs, events, learning opportunities,
              and joint research endeavors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <Card key={program.title} className="border-0 shadow-md overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="p-0 h-auto">
                    <Link href={program.link} className="flex items-center text-emerald-600 hover:text-emerald-700">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-emerald-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Join Our Research Network</h2>
              <p className="mt-6 text-lg text-emerald-100">
                We're always looking for partners to collaborate on research initiatives that advance digital
                agriculture in Africa. Whether you're a university, research institution, or individual researcher, we'd
                love to hear from you.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 rounded-full">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-emerald-800 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-4">8+</div>
                <p className="text-emerald-100">African Cities</p>
              </div>
              <div className="bg-emerald-800 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-4">1500+</div>
                <p className="text-emerald-100">Community Champions</p>
              </div>
              <div className="bg-emerald-800 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-4">67+</div>
                <p className="text-emerald-100">Data Records</p>
              </div>
              <div className="bg-emerald-800 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-4">10+</div>
                <p className="text-emerald-100">Research Papers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
