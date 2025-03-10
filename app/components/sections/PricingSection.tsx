"use client"

import { SectionHeader } from "../ui/SectionHeader"
import { PricingCard } from "../ui/PricingCard"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-zinc-100 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="Pricing" subtitle="Choose the plan that works for your team" />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <PricingCard
            title="Starter"
            price="$9"
            description="Perfect for small teams just getting started with remote work."
            features={["Up to 10 team members", "Basic productivity metrics", "Weekly reports", "Email support"]}
            buttonText="Start Free Trial"
            delay={0.1}
          />

          <PricingCard
            title="Professional"
            price="$29"
            description="Ideal for growing teams that need more advanced features."
            features={[
              "Up to 50 team members",
              "Advanced productivity metrics",
              "Daily reports",
              "Integration with 5 tools",
              "Priority email support",
            ]}
            buttonText="Start Free Trial"
            highlighted={true}
            delay={0.2}
          />

          <PricingCard
            title="Enterprise"
            price="$99"
            description="For large organizations requiring comprehensive solutions."
            features={[
              "Unlimited team members",
              "Custom productivity metrics",
              "Real-time reports",
              "Integration with all tools",
              "24/7 dedicated support",
              "Custom onboarding",
            ]}
            buttonText="Contact Sales"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
} 