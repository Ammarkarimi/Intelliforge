import { motion } from "framer-motion";
import { Wrench, Target, Expand, Headphones, GraduationCap } from "lucide-react";

const reasons = [
  { icon: Wrench, title: "Custom-Built Solutions", desc: "No off-the-shelf products, every system is designed for your specific use case." },
  { icon: Target, title: "Business-First Approach", desc: "We start with your business problem, not the technology. AI is the means, not the end." },
  { icon: Expand, title: "Scalable Systems", desc: "Architectures built to grow with you, from pilot to production at scale." },
  { icon: Headphones, title: "Ongoing Support", desc: "We stay engaged post-deployment with monitoring, retraining, and optimization." },
  { icon: GraduationCap, title: "Academic Collaboration", desc: "Partnerships with DA-IICT and IIIT Hyderabad give us access to cutting-edge research and talent." },
];

const WhyChooseUs = () => (
  <section id="about" className="section-padding-lg">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-16">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Why IntelliForge</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Why Choose Us</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
              <r.icon size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
