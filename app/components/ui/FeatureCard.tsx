"use client"

import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  delay: number
}

export function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
    </motion.div>
  )
} 