"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

interface ParallaxProfileCardProps {
  name: string
  title: string
  imageSrc: string
  email: string
  githubUrl: string
  linkedinUrl: string
  websiteUrl?: string
  bio?: string
  variant?: "default" | "compact" | "full"
}

export default function ParallaxProfileCard({
  name,
  title,
  imageSrc,
  email,
  githubUrl,
  linkedinUrl,
  websiteUrl,
  bio,
  variant = "default",
}: ParallaxProfileCardProps) {
  // Create a reference to the container
  const cardRef = useRef<HTMLDivElement>(null)

  // Track mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Create smooth spring animations for the parallax effect
  const springConfig = { damping: 25, stiffness: 100 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  // Transform mouse position into background movement (opposite direction for depth)
  const bgX = useTransform(mouseXSpring, [-500, 500], [-25, 25])
  const bgY = useTransform(mouseYSpring, [-500, 500], [-25, 25])

  // Subtle card tilt effect
  const rotateX = useTransform(mouseYSpring, [-500, 500], [2, -2])
  const rotateY = useTransform(mouseXSpring, [-500, 500], [-2, 2])

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get container position
      const rect = cardRef.current?.getBoundingClientRect()
      if (!rect) return

      // Calculate mouse position relative to the center of the container
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Update motion values
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Determine image height based on variant
  const imageHeight = variant === "compact" ? "h-60" : variant === "full" ? "h-96" : "h-80"

  return (
    <motion.div
      ref={cardRef}
      className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden w-full max-w-md"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`relative ${imageHeight} overflow-hidden`}>
        {/* Parallax background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-[40px]"
          style={{
            x: bgX,
            y: bgY,
            scale: 1.2, // Slightly larger to allow movement without showing edges
          }}
        />

        {/* Parallax image */}
        <div className="w-full h-full relative z-10" >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-3xl font-serif text-white mb-1">{name}</h2>
        <p className="text-white/70 mb-4">{title}</p>

        {bio && variant === "full" && <p className="text-white/60 mb-6">{bio}</p>}

        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href={`mailto:${email}`}
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label={`Email ${name}`}
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Personal Website"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}