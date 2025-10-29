import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, DollarSign, MapPin, Plus, ShoppingCart, TrendingUp, Users, Utensils, AlertTriangle } from "lucide-react"

export default function RestaurantDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jennie Finesa Aurora</h1>
          <p className="text-muted-foreground">Welcome back Jennie! Here's what's happening in your restaurant today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <MapPin className="mr-2 h-4 w-4" />
            Table View
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="mr-2 h-4 w-4" />
            New Order
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 2,847.50</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders Today</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 22.42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+3.2%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tables Occupied</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18/24</div>
            <p className="text-xs text-muted-foreground">75% occupancy rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Live Orders */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Live Orders
            </CardTitle>
            <CardDescription>Orders currently being prepared</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "#1247",
                  table: "Table 5",
                  items: "2x Margherita Pizza, 1x Caesar Salad",
                  time: "12 min",
                  status: "cooking",
                },
                {
                  id: "#1248",
                  table: "Table 12",
                  items: "1x Grilled Salmon, 2x House Wine",
                  time: "8 min",
                  status: "plating",
                },
                {
                  id: "#1249",
                  table: "Takeaway",
                  items: "3x Burger Combo, 1x Fries",
                  time: "15 min",
                  status: "cooking",
                },
                {
                  id: "#1250",
                  table: "Table 3",
                  items: "2x Pasta Carbonara, 1x Tiramisu",
                  time: "5 min",
                  status: "ready",
                },
              ].map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{order.id}</span>
                      <Badge variant="outline">{order.table}</Badge>
                      <Badge
                        variant={
                          order.status === "ready" ? "default" : order.status === "plating" ? "secondary" : "outline"
                        }
                        className={order.status === "ready" ? "bg-green-100 text-green-800" : ""}
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{order.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Table Status */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Table Status
            </CardTitle>
            <CardDescription>Current table occupancy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 24 }, (_, i) => i + 1).map((table) => {
                const isOccupied = table <= 18
                const needsService = [3, 7, 12, 15].includes(table)
                return (
                  // ...existing code...
                <div
                    key={table}
                    className={`
                      aspect-square rounded-lg border-2 flex items-center justify-center text-sm font-medium
                      ${ 
                        isOccupied
                          ? needsService
                            ? "bg-yellow-100 border-yellow-300 text-yellow-800"
                            : "bg-red-100 border-red-300 text-red-800"
                          : "bg-green-100 border-green-300 text-green-800"
                      }
                    `}
                  >
                    {table}
                  </div>
// ...existing code...
                )
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-100 border border-red-300 rounded"></div>
                <span>Occupied</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-100 border border-yellow-300 rounded"></div>
                <span>Needs Service</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Items & Staff Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="h-5 w-5" />
              Popular Items Today
            </CardTitle>
            <CardDescription>Best selling menu items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Margherita Pizza", orders: 23, revenue: "Rp 345.00", trend: "+15%" },
                { name: "Caesar Salad", orders: 18, revenue: "Rp 234.00", trend: "+8%" },
                { name: "Grilled Salmon", orders: 15, revenue: "Rp 420.00", trend: "+12%" },
                { name: "Burger Combo", orders: 12, revenue: "Rp 180.00", trend: "-3%" },
                { name: "Pasta Carbonara", orders: 11, revenue: "Rp 198.00", trend: "+5%" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.orders} orders • {item.revenue}
                    </p>
                  </div>
                  <Badge variant={item.trend.startsWith("+") ? "default" : "secondary"} className="text-xs">
                    {item.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Staff Performance
            </CardTitle>
            <CardDescription>Today's shift performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", role: "Server", orders: 45, tips: "Rp 127.50", rating: 4.8 },
                { name: "Mike Chen", role: "Chef", orders: 67, efficiency: "94%", rating: 4.9 },
                { name: "Emma Davis", role: "Server", orders: 38, tips: "Rp 98.25", rating: 4.6 },
                { name: "Carlos Rodriguez", role: "Bartender", orders: 29, tips: "Rp 156.75", rating: 4.7 },
              ].map((staff, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-orange-600">
                        {staff.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{staff.name}</p>
                      <p className="text-sm text-gray-500">{staff.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{staff.orders} orders</p>
                    <p className="text-xs text-gray-500">
                      {staff.tips || staff.efficiency} • ⭐ {staff.rating}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Inventory Alerts
          </CardTitle>
          <CardDescription>Items running low or expiring soon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { item: "Fresh Salmon", current: 5, minimum: 10, status: "low", expires: "2 days" },
              { item: "Mozzarella Cheese", current: 2, minimum: 8, status: "critical", expires: "1 day" },
              { item: "Tomatoes", current: 15, minimum: 20, status: "low", expires: "3 days" },
            ].map((alert, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{alert.item}</h4>
                  <Badge variant={alert.status === "critical" ? "destructive" : "secondary"}>{alert.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {alert.current} units</span>
                    <span>Min: {alert.minimum}</span>
                  </div>
                  <Progress value={(alert.current / alert.minimum) * 100} className="h-2" />
                  <p className="text-xs text-gray-500">Expires in {alert.expires}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
