"use client"

import { useScroll, useTransform } from "framer-motion"

export function useScrollAnimation() {
  const { scrollY } = useScroll()
  const mapOpacity = useTransform(scrollY, [0, 300], [1, 0.2])
  const heroTextY = useTransform(scrollY, [0, 300], [0, 100])
  const heroTextOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return {
    scrollY,
    mapOpacity,
    heroTextY,
    heroTextOpacity,
  }
} 