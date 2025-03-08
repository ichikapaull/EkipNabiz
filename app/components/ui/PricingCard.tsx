"use client"

// Üçüncü parti kütüphaneler
import { motion } from "framer-motion"
import { Check } from "lucide-react"

// Proje içi bileşenler ve yardımcı fonksiyonlar
import { Button } from "@/components/ui/button"
import { cn } from "@/app/utils/cn"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  highlighted?: boolean
  delay: number
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted,
  delay,
}: PricingCardProps) {
  const cardId = `pricing-card-${title.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <motion.div
      className={cn(
        "bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300",
        highlighted && "border-2 border-blue-500",
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      role="article"
      aria-labelledby={`${cardId}-title`}
    >
      <h3 id={`${cardId}-title`} className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400 mb-4">{description}</p>
      <div className="text-4xl font-bold mb-4" aria-label={`Price: ${price}`}>{price}</div>
      <ul className="space-y-2 mb-6" aria-label="Features">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
            <Check className="h-4 w-4 text-green-500" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Button 
        className="w-full bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-zinc-600 hover:from-zinc-800 hover:to-black dark:hover:from-zinc-300 dark:hover:to-zinc-500"
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </motion.div>
  )
} 