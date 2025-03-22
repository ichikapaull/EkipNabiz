"use client"

import { SectionHeader } from "../ui/SectionHeader"
import { TestimonialCard } from "../ui/TestimonialCard"
import { testimonials } from "@/app/data/testimonials"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title="Customer Testimonials" subtitle="See what our customers are saying about us" />
        
        <div className="mt-16 relative">
          <div className="flex flex-nowrap gap-6 overflow-hidden">
            <div className="flex animate-marquee gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex animate-marquee2 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950 z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-950 z-10"></div>
        </div>
      </div>
    </section>
  )
} 