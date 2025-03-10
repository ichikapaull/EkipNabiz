"use client"

interface SectionHeaderProps {
  title: string
  subtitle: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
} 