"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface BlurImageProps {
  src: string
  alt: string
  className?: string
}

export default function BlurImage({ src, alt, className = "" }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setIsLoaded(true)
    }
  }, [src])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gray-200"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}
