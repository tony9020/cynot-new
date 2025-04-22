"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>

      {/* Scroll to top button */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.button
            onClick={scrollToTop}
            className="bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-full transform -translate-y-1/2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Scroll to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 font-display">Cynot Technologies</h3>
            <div className="h-16 w-auto mb-4">
              <Image
                src="/cynotLogo.png"
                alt="Cynot Logo"
                width={75}  // Adjust based on your logo's aspect ratio
                height={32}   // Adjust based on your logo's aspect ratio
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Building innovative solutions for a better tomorrow. Our commitment to excellence and sustainability
              drives everything we do.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Rest of your footer content remains the same */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1 border-b border-transparent hover:border-yellow-500"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 font-display">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Enterprise Solutions", href: "/services#enterprise" },
                { name: "Sustainable Development", href: "/services#sustainable" },
                { name: "Global Connectivity", href: "/services#global" },
                { name: "Digital Transformation", href: "/services#digital" },
                { name: "Strategic Consulting", href: "/services#consulting" },
                { name: "Innovation Labs", href: "/services#innovation" },
              ].map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1 border-b border-transparent hover:border-yellow-500"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 font-display">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                <address className="not-italic text-gray-400">
  <p>Chirayath Arcade</p>
  <p>Koratty, Thrissur, Kerala 680308</p>
  <p>India</p>
</address>

              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <a href="mailto:info@novusglobal.com" className="text-gray-400 hover:text-white transition-colors">
                  cynottechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                <a href="tel:+919020555800" className="text-gray-400 hover:text-white transition-colors">
                +91 9020555800
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {currentYear} Cynot Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms-of-service" },
              { name: "Sitemap", href: "/sitemap" },
            ].map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}