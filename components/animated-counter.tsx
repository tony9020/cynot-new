"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime

        const progressRatio = Math.min(progress / duration, 1)
        // Use easeOutExpo for a nice effect
        const easing = 1 - Math.pow(2, -10 * progressRatio)
        const currentCount = Math.floor(easing * end)

        setCount(currentCount)

        if (progressRatio < 1) {
          animationFrame = requestAnimationFrame(startAnimation)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(startAnimation)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
