"use client"

// 1. React/Next.js kütüphaneleri
import { useState } from "react"
import dynamic from "next/dynamic"

// 2. Üçüncü parti kütüphaneler
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

// 3. Proje içi bileşenler/modüller
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation"

// World Map bileşenini dinamik olarak import ediyoruz
const WorldMap = dynamic(() => import("../../components/world-map").then((mod) => mod.WorldMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" aria-label="Harita yükleniyor">
      <div className="w-8 h-8 border-4 border-zinc-300 dark:border-zinc-700 border-t-zinc-800 dark:border-t-zinc-300 rounded-full animate-spin"></div>
    </div>
  ),
})

export function HeroSection() {
  const [mapAnimationComplete, setMapAnimationComplete] = useState(false)
  const { mapOpacity, heroTextY, heroTextOpacity } = useScrollAnimation()

  return (
    <section 
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden" 
      aria-labelledby="hero-heading"
    >
      <motion.div style={{ opacity: mapOpacity }} className="absolute inset-0 z-0 h-full" aria-hidden="true">
        <WorldMap lineColor="#4b5563" onAnimationComplete={() => setMapAnimationComplete(true)} />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 text-center z-10"
        style={{ y: heroTextY, opacity: heroTextOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: mapAnimationComplete ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          id="hero-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-zinc-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mapAnimationComplete ? 1 : 0, y: mapAnimationComplete ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Distance Works, Data Proves
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mapAnimationComplete ? 1 : 0, y: mapAnimationComplete ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Measure, analyze, and optimize your remote team's productivity with our cutting-edge analytics platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mapAnimationComplete ? 1 : 0, y: mapAnimationComplete ? 0 : 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            className="bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-zinc-600 hover:from-zinc-800 hover:to-black dark:hover:from-zinc-300 dark:hover:to-zinc-500 text-lg py-6 px-8"
            aria-label="Start Free Trial"
          >
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-lg py-6 px-8"
            aria-label="Watch Demo"
          >
            Watch Demo
          </Button>
        </motion.div>

        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" 
          aria-hidden="true"
        >
          <ChevronRight size={24} className="rotate-90 text-zinc-500" />
        </div>
      </motion.div>
    </section>
  )
} 