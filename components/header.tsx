"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex flex-row items-center lg:flex-1">
  <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5">
    <Image
      src="/cynotLogo.png"
      alt="Cynot Logo"
      width={60}
      height={20}
      priority
      className={cn("transition-all", scrolled ? "opacity-90" : "opacity-100")}
    />
    <div className="font-bold text-2xl text-yellow-400">CYNOT</div>
  </Link>
</div>


        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors",
              scrolled ? "text-gray-700" : "text-white",
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium leading-6 transition-colors relative py-2 px-1",
                scrolled ? "text-gray-900 hover:text-yellow-600" : "text-white/90 hover:text-white",
                pathname === item.href && (scrolled ? "text-yellow-600" : "text-white"),
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className={cn(
                "transition-all duration-300 relative overflow-hidden group",
                scrolled
                  ? "bg-yellow-600 hover:bg-yellow-700"
                  : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30",
              )}
            >
              <Link href="/contact">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-white/20 z-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-white"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="fixed inset-0 z-50">
              <div className="flex items-center justify-between p-4">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/cynotLogo.png"
                    alt="Cynot Logo"
                    width={120}
                    height={40}
                    priority
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-200">
                  <div className="space-y-2 py-6 px-4">
                    {navigation.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                            pathname === item.href && "text-yellow-600 bg-yellow-50",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                    >
                      <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                          Get Started
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
