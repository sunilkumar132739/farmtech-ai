import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  ArrowUpRight,
  MapPin,
  ShoppingBasket,
  Star,
  TrendingUp,
  Truck,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { ActivityEventType, createActor } from "../backend";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

interface CropPrice {
  crop: string;
  emoji: string;
  mandiPrice: number;
  buyerPrice: number;
  buyerName: string;
}

interface BuyerCard {
  id: string;
  name: string;
  type: string;
  buying: string;
  rating: number;
  distance: string;
  badge: string;
}

const CROP_PRICES: CropPrice[] = [
  {
    crop: "Wheat",
    emoji: "🌾",
    mandiPrice: 2100,
    buyerPrice: 2450,
    buyerName: "Anaj Mandi Ltd",
  },
  {
    crop: "Rice",
    emoji: "🍚",
    mandiPrice: 1800,
    buyerPrice: 2050,
    buyerName: "BigBasket Direct",
  },
  {
    crop: "Tomato",
    emoji: "🍅",
    mandiPrice: 1200,
    buyerPrice: 1650,
    buyerName: "Local Restaurant",
  },
  {
    crop: "Potato",
    emoji: "🥔",
    mandiPrice: 800,
    buyerPrice: 950,
    buyerName: "Retail Chain",
  },
  {
    crop: "Onion",
    emoji: "🧅",
    mandiPrice: 1500,
    buyerPrice: 1900,
    buyerName: "Wholesale Buyer",
  },
];

const BUYERS: BuyerCard[] = [
  {
    id: "1",
    name: "Anaj Mandi Ltd",
    type: "Grain Buyer",
    buying: "Wheat, Rice, Corn",
    rating: 4,
    distance: "3.2 km",
    badge: "Top Buyer",
  },
  {
    id: "2",
    name: "BigBasket Direct",
    type: "Online Grocery",
    buying: "Vegetables, Fruits, Pulses",
    rating: 5,
    distance: "1.8 km",
    badge: "★ Best Price",
  },
  {
    id: "3",
    name: "Punjab Restaurant Assoc.",
    type: "Bulk Buyer",
    buying: "Vegetables, Herbs",
    rating: 4,
    distance: "4.5 km",
    badge: "Bulk Orders",
  },
  {
    id: "4",
    name: "Local Cold Storage",
    type: "Storage + Sell",
    buying: "Potato, Onion, Tomato",
    rating: 3,
    distance: "2.1 km",
    badge: "Storage",
  },
  {
    id: "5",
    name: "Export House Agro",
    type: "Export Quality",
    buying: "Premium produce only",
    rating: 5,
    distance: "8.0 km",
    badge: "Export",
  },
  {
    id: "6",
    name: "Organic Direct",
    type: "Organic Certified",
    buying: "Chemical-free produce",
    rating: 4,
    distance: "5.5 km",
    badge: "Organic",
  },
];

