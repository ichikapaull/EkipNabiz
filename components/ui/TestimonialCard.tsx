"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-2xl text-zinc-400 dark:text-zinc-500 mb-6">"</div>
      <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">{role}, {company}</p>
      </div>
    </motion.div>
  )
} 