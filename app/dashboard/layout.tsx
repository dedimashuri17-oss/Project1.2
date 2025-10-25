import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { RestaurantSidebar } from "@/components/ui/restaurant-sidebar"
import { RestaurantHeader } from "@/components/ui/restaurant-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <RestaurantSidebar />
        <div className="flex-1 flex flex-col">
          <RestaurantHeader />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
