"use client"

import { SectionHeader } from "../ui/SectionHeader"
import { FeatureCard } from "../ui/FeatureCard"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-zinc-100 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="Powerful Features" subtitle="Everything you need to manage remote productivity" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            title="Real-time Tracking"
            description="Monitor productivity metrics in real-time with our intuitive dashboard."
            icon="📊"
            delay={0.1}
          />
          <FeatureCard
            title="Team Analytics"
            description="Gain insights into team performance and identify optimization opportunities."
            icon="📈"
            delay={0.2}
          />
          <FeatureCard
            title="Goal Setting"
            description="Set and track goals for individuals and teams to drive performance."
            icon="🎯"
            delay={0.3}
          />
          <FeatureCard
            title="Custom Reports"
            description="Generate detailed reports tailored to your organization's specific needs."
            icon="📝"
            delay={0.4}
          />
          <FeatureCard
            title="Integration Hub"
            description="Connect with your favorite tools like Slack, Asana, and Jira."
            icon="🔄"
            delay={0.5}
          />
          <FeatureCard
            title="Privacy-Focused"
            description="Ethical monitoring that respects employee privacy and builds trust."
            icon="🔒"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
} 