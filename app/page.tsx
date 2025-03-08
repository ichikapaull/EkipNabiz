"use client"

import { Suspense } from "react"
import { ErrorBoundary } from "@/app/utils/error-boundary"
import { Header } from "@/app/components/layout/Header"
import { Footer } from "@/app/components/layout/Footer"
import { HeroSection } from "@/app/components/sections/HeroSection"
import { FeaturesSection } from "@/app/components/sections/FeaturesSection"
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection"
import { PricingSection } from "@/app/components/sections/PricingSection"
import { ContactSection } from "@/app/components/sections/ContactSection"

// Stiller
import "@/app/styles/animations.css"

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
