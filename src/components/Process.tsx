import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Requirement Understanding", desc: "Deep-dive into your business context, goals, and existing data landscape." },
  { num: "02", title: "Data Analysis", desc: "Audit and prepare your data ensuring quality, relevance, and readiness for modeling." },
  { num: "03", title: "Model Design", desc: "Architect the right ML approach based on your problem type and constraints." },
  { num: "04", title: "Development & Integration", desc: "Build, test, and integrate the solution into your existing systems and workflows." },
  { num: "05", title: "Deployment", desc: "Production-grade deployment with monitoring, logging, and rollback capabilities." },
  { num: "06", title: "Continuous Optimization", desc: "Ongoing model retraining, performance monitoring, and iterative improvements." },
];

const Process = () => (
  <section id="process" className="section-padding-lg">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-16">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Our Process</h2>
        <p className="text-muted-foreground mt-4">A structured, transparent approach from discovery to deployment.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative"
          >
            <span className="text-5xl font-bold text-muted/60 select-none">{s.num}</span>
            <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
