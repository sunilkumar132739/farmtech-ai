import { Badge } from "@/components/ui/badge";
import {
  Battery,
  Droplets,
  FlaskConical,
  Leaf,
  Radio,
  Sun,
} from "lucide-react";
import { motion } from "motion/react";

const sensorCards = [
  {
    icon: Droplets,
    title: "Soil Moisture",
    description:
      "Continuous volumetric water content monitoring using capacitive sensors buried at root depth for precise irrigation decisions.",
    metric: "± 2% Accuracy",
    unit: "% VWC",
    value: "68",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/25",
    gradient: "from-sky-500/5 to-transparent",
    ocid: "sensor-moisture",
  },
  {
    icon: Leaf,
    title: "NPK Levels",
    description:
      "Electrochemical ion-selective sensors measuring Nitrogen, Phosphorus, and Potassium concentrations — key macro-nutrients for crop health.",
    metric: "N:P:K Ratio",
    unit: "mg/kg",
    value: "140:45:30",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/25",
    gradient: "from-primary/5 to-transparent",
    ocid: "sensor-npk",
  },
  {
    icon: FlaskConical,
    title: "pH Balance",
    description:
      "Glass electrode pH sensors detect soil acidity or alkalinity in real-time, enabling lime or sulfur applications before crop stress occurs.",
    metric: "0.01 Resolution",
    unit: "pH Scale",
    value: "6.8",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/25",
    gradient: "from-accent/5 to-transparent",
    ocid: "sensor-ph",
  },
];

export function IoTSection() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      data-ocid="iot-section"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass border-primary/30 text-primary mb-4 px-4 py-1.5 font-medium gap-2">
            <Radio className="w-3.5 h-3.5" />
            Solar-Powered IoT Hardware
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The IoT Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Our ruggedized field sensors transmit data every 15 minutes over
            LoRaWAN — even in remote areas with no mobile internet.
          </p>
        </motion.div>

        {/* Sensor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sensorCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`glass-card rounded-3xl border ${card.border} bg-gradient-to-br ${card.gradient} hover:scale-[1.02] transition-smooth group`}
                data-ocid={card.ocid}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth`}
                >
                  <Icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Live value display */}
                <div
                  className={`glass rounded-2xl p-4 border ${card.border} mb-4`}
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Current Reading
                      </p>
                      <p
                        className={`font-mono text-2xl font-bold ${card.color}`}
                      >
                        {card.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {card.unit}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-semibold ${card.color} ${card.bg} px-2.5 py-1 rounded-full`}
                      >
                        {card.metric}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Updated 3 min ago
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solar & battery callout bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="glass-card rounded-3xl border border-accent/25 bg-gradient-to-r from-accent/5 via-transparent to-primary/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex flex-col items-center gap-3 sm:py-0 py-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center">
                <Sun className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl">
                  Solar-Powered
                </p>
                <p className="text-muted-foreground text-sm">
                  Zero electricity cost in the field
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:py-0 py-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                <Battery className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl">
                  30-Day Backup
                </p>
                <p className="text-muted-foreground text-sm">
                  Operates through extended cloud cover
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:py-0 py-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 flex items-center justify-center">
                <Radio className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl">
                  LoRaWAN Mesh
                </p>
                <p className="text-muted-foreground text-sm">
                  15 km range, works without mobile data
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