const TICKER_ITEMS = [
  { id: "t1", text: "🔥 Wheat prices up ₹50 today" },
  { id: "t2", text: "🌾 BigBasket buying Tomato at ₹1,650/qtl" },
  { id: "t3", text: "💰 Best Onion price in your area: ₹1,900/qtl" },
  { id: "t4", text: "📦 Cold Storage space available near Ludhiana" },
  { id: "t5", text: "🚜 Rice procurement open — 100 qtl needed urgently" },
  { id: "t6", text: "🌽 Corn demand high — contact buyers now" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating ? "text-accent fill-accent" : "text-white/20"}`}
        />
      ))}
    </span>
  );
}

export default function Marketplace() {
  const { t } = useLanguage();
  const { actor } = useActor(createActor);

  function handleSellNow(name: string) {
    // Fire-and-forget: log marketplace item click
    actor
      ?.logActivity(
        ActivityEventType.MarketplaceClick,
        `Marketplace item clicked: ${name}`,
      )
      .catch(() => {});
    toast.success("Our team will contact you within 24 hours!", {
      description: `${name} has been notified about your produce.`,
      duration: 5000,
    });
  }

  function handleBestPriceSearch() {
    // Fire-and-forget: log best price search
    actor
      ?.logActivity(
        ActivityEventType.BestPriceSearch,
        "Best price search triggered",
      )
      .catch(() => {});
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="pt-24 pb-10 px-4 max-w-6xl mx-auto">
        {/* Hero Banner */}
        <div
          className="relative rounded-3xl overflow-hidden mb-10 border border-accent/30"
          data-ocid="marketplace-hero"
        >
          <div className="absolute inset-0 bg-accent/10 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" />
          {/* Animated pulse glow */}
          <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-pulse" />
          <div className="relative px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-wider">
                  Live Prices
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {t.bestPriceToday}
              </h1>
              <p className="text-muted-foreground mb-4">{today}</p>
              <Button
                onClick={handleBestPriceSearch}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold gap-2"
                data-ocid="best-price-search-btn"
              >
                <Zap className="w-4 h-4" />
                Best Price Near You
              </Button>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="glass border border-accent/30 px-5 py-3 rounded-2xl text-center">
                <p className="font-display text-2xl font-bold text-accent">
                  +18%
                </p>
                <p className="text-xs text-muted-foreground">Avg over mandi</p>
              </div>
              <div className="glass border border-primary/30 px-5 py-3 rounded-2xl text-center">
                <p className="font-display text-2xl font-bold text-primary">
                  24
                </p>
                <p className="text-xs text-muted-foreground">Live buyers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Live Buyers", value: "24", icon: ShoppingBasket },
            {
              label: "Avg. Premium over Mandi",
              value: "+18%",
              icon: TrendingUp,
            },
            { label: "Deliveries Today", value: "12", icon: Truck },
          ].map((s) => (
            <Card
              key={s.label}
              className="glass border-white/10 text-center"
              data-ocid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="py-4">
                <s.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                <p className="font-display text-2xl font-bold text-foreground">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Comparison Table */}
        <div className="mb-10" data-ocid="price-comparison">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Price Comparison
            </h2>
            <Badge className="bg-primary/20 text-primary border-primary/30 border text-xs">
              Live
            </Badge>
          </div>

          <Card className="glass border-white/10 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-5 gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider col-span-1">
                Crop
              </p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                {t.mandiPrice}
              </p>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider text-right">
                {t.buyerPrice}
              </p>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider text-right">
                Difference
              </p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                Best Buyer
              </p>
            </div>

            <div className="divide-y divide-white/5">
              {CROP_PRICES.map((row) => {
                const diff = row.buyerPrice - row.mandiPrice;
                return (
                  <div
                    key={row.crop}
                    className="grid grid-cols-5 gap-2 px-5 py-4 hover:bg-white/5 transition-smooth"
                    data-ocid={`price-row-${row.crop.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-2 col-span-1 min-w-0">
                      <span className="text-xl shrink-0">{row.emoji}</span>
                      <span className="font-semibold text-foreground text-sm truncate">
                        {row.crop}
                      </span>
                    </div>
                    <p className="text-right font-medium text-secondary-foreground self-center text-sm">
                      ₹{row.mandiPrice.toLocaleString()}
                    </p>
                    <p className="text-right font-bold text-primary self-center">
                      ₹{row.buyerPrice.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-end gap-1 self-center">
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="font-bold text-accent text-sm">
                        +₹{diff}
                      </span>
                    </div>
                    <p className="text-right text-xs text-muted-foreground self-center truncate">
                      {row.buyerName}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Buyer Cards Grid */}
        <div className="mb-10" data-ocid="buyer-cards">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBasket className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Active Buyers Near You
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUYERS.map((buyer) => (
              <Card
                key={buyer.id}
                className="glass border-white/10 hover:border-primary/30 transition-smooth group"
                data-ocid={`buyer-card-${buyer.id}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-foreground text-base group-hover:text-primary transition-colors">
                      {buyer.name}
                    </CardTitle>
                    <Badge className="bg-accent/15 text-accent border border-accent/30 text-xs shrink-0">
                      {buyer.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{buyer.type}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-xs text-muted-foreground mb-1">Buying</p>
                    <p className="text-sm text-foreground font-medium">
                      {buyer.buying}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StarRating rating={buyer.rating} />
                      <span className="text-xs text-muted-foreground">
                        {buyer.rating}.0
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {buyer.distance}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
                    onClick={() => handleSellNow(buyer.name)}
                    data-ocid={`sell-btn-${buyer.id}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    {t.sellNow}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Urgency Ticker */}
        <div
          className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/5"
          data-ocid="urgency-ticker"
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="shrink-0 flex items-center gap-1.5 bg-accent/20 border border-accent/30 rounded-lg px-3 py-1.5">
              <span className="text-xs font-bold text-accent">LIVE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="overflow-hidden">
              <div
                className="flex gap-8 whitespace-nowrap"
                style={{
                  animation: "marquee 28s linear infinite",
                }}
              >
                {[
                  ...TICKER_ITEMS.map((i) => ({ ...i, uid: i.id })),
                  ...TICKER_ITEMS.map((i) => ({ ...i, uid: `${i.id}-b` })),
                ].map((item) => (
                  <span
                    key={item.uid}
                    className="text-sm text-foreground font-medium shrink-0"
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee keyframes injected inline */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </main>
    </div>
  );
}
