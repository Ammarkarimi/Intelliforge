import { motion } from "framer-motion";
import { Brain, Zap, BarChart3, Code2, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    desc: "Custom ML models that learn from your data to predict outcomes, automate decisions, and uncover hidden patterns.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    desc: "Streamline repetitive workflows with intelligent automation, reducing costs and freeing your team for higher-value work.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    desc: "Transform raw data into actionable business intelligence with advanced analytics dashboards and reporting.",
  },
  {
    icon: Code2,
    title: "Custom AI Development",
    desc: "End-to-end development of AI products, from ideation and prototyping to production-grade deployment.",
  },
  {
    icon: MessageSquare,
    title: "AI Consulting",
    desc: "Strategic guidance to help you identify where AI can deliver the highest ROI across your operations.",
  },
];

const Services = () => (
  <section id="services" className="section-padding-lg">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mb-16"
      >
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Services
        </h2>
        <p className="text-muted-foreground mt-4">
          Practical AI solutions designed to solve specific business challenges,
          not technology for technology's sake.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card border border-border rounded-lg p-8 hover:shadow-md hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-5">
              <s.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

