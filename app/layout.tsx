import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/app/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RemoteMetrics - Distance Works, Data Proves",
  description: "Measure, analyze, and optimize your remote team's productivity with our cutting-edge analytics platform.",
  keywords: "remote work, productivity, analytics, team management, metrics, remote team",
  authors: [{ name: "RemoteMetrics", url: "https://remotemetrics.com" }],
  creator: "RemoteMetrics Team",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" }, // zinc-50
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },  // zinc-950
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'