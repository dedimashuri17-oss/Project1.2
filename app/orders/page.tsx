"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, ShoppingCart, Minus, Trash2, CreditCard, Clock } from "lucide-react"

const menuItems = [
  { id: 1, name: "Classic Burger", price: 15.99, category: "mains", image: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Margherita Pizza", price: 18.5, category: "mains", image: "/placeholder.svg?height=80&width=80" },
  { id: 3, name: "Caesar Salad", price: 12.99, category: "salads", image: "/placeholder.svg?height=80&width=80" },
  { id: 4, name: "Grilled Chicken", price: 22.99, category: "mains", image: "/placeholder.svg?height=80&width=80" },
  { id: 5, name: "Fish & Chips", price: 19.99, category: "mains", image: "/placeholder.svg?height=80&width=80" },
  { id: 6, name: "Chocolate Cake", price: 8.99, category: "desserts", image: "/placeholder.svg?height=80&width=80" },
  { id: 7, name: "Coffee", price: 4.5, category: "beverages", image: "/placeholder.svg?height=80&width=80" },
  { id: 8, name: "Fresh Juice", price: 6.99, category: "beverages", image: "/placeholder.svg?height=80&width=80" },
]

export default function OrdersPage() {
  const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number }>>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const addToCart = (item: (typeof menuItems)[0]) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, change: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
          }
          return item
        })
        .filter((item) => item.quantity > 0)
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Order Management</h1>
          <p className="text-muted-foreground">Process new orders and manage current orders</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Menu Items */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Menu Items</CardTitle>
              <CardDescription>Select items to add to order</CardDescription>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search menu items..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="mains">Mains</TabsTrigger>
                  <TabsTrigger value="salads">Salads</TabsTrigger>
                  <TabsTrigger value="desserts">Desserts</TabsTrigger>
                  <TabsTrigger value="beverages">Drinks</TabsTrigger>
                </TabsList>
                <TabsContent value={selectedCategory} className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {filteredItems.map((item) => (
                      <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-lg font-bold text-orange-600">Rp {item.price}</p>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => addToCart(item)}
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Order Cart */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Current Order
              </CardTitle>
              <CardDescription>Items in cart</CardDescription>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No items in cart</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">Rp {item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-orange-600">Rp {cartTotal.toFixed(2)}</span>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Process Payment
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Save as Draft
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: "#1256", customer: "Table 8", amount: "Rp 45.50", status: "completed" },
                  { id: "#1255", customer: "John Doe", amount: "Rp 28.90", status: "preparing" },
                  { id: "#1254", customer: "Table 12", amount: "Rp 67.80", status: "served" },
                ].map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="font-medium text-sm">{order.id}</p>
                      <p className="text-xs text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{order.amount}</p>
                      <Badge variant="outline" className="text-xs">
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
