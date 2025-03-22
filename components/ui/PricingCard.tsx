"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
}

export function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  buttonText = "Get Started"
}: PricingCardProps) {
  return (
    <motion.div 
      className={`
        bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-xl
        ${popular ? 'border-2 border-zinc-900 dark:border-zinc-400 relative' : 'border border-zinc-200 dark:border-zinc-800'}
      `}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-zinc-500 dark:text-zinc-400 ml-2">/month</span>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
            <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${
          popular 
            ? 'bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-zinc-600 hover:from-zinc-800 hover:to-black dark:hover:from-zinc-300 dark:hover:to-zinc-500' 
            : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
        }`}
        aria-label={`${buttonText} for ${title} plan`}
      >
        {buttonText}
      </Button>
    </motion.div>
  )
} 