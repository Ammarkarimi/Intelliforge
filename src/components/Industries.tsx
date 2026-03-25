import { motion } from "framer-motion";
import { HeartPulse, Landmark, ShoppingCart, Truck, Cloud } from "lucide-react";

const industries = [
  { icon: HeartPulse, title: "Healthcare", desc: "Predictive diagnostics, patient risk scoring, clinical workflow automation, and medical imaging analysis." },
  { icon: Landmark, title: "Finance", desc: "Fraud detection, credit scoring, algorithmic trading, and regulatory compliance automation." },
  { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Demand forecasting, personalized recommendations, dynamic pricing, and inventory optimization." },
  { icon: Truck, title: "Logistics", desc: "Route optimization, supply chain visibility, predictive maintenance, and warehouse automation." },
  { icon: Cloud, title: "SaaS", desc: "User behavior analytics, churn prediction, intelligent onboarding, and feature recommendation engines." },
];

const Industries = () => (
  <section id="industries" className="section-padding-lg bg-muted/40">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-16">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Industries</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          AI Applications Across Sectors
        </h2>
        <p className="text-muted-foreground mt-4">
          We understand the nuances of each industry and build AI systems that work within those realities.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
          >
            <ind.icon size={24} className="text-accent mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{ind.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
