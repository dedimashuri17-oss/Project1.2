import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DollarSign, ShoppingCart, TrendingUp, Users, Clock, AlertTriangle, Store } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back Jennie! Here's your restaurant performance today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">View Reports</Button>
          <Button className="bg-orange-600 hover:bg-orange-700">New Order</Button>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 3,247.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.2%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders Completed</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+23</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 20.82</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.1%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Currently dining</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Orders */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Orders
            </CardTitle>
            <CardDescription>Latest customer orders and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "#1256",
                  customer: "Table 8",
                  items: "2x Burger, 1x Fries, 2x Coke",
                  amount: "Rp 45.50",
                  status: "completed",
                  time: "2 min ago",
                },
                {
                  id: "#1255",
                  customer: "John Doe",
                  items: "1x Pizza Margherita, 1x Salad",
                  amount: "Rp 28.90",
                  status: "preparing",
                  time: "5 min ago",
                },
                {
                  id: "#1254",
                  customer: "Table 12",
                  items: "3x Pasta, 2x Wine",
                  amount: "Rp 67.80",
                  status: "served",
                  time: "8 min ago",
                },
                {
                  id: "#1253",
                  customer: "Sarah M.",
                  items: "1x Steak, 1x Soup",
                  amount: "Rp 42.00",
                  status: "completed",
                  time: "12 min ago",
                },
              ].map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{order.id}</span>
                      <span className="text-sm text-gray-600">{order.customer}</span>
                      <Badge
                        variant={
                          order.status === "completed" ? "default" : order.status === "served" ? "secondary" : "outline"
                        }
                        className={
                          order.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "served"
                              ? "bg-blue-100 text-blue-800"
                              : ""
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Kitchen Efficiency</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Customer Satisfaction</span>
                <span>4.8/5</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Order Accuracy</span>
                <span>98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Staff Performance</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Popular Items */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              System Alerts
            </CardTitle>
            <CardDescription>Important notifications requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "inventory", message: "Chicken breast running low (5 units left)", priority: "high" },
                { type: "equipment", message: "Freezer #2 temperature warning", priority: "critical" },
                { type: "staff", message: "Evening shift understaffed", priority: "medium" },
                { type: "inventory", message: "Fresh herbs need restocking", priority: "low" },
              ].map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 Rp {
                      alert.priority === "critical"
                        ? "bg-red-500"
                        : alert.priority === "high"
                          ? "bg-orange-500"
                          : alert.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm">{alert.message}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {alert.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="h-5 w-5" />
              Top Selling Items
            </CardTitle>
            <CardDescription>Most popular menu items today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Classic Burger", sold: 28, revenue: "Rp 420.00", change: "+12%" },
                { name: "Margherita Pizza", sold: 22, revenue: "Rp 374.00", change: "+8%" },
                { name: "Caesar Salad", sold: 19, revenue: "Rp 247.00", change: "+15%" },
                { name: "Grilled Chicken", sold: 16, revenue: "Rp 288.00", change: "+5%" },
                { name: "Fish & Chips", sold: 14, revenue: "Rp 238.00", change: "-2%" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.sold} sold • {item.revenue}
                    </p>
                  </div>
                  <Badge
                    variant={item.change.startsWith("+") ? "default" : "secondary"}
                    className={item.change.startsWith("+") ? "bg-green-100 text-green-800" : ""}
                  >
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
