import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Edit2,
  PlusCircle,
  TrendingUp,
  Wallet,
  Wheat,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
}

const EXPENSE_CATEGORIES = [
  {
    key: "Seeds",
    label: "Seeds",
    icon: "🌱",
    desc: "Wheat seeds, Paddy seeds",
    amount: 8200,
  },
  {
    key: "Fertilizer",
    label: "Fertilizer",
    icon: "🧪",
    desc: "Urea, DAP, Potash",
    amount: 12400,
  },
  {
    key: "Labour",
    label: "Labour",
    icon: "👨‍🌾",
    desc: "Harvesting, Sowing",
    amount: 14600,
  },
  {
    key: "Water",
    label: "Water / Electricity",
    icon: "💧",
    desc: "Irrigation pump",
    amount: 7100,
  },
];

const MONTHLY_DATA = [
  { month: "Oct", profit: 8000 },
  { month: "Nov", profit: 12000 },
  { month: "Dec", profit: 18000 },
  { month: "Jan", profit: 22000 },
  { month: "Feb", profit: 15000 },
  { month: "Mar", profit: 7000 },
];

const CROP_TABLE = [
  {
    crop: "Wheat",
    area: "2 acres",
    revenue: 52000,
    cost: 18000,
    profit: 34000,
  },
  {
    crop: "Rice",
    area: "1.5 acres",
    revenue: 38500,
    cost: 14200,
    profit: 24300,
  },
  {
    crop: "Vegetables",
    area: "0.5 acres",
    revenue: 34000,
    cost: 10100,
    profit: 23900,
  },
];

const DROP_DOWN_CATS = ["Seeds", "Fertilizer", "Labour", "Water", "Other"];
const maxBar = Math.max(...MONTHLY_DATA.map((m) => m.profit));

