"use client"

// Üçüncü parti kütüphaneler
import { motion } from "framer-motion"

// Proje içi bileşenler
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "../ui/SectionHeader"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-950" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <SectionHeader title="Get in Touch" subtitle="Have questions? We're here to help." />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 id="contact-heading" className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center" aria-hidden="true">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    <a href="mailto:info@remotemetrics.com" className="hover:underline">info@tasmon.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center" aria-hidden="true">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center" aria-hidden="true">
                  <span className="text-xl">🌎</span>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-zinc-500 dark:text-zinc-400">Remote-first, with offices in San Francisco</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6" aria-labelledby="contact-form-heading">
              <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                  aria-required="true"
                />
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-zinc-600 hover:from-zinc-800 hover:to-black dark:hover:from-zinc-300 dark:hover:to-zinc-500"
                type="submit"
                aria-label="Send your message"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 