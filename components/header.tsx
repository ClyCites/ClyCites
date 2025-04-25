"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Bell, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { SearchCommand } from "@/components/search-command"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { setTheme, theme } = useTheme()

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
      <div
        className={cn(
          "container flex h-16 items-center justify-between transition-colors duration-300",
          isScrolled ? "text-foreground" : "text-white",
        )}
      >
        <div className="flex items-center gap-2">
          <MobileNav isScrolled={isScrolled} />
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="ClyCites"
              width={40}
              height={40}
              className={cn(
                "rounded-full transition-all duration-300",
                isScrolled ? "border-2 border-emerald-500" : "border-2 border-white",
              )}
            />
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-xl transition-colors duration-300",
                  isScrolled ? "text-emerald-800 dark:text-emerald-300" : "text-white",
                )}
              >
                ClyCites
              </span>
              <span
                className={cn(
                  "text-[10px] -mt-1 transition-colors duration-300",
                  isScrolled ? "text-emerald-600 dark:text-emerald-400" : "text-emerald-100",
                )}
              >
                Digital Agriculture Platform
              </span>
            </div>
          </Link>
          <MainNav isScrolled={isScrolled} />
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <SearchCommand
              className={cn(!isScrolled && "bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30 text-white")}
            />

            {/* Theme Switcher */}
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className={cn(
                        "rounded-full",
                        !isScrolled && "bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30",
                      )}
                    >
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent>Change theme</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "rounded-full",
                    !isScrolled && "bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30",
                  )}
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Notifications</TooltipContent>
            </Tooltip>
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                variant="outline"
                className={cn(
                  "rounded-full",
                  !isScrolled && "bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30",
                )}
              >
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

      {/* Transparent gradient overlay for better text legibility when header is transparent */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none z-[-1]"></div>
      )}
    </header>
  )
}
