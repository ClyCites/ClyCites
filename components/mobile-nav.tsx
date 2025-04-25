"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Add isScrolled prop to the MobileNav component
export function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden",
            !isScrolled && "text-white hover:text-white/90",
          )}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                pathname === "/" ? "text-foreground" : "text-foreground/60",
              )}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products" className="border-b-0">
                <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline sm:text-sm">
                  Products
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/products/analytics"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Analytics Dashboard
                    </Link>
                    <Link
                      href="/products/mobile-app"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Mobile App
                    </Link>
                    <Link
                      href="/products/weather"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Weather Detection
                    </Link>
                    <Link
                      href="/products/pest-detection"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Pest And Diseases Detection
                    </Link>
                    <Link
                      href="/products/soil-detection"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Soil PH Detection
                    </Link>
                    <Link
                      href="/products/e-market"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Agriculture E-Market
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="solutions" className="border-b-0">
                <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline sm:text-sm">
                  Solutions
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/disease"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Disease Control
                    </Link>
                    <Link
                      href="/nutrition"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Nutrition Monitoring
                    </Link>
                    <Link
                      href="/price-monitoring"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Price Monitoring
                    </Link>
                    <Link
                      href="/market-intelligence"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Market Intelligence
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="about" className="border-b-0">
                <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline sm:text-sm">
                  About
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/about"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/program"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Programs
                    </Link>
                    <Link
                      href="/resources"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Resources
                    </Link>
                    <Link
                      href="/contact"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col space-y-2 mt-4">
              <Button asChild variant="default" className="w-full">
                <Link href="/get-started" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
