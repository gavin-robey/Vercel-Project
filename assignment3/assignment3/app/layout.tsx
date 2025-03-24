import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and work experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ overflow: "hidden" }}>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#5E383D] to-[#181E41]">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  )
}

