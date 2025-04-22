"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  centered?: boolean
  delay?: number
}

export default function SectionHeading({ title, subtitle, centered = true, delay = 0 }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 font-display"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
