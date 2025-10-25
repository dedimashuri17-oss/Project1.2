import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { AppHeader } from "@/components/ui/app-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MASHURI",
  description: "Partner your business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-gray-50">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <AppHeader />
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
