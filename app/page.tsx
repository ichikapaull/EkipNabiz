"use client"

import { Suspense } from "react"
import { ErrorBoundary } from "@/app/utils/error-boundary"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { ContactSection } from "@/components/sections/ContactSection"

// Styles
import "@/styles/animations.css"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <HeroSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <FeaturesSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <TestimonialsSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <PricingSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <ContactSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}
