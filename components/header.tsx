"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#",
    dropdown: [
      { name: "Analytics Dashboard", href: "/products/analytics" },
      { name: "Mobile App", href: "/products/mobile-app" },
      { name: "Weather Detection", href: "/products/weather" },
      { name: "Pest And Diseases Detection", href: "/products/pest-detection" },
      { name: "Soil PH Detection", href: "/products/soil-detection" },
      { name: "Agriculture E-Market", href: "/products/e-market" },
    ],
  },
  {
    name: "Solutions",
    href: "#",
    dropdown: [
      { name: "Disease Control", href: "/disease" },
      { name: "Nutrition Monitoring", href: "/nutrition" },
      { name: "Price Monitoring", href: "/price-monitoring" },
      { name: "Market Intelligence", href: "/market-intelligence" },
      { name: "Expert Portal", href: "/expert-portal" },
      { name: "Agric Assistant", href: "/agric-assistant" },
    ],
  },
  {
    name: "About",
    href: "#",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Resources", href: "/resources" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
      { name: "Events", href: "/events" },
      { name: "Programs", href: "/program" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="bg-emerald-50 py-1.5">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-emerald-700 font-medium">PricePulse-AI</span>
            <span className="hidden md:inline-block text-gray-600">Empowering farmers with digital solutions</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-emerald-700">
              Login
            </Link>
            <Link href="/register" className="text-gray-600 hover:text-emerald-700">
              Register
            </Link>
          </div>
        </div>
      </div>

      <nav className="container flex items-center justify-between py-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image src="/images/logo.jpeg" alt="ClyCites" width={50} height={50} className="rounded-full" />
            <span className="font-bold text-2xl text-gray-800">ClyCites</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col gap-6 mt-6">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-3">
                  {item.dropdown ? (
                    <>
                      <div className="font-medium text-lg">{item.name}</div>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-emerald-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-medium text-lg text-gray-900 hover:text-emerald-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 space-y-3">
                <Button asChild className="w-full" variant="default">
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="inline-flex items-center text-gray-700 hover:text-emerald-700 font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href}>{subItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`text-base font-medium ${
                    pathname === item.href ? "text-emerald-700" : "text-gray-700 hover:text-emerald-700"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
