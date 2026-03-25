import { motion } from "framer-motion";
import { Check } from "lucide-react";

const models = [
  {
    title: "Consultation",
    desc: "Ideal for early-stage exploration and feasibility assessments.",
    features: ["AI readiness assessment", "Data audit & strategy", "Use-case identification", "Written recommendations report"],
  },
  {
    title: "Project-Based",
    desc: "End-to-end delivery of a defined AI/ML solution.",
    features: ["Scoped deliverables & timeline", "Full development lifecycle", "Integration & testing", "Post-launch support period"],
    highlighted: true,
  },
  {
    title: "Retainer",
    desc: "Ongoing partnership for continuous AI optimization.",
    features: ["Dedicated team allocation", "Monthly model retraining", "Priority support", "Quarterly strategy reviews"],
  },
];

const Pricing = () => (
  <section className="section-padding-lg bg-muted/40">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Engagement</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">How We Work With You</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Flexible models tailored to your stage, budget, and goals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {models.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-lg p-8 flex flex-col ${
              m.highlighted
                ? "bg-primary text-primary-foreground border-2 border-primary"
                : "bg-card border border-border"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{m.title}</h3>
            <p className={`text-sm mb-6 ${m.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {m.desc}
            </p>
            <ul className="space-y-3 flex-1">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className={`mt-0.5 flex-shrink-0 ${m.highlighted ? "text-primary-foreground/70" : "text-accent"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 text-center text-sm font-semibold py-3 rounded-md transition-opacity hover:opacity-90 ${
                m.highlighted
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
