"use client"

import { Testimonial } from "@/app/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm min-w-[300px] md:min-w-[400px] flex-shrink-0">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-zinc-600 flex items-center justify-center">
            <span className="text-white dark:text-zinc-900 text-lg">{testimonial.initial}</span>
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">{testimonial.title}</p>
          </div>
        </div>
        <p className="text-zinc-700 dark:text-zinc-300">"{testimonial.quote}"</p>
      </div>
    </div>
  )
} 