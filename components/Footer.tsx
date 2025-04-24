"use client"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white">
      {/* Newsletter Section */}
      <div className="container py-12">
        <div className="relative overflow-hidden rounded-2xl bg-emerald-800 p-8 md:p-10">
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-center opacity-10"></div>
          <div className="relative grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold tracking-tight">Subscribe to our newsletter</h3>
              <p className="mt-2 text-emerald-100">
                Get the latest updates on agricultural trends, market prices, and ClyCites features.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-emerald-700/50 border-emerald-600 text-white placeholder:text-emerald-300"
                />
                <Button className="bg-white text-emerald-900 hover:bg-emerald-100">Subscribe</Button>
              </div>
              <p className="text-xs text-emerald-300">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/logo.jpeg"
                alt="ClyCites"
                width={60}
                height={60}
                className="rounded-full border-2 border-emerald-500"
              />
              <span className="font-bold text-2xl">ClyCites</span>
            </Link>
            <p className="mt-4 text-emerald-100 max-w-md">
              An opensource platform that helps professional and upcoming farmers to get into the trade digitally,
              market and sell their farm produces, and communicate with potential customers.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="https://facebook.com/ClyCites"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/ClyCites"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/ClyCites"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/ClyCites"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://youtube.com/ClyCites"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/ClyCites"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/analytics" className="text-emerald-100 hover:text-white transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="/products/mobile-app" className="text-emerald-100 hover:text-white transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/products/e-market" className="text-emerald-100 hover:text-white transition-colors">
                  E-Market
                </Link>
              </li>
              <li>
                <Link href="/products/pest-detection" className="text-emerald-100 hover:text-white transition-colors">
                  Pest Detection
                </Link>
              </li>
              <li>
                <Link href="/products/soil-detection" className="text-emerald-100 hover:text-white transition-colors">
                  Soil Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/disease" className="text-emerald-100 hover:text-white transition-colors">
                  Disease Control
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="text-emerald-100 hover:text-white transition-colors">
                  Nutrition Monitoring
                </Link>
              </li>
              <li>
                <Link href="/price-monitoring" className="text-emerald-100 hover:text-white transition-colors">
                  Price Monitoring
                </Link>
              </li>
              <li>
                <Link href="/market-intelligence" className="text-emerald-100 hover:text-white transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/expert-portal" className="text-emerald-100 hover:text-white transition-colors">
                  Expert Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-100">
                  Bugema University
                  <br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@clycites.com" className="text-emerald-100 hover:text-white transition-colors">
                  info@clycites.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+256123456789" className="text-emerald-100 hover:text-white transition-colors">
                  +256 123 456 789
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Badge variant="success" className="mb-2">
                We're Hiring!
              </Badge>
              <p className="text-sm text-emerald-100">Join our team and help transform agriculture in Africa.</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 border-emerald-600 text-emerald-100 hover:bg-emerald-800 hover:text-white"
              >
                View Careers <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-emerald-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-emerald-300">© {new Date().getFullYear()} ClyCites. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-emerald-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-emerald-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-emerald-300 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
