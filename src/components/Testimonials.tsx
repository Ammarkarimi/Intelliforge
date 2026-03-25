import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "IntelliForge helped us cut our forecasting errors in half. Their team understood our business before writing a single line of code.", name: "Ankit Mehta", role: "VP of Operations, RetailStack" },
  { quote: "We evaluated three AI vendors. IntelliForge was the only one that asked about our business constraints before pitching a solution.", name: "Priya Sharma", role: "CTO, FinLedger" },
  { quote: "Their ongoing support model is what sets them apart. Six months post-launch and the model keeps improving.", name: "David Chen", role: "Head of Data, MedSync Health" },
  { quote: "The team delivered a working prototype in four weeks. No other vendor came close to that timeline with the same quality.", name: "Sarah Williams", role: "Director of Engineering, LogiPlan" },
];

const Testimonials = () => (
  <section className="section-padding-lg bg-muted/40">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What Our Clients Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <Quote size={20} className="text-accent/40 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
