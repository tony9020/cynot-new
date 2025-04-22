"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  asChild?: boolean
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  asChild = false,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Button
        className={cn("relative overflow-hidden group", className)}
        variant={variant}
        size={size}
        onClick={onClick}
        asChild={asChild}
        type={type}
        disabled={disabled}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <motion.span
          className="absolute inset-0 bg-white/20 z-0"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "100%", opacity: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </Button>
    </motion.div>
  )
}
