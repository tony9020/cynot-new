"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function SectionTransition({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  }

  const initialVariant = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialVariant}
      animate={isInView ? { y: 0, x: 0, opacity: 1 } : initialVariant}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