export default function IncomeTracker() {
  const { t } = useLanguage();
  const [category, setCategory] = useState("Seeds");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const TOTAL_REVENUE = 124500;
  const TOTAL_EXPENSES = 42300;
  const NET_PROFIT = 82200;

  function addExpense() {
    if (!amount || Number(amount) <= 0) return;
    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        category,
        amount: Number(amount),
        date,
        description,
      },
    ]);
    setAmount("");
    setDescription("");
    toast.success("Expense added!");
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-4">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Farm Finances
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            {t.incomeTrackerTitle}
          </h1>
          <p className="text-muted-foreground text-lg">
            Track every rupee — see your real farm profit
          </p>
        </div>

        {/* Season Summary Hero Card */}
        <Card
          className="mb-8 overflow-hidden border-primary/40"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.28 0.12 118 / 0.9), oklch(0.35 0.13 118 / 0.7))",
          }}
          data-ocid="season-summary-card"
        >
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <Badge className="bg-accent/20 text-accent border border-accent/30 mb-3">
                  Rabi 2024–25
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  Your Farm Profit <span className="text-accent">↑ 18%</span>{" "}
                  this season
                </h2>
                <p className="text-primary-foreground/70 text-base">
                  Best season in 3 years!
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
                <div className="text-center px-4 py-3 rounded-xl bg-white/10 border border-white/20">
                  <p className="text-xs text-primary-foreground/70 mb-1">
                    Revenue
                  </p>
                  <p className="font-bold text-lg text-primary-foreground">
                    ₹1,24,500
                  </p>
                  <ArrowUpCircle className="w-4 h-4 text-accent mx-auto mt-1" />
                </div>
                <div className="text-center px-4 py-3 rounded-xl bg-white/10 border border-white/20">
                  <p className="text-xs text-primary-foreground/70 mb-1">
                    Expenses
                  </p>
                  <p className="font-bold text-lg text-primary-foreground">
                    ₹42,300
                  </p>
                  <ArrowDownCircle className="w-4 h-4 text-red-300 mx-auto mt-1" />
                </div>
                <div className="text-center px-4 py-3 rounded-xl bg-accent/20 border border-accent/30">
                  <p className="text-xs text-accent mb-1">Net Profit</p>
                  <p className="font-bold text-lg text-accent">₹82,200</p>
                  <Wallet className="w-4 h-4 text-accent mx-auto mt-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expense Categories Grid */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
            Cost Breakdown
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-ocid="expense-categories"
          >
            {EXPENSE_CATEGORIES.map((cat) => (
              <Card
                key={cat.key}
                className="glass border-white/10 hover:border-primary/40 transition-smooth"
                data-ocid={`expense-cat-${cat.key.toLowerCase()}`}
              >
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <button
                      type="button"
                      aria-label={`Edit ${cat.label}`}
                      className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-smooth"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  </div>
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    {cat.label}
                  </p>
                  <p className="font-bold text-xl text-primary mb-1">
                    ₹{cat.amount.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {cat.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Profit Chart */}
          <Card className="glass border-white/10" data-ocid="monthly-chart">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                Monthly Profit (Last 6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 h-40 mb-2">
                {MONTHLY_DATA.map((m) => {
                  const heightPct = Math.round((m.profit / maxBar) * 100);
                  const profitLabel = `₹${Math.round(m.profit / 1000)}k`;
                  return (
                    <div
                      key={m.month}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <span className="text-xs text-accent font-medium">
                        {profitLabel}
                      </span>
                      <div
                        className="w-full rounded-t-lg bg-primary transition-all duration-700"
                        style={{ height: `${heightPct}%` }}
                      />
                      <span className="text-xs text-muted-foreground mt-1">
                        {m.month}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-3 h-3 rounded-sm bg-primary inline-block" />
                <span className="text-xs text-muted-foreground">
                  Monthly Profit (₹)
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Add Expense Form */}
          <Card className="glass border-white/10" data-ocid="add-expense-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-accent" />
                {t.addExpense}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-muted-foreground text-xs mb-1 block">
                    Category
                  </Label>
                  <select
                    className="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/15 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    data-ocid="expense-category-select"
                  >
                    {DROP_DOWN_CATS.map((c) => (
                      <option
                        key={c}
                        value={c}
                        className="bg-card text-foreground"
                      >
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs mb-1 block">
                    Amount (₹)
                  </Label>
                  <Input
                    type="number"
                    className="bg-white/5 border-white/15 text-foreground placeholder:text-muted-foreground"
                    placeholder="e.g. 2500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    data-ocid="expense-amount-input"
                  />
                </div>
              </div>
              <div>
                <Label className="text-muted-foreground text-xs mb-1 block">
                  Date
                </Label>
                <Input
                  type="date"
                  className="bg-white/5 border-white/15 text-foreground"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  data-ocid="expense-date-input"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs mb-1 block">
                  Description
                </Label>
                <Input
                  className="bg-white/5 border-white/15 text-foreground placeholder:text-muted-foreground"
                  placeholder="e.g. Urea for Field 1"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  data-ocid="expense-desc-input"
                />
              </div>
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={addExpense}
                data-ocid="add-expense-btn"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                {t.addExpense}
              </Button>
              {expenses.length > 0 && (
                <div
                  className="space-y-1.5 max-h-28 overflow-y-auto mt-1"
                  data-ocid="new-expenses-list"
                >
                  {expenses.map((exp) => (
                    <div
                      key={exp.id}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 text-sm"
                    >
                      <span className="text-foreground truncate min-w-0">
                        {exp.category}
                      </span>
                      <span className="text-red-400 font-medium shrink-0 ml-2">
                        −₹{exp.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Crop-wise Profit Table */}
        <Card className="glass border-white/10" data-ocid="crop-profit-table">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Wheat className="w-4 h-4 text-accent" />
              Crop-wise Profit This Season
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 pb-2">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-3 text-muted-foreground font-medium">
                      Crop
                    </th>
                    <th className="text-left px-4 py-3 text-muted-foreground font-medium">
                      Area
                    </th>
                    <th className="text-right px-4 py-3 text-muted-foreground font-medium">
                      Revenue
                    </th>
                    <th className="text-right px-4 py-3 text-muted-foreground font-medium">
                      Cost
                    </th>
                    <th className="text-right px-6 py-3 text-muted-foreground font-medium">
                      Profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CROP_TABLE.map((row, i) => (
                    <tr
                      key={row.crop}
                      className={`border-b border-white/5 hover:bg-white/5 transition-smooth ${i === CROP_TABLE.length - 1 ? "border-b-0" : ""}`}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {row.crop}
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">
                        {row.area}
                      </td>
                      <td className="px-4 py-4 text-right text-foreground">
                        ₹{row.revenue.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-right text-red-400">
                        ₹{row.cost.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-bold text-primary">
                          ₹{row.profit.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-white/15 bg-white/5">
                    <td
                      colSpan={2}
                      className="px-6 py-3 font-semibold text-foreground"
                    >
                      Total
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-foreground">
                      ₹{TOTAL_REVENUE.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-red-400">
                      ₹{TOTAL_EXPENSES.toLocaleString()}
                    </td>
                    <td className="px-6 py-3 text-right">
                      <Badge className="bg-primary/20 text-primary border border-primary/30 font-bold">
                        ₹{NET_PROFIT.toLocaleString()}
                      </Badge>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
