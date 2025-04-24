import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/images/logo.jpeg" alt="ClyCites" width={60} height={60} className="rounded-full" />
              <span className="font-bold text-2xl text-gray-800">ClyCites</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              An opensource platform that helps professional and upcoming farmers to get into the trade digitally,
              market and sell their farm produces, and communicate with potential customers.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="max-w-xs" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/analytics" className="text-gray-600 hover:text-emerald-700">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="/products/mobile-app" className="text-gray-600 hover:text-emerald-700">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/products/e-market" className="text-gray-600 hover:text-emerald-700">
                  E-Market
                </Link>
              </li>
              <li>
                <Link href="/products/expert-portal" className="text-gray-600 hover:text-emerald-700">
                  Expert Portal
                </Link>
              </li>
              <li>
                <Link href="/products/agric-assistant" className="text-gray-600 hover:text-emerald-700">
                  Agric Assistant
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-emerald-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-emerald-700">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-emerald-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-600 hover:text-emerald-700">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-700">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Connect with us</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="https://facebook.com/ClyCites"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-600"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/ClyCites"
                aria-label="Twitter"
                className="text-gray-600 hover:text-blue-400"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com/ClyCites"
                aria-label="Instagram"
                className="text-gray-600 hover:text-pink-600"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/company/ClyCites"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-700"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://youtube.com/ClyCites"
                aria-label="YouTube"
                className="text-gray-600 hover:text-red-600"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/ClyCites"
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <address className="not-italic text-gray-600">
                <p>Bugema University</p>
                <p>Kampala, Uganda</p>
                <p className="mt-2">Email: info@clycites.com</p>
                <p>Phone: +256 123 456 789</p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© {new Date().getFullYear()} ClyCites. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-emerald-700">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-emerald-700">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-emerald-700">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
