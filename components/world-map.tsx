"use client"

import { useRef, useEffect, useState, memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"

// Lazy load the DottedMap library to avoid SSR issues
import dynamic from "next/dynamic"

// Define a type for the DottedMap class
interface DottedMapType {
  new (options: { height: number; grid: string; backgroundColor: string }): {
    getSVG(options: { radius: number; color: string; shape: string; backgroundColor: string }): string
  }
}

// Dynamically import the DottedMap library
const DottedMapModule = dynamic(() => import("dotted-map").then((mod) => mod.default as DottedMapType), { ssr: false })

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
  onAnimationComplete?: () => void
}

// Pre-defined map data to avoid recalculation
const createMapSvg = async (isDark: boolean, DottedMap: DottedMapType) => {
  try {
    const map = new DottedMap({
      height: 60, // Reduced height for better performance
      grid: "diagonal",
      backgroundColor: "transparent",
    })

    return map.getSVG({
      radius: 0.22,
      color: isDark ? "#FFFFFF30" : "#00000030", // Reduced opacity
      shape: "circle",
      backgroundColor: "transparent",
    })
  } catch (error) {
    console.error("Error creating map SVG:", error)
    return ""
  }
}

// Memoized map component for better performance
export const WorldMap = memo(function WorldMap({ dots = [], lineColor = "#4b5563", onAnimationComplete }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const [mapSvg, setMapSvg] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Generate map SVG only once when theme changes
  useEffect(() => {
    setIsLoading(true)

    // Use setTimeout to avoid blocking the main thread
    const timer = setTimeout(async () => {
      try {
        // Import the DottedMap module
        const DottedMap = await import("dotted-map").then((mod) => mod.default)

        // Create the SVG
        const svg = await createMapSvg(isDark, DottedMap)
        setMapSvg(svg)
      } catch (error) {
        console.error("Failed to create map:", error)
      } finally {
        setIsLoading(false)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isDark])

  // Track animation completion
  useEffect(() => {
    if (animationCompleted && onAnimationComplete) {
      onAnimationComplete()
    }
  }, [animationCompleted, onAnimationComplete])

  // Optimized point projection
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  // Optimized path creation
  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 30 // Reduced curve height
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  // Reduced number of default dots for better performance
  const defaultDots = [
    {
      start: { lat: 40.7128, lng: -74.006 }, // New York
      end: { lat: 51.5074, lng: -0.1278 }, // London
    },
    {
      start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
      end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
    },
    {
      start: { lat: -33.8688, lng: 151.2093 }, // Sydney
      end: { lat: 19.076, lng: 72.8777 }, // Mumbai
    },
  ]

  const dotsToRender = dots.length > 0 ? dots : defaultDots

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center dark:bg-zinc-950 bg-zinc-50">
        <div className="w-8 h-8 border-4 border-zinc-300 dark:border-zinc-700 border-t-zinc-800 dark:border-t-zinc-300 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="w-full h-full dark:bg-zinc-950 bg-zinc-50 relative font-sans">
      {mapSvg && (
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          height={400}
          width={800}
          draggable={false}
          priority
        />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dotsToRender.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                  opacity: 0.7,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.7,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => {
                  if (i === dotsToRender.length - 1) {
                    setAnimationCompleted(true)
                  }
                }}
              />
            </g>
          )
        })}

        {dotsToRender.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate attributeName="r" from="2" to="6" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate attributeName="r" from="2" to="6" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
})

WorldMap.displayName = "WorldMap"

