"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Search, Plus, AlertTriangle, TrendingDown, TrendingUp, Edit, Trash2, Filter } from "lucide-react"

const inventoryItems = [
  {
    id: 1,
    name: "Chicken Breast",
    category: "meat",
    current: 25,
    minimum: 50,
    unit: "kg",
    cost: 8.5,
    supplier: "Fresh Meats Co",
    lastRestocked: "2024-01-20",
    status: "low",
  },
  {
    id: 2,
    name: "Tomatoes",
    category: "vegetables",
    current: 15,
    minimum: 20,
    unit: "kg",
    cost: 3.2,
    supplier: "Garden Fresh",
    lastRestocked: "2024-01-22",
    status: "low",
  },
  {
    id: 3,
    name: "Mozzarella Cheese",
    category: "dairy",
    current: 8,
    minimum: 25,
    unit: "kg",
    cost: 12.0,
    supplier: "Dairy Delights",
    lastRestocked: "2024-01-18",
    status: "critical",
  },
  {
    id: 4,
    name: "Olive Oil",
    category: "pantry",
    current: 45,
    minimum: 30,
    unit: "L",
    cost: 15.99,
    supplier: "Mediterranean Oils",
    lastRestocked: "2024-01-21",
    status: "good",
  },
  {
    id: 5,
    name: "Fresh Basil",
    category: "herbs",
    current: 5,
    minimum: 15,
    unit: "bunches",
    cost: 2.5,
    supplier: "Herb Garden",
    lastRestocked: "2024-01-23",
    status: "critical",
  },
  {
    id: 6,
    name: "Ground Beef",
    category: "meat",
    current: 35,
    minimum: 40,
    unit: "kg",
    cost: 9.99,
    supplier: "Fresh Meats Co",
    lastRestocked: "2024-01-21",
    status: "low",
  },
]

export default function InventoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = inventoryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500"
      case "low":
        return "bg-orange-500"
      case "good":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "critical":
        return "destructive"
      case "low":
        return "secondary"
      case "good":
        return "default"
      default:
        return "outline"
    }
  }

  const criticalItems = inventoryItems.filter((item) => item.status === "critical").length
  const lowItems = inventoryItems.filter((item) => item.status === "low").length
  const totalValue = inventoryItems.reduce((sum, item) => sum + item.current * item.cost, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground">Track stock levels, manage suppliers, and monitor costs</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Inventory Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryItems.length}</div>
            <p className="text-xs text-muted-foreground">Active inventory items</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{criticalItems}</div>
            <p className="text-xs text-muted-foreground">Items need immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <TrendingDown className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{lowItems}</div>
            <p className="text-xs text-muted-foreground">Items running low</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp {totalValue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Current inventory value</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Items */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
          <CardDescription>Manage your restaurant's inventory and stock levels</CardDescription>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search inventory items..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="meat">Meat</TabsTrigger>
              <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
              <TabsTrigger value="dairy">Dairy</TabsTrigger>
              <TabsTrigger value="pantry">Pantry</TabsTrigger>
              <TabsTrigger value="herbs">Herbs</TabsTrigger>
            </TabsList>
            <TabsContent value={selectedCategory} className="mt-6">
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full Rp {getStatusColor(item.status)}`} />
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                              Supplier: {item.supplier} • Last restocked: {item.lastRestocked}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant={getStatusBadge(item.status) as any}>{item.status}</Badge>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-4 md:grid-cols-4">
                        <div>
                          <p className="text-sm text-gray-600">Current Stock</p>
                          <p className="text-lg font-semibold">
                            {item.current} {item.unit}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Minimum Level</p>
                          <p className="text-lg font-semibold">
                            {item.minimum} {item.unit}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Unit Cost</p>
                          <p className="text-lg font-semibold">Rp {item.cost}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Value</p>
                          <p className="text-lg font-semibold">Rp {(item.current * item.cost).toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Stock Level</span>
                          <span>{Math.round((item.current / item.minimum) * 100)}%</span>
                        </div>
                        <Progress value={(item.current / item.minimum) * 100} className="h-2" />
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
  )
}
