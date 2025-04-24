"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Bell } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { SearchCommand } from "@/components/search-command"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "w-full transition-all duration-300",
        isScrolled
          ? "fixed top-0 z-50 bg-background/95 dark:bg-background/90 backdrop-blur-sm border-b shadow-sm"
          : "absolute top-0 left-0 right-0 bg-transparent z-50",
      )}
    >
      {/* Top Bar */}
      <div className="bg-emerald-900 dark:bg-emerald-950 text-white py-1.5">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <Badge variant="success" className="text-xs font-normal">
              New
            </Badge>
            <span className="hidden md:inline-block">Introducing PricePulse-AI: Real-time market price monitoring</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-emerald-100 hover:text-white transition-colors">
              Login
            </Link>
            <span className="text-emerald-500">|</span>
            <Link href="/register" className="text-emerald-100 hover:text-white transition-colors">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="ClyCites"
              width={40}
              height={40}
              className="rounded-full border-2 border-emerald-500"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-emerald-800 dark:text-emerald-300">ClyCites</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 -mt-1">
                Digital Agriculture Platform
              </span>
            </div>
          </Link>
          <MainNav />
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <SearchCommand />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Notifications</TooltipContent>
            </Tooltip>
            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </header>
  )
}
