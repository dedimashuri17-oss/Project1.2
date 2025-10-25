import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Download,
  Calendar,
  CreditCard,
  Receipt,
} from "lucide-react"

export default function FinancialPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
          <p className="text-muted-foreground">Track revenue, expenses, and profitability</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 28,456.12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Rp 16,775.77</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+32.8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37.1%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Revenue Chart */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Revenue Trend
                </CardTitle>
                <CardDescription>Daily revenue for the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-end justify-between gap-2">
                  {Array.from({ length: 30 }, (_, i) => {
                    const height = Math.random() * 80 + 20
                    return (
                      <div
                        key={i}
                        className="bg-orange-500 rounded-t flex-1 transition-all hover:opacity-80"
                        style={{ height: `Rp {height}%` }}
                      />
                    )
                  })}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>30 days ago</span>
                  <span>Today</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Expenses */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Expenses</CardTitle>
                <CardDescription>Largest expense categories this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Food Costs", amount: 12450.0, percentage: 43.7, color: "bg-red-500" },
                    { category: "Staff Wages", amount: 8900.0, percentage: 31.3, color: "bg-blue-500" },
                    { category: "Rent & Utilities", amount: 4200.0, percentage: 14.8, color: "bg-green-500" },
                    { category: "Equipment", amount: 1850.0, percentage: 6.5, color: "bg-yellow-500" },
                    { category: "Marketing", amount: 1056.12, percentage: 3.7, color: "bg-purple-500" },
                  ].map((expense, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{expense.category}</span>
                        <span>Rp {expense.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={expense.percentage} className="flex-1 h-2" />
                        <span className="text-xs text-muted-foreground w-12">{expense.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods & Daily Summary */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </CardTitle>
                <CardDescription>Revenue breakdown by payment type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { method: "Credit Card", amount: 18945.67, percentage: 65.2, transactions: 1247 },
                    { method: "Cash", amount: 7834.22, percentage: 27.0, transactions: 456 },
                    { method: "Digital Wallet", amount: 1987.45, percentage: 6.8, transactions: 189 },
                    { method: "Gift Cards", amount: 289.55, percentage: 1.0, transactions: 23 },
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{payment.method}</span>
                          <span className="text-sm text-gray-600">{payment.transactions} transactions</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <Progress value={payment.percentage} className="flex-1 mr-4 h-2" />
                          <span className="font-semibold">Rp {payment.amount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Daily Summary
                </CardTitle>
                <CardDescription>Today's financial performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-green-800">Revenue</p>
                      <p className="text-sm text-green-600">156 orders completed</p>
                    </div>
                    <p className="text-2xl font-bold text-green-700">Rp 3,247.89</p>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium text-red-800">Expenses</p>
                      <p className="text-sm text-red-600">Food costs & operations</p>
                    </div>
                    <p className="text-2xl font-bold text-red-700">Rp 1,987.45</p>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-800">Net Profit</p>
                      <p className="text-sm text-blue-600">38.8% margin</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-700">Rp 1,260.44</p>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span>Average Order Value</span>
                      <span className="font-medium">Rp 20.82</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Peak Hour</span>
                      <span className="font-medium">7:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Best Selling Item</span>
                      <span className="font-medium">Classic Burger</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analysis</CardTitle>
              <CardDescription>Detailed revenue breakdown and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Revenue analysis charts and detailed breakdowns would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Management</CardTitle>
              <CardDescription>Track and categorize all business expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-500">
                <PieChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Expense tracking and categorization tools would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Generate comprehensive financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { name: "Profit & Loss Statement", description: "Monthly P&L report", icon: TrendingUp },
                  { name: "Cash Flow Report", description: "Track money in and out", icon: DollarSign },
                  { name: "Tax Summary", description: "Quarterly tax preparation", icon: Receipt },
                ].map((report, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <report.icon className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                      <h3 className="font-semibold mb-2">{report.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Generate Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
