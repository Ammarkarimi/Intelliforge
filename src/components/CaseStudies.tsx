import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Shield, Clock } from "lucide-react";

const cases = [
  {
    title: "AI-Powered Quality Control for Automotive OEM",
    client: "Leading Automotive Manufacturer",
    industry: "Manufacturing",
    icon: Shield,
    problem: "Manual quality inspections on the assembly line were missing 5–8% of defects, causing costly recalls and damaging brand trust.",
    solution: "Designed and deployed a computer vision pipeline integrated with production line cameras to detect surface and assembly defects in real time, triggering automatic rejection before shipment.",
    tech: ["PyTorch", "OpenCV", "Edge Computing", "Azure IoT"],
    result: "97.5% defect detection rate reducing customer-reported defects by 74% and saving an estimated $3.2M in annual recall costs.",
  },
  {
    title: "Intelligent Document Processing for Insurance",
    client: "National Insurance Provider",
    industry: "Insurance / BFSI",
    icon: Clock,
    problem: "Claims processing required manual review of thousands of documents daily, creating a 14-day average turnaround and high operational costs.",
    solution: "Built an end-to-end NLP and OCR pipeline to automatically extract, classify, and validate information from claims documents, integrating directly with the existing claims management system.",
    tech: ["Transformers", "Tesseract OCR", "FastAPI", "GCP"],
    result: "Claims processing time reduced from 14 days to under 48 hours, handling 85% of documents without human intervention.",
  },
  {
    title: "Revenue Optimization Engine for Hospitality Group",
    client: "Multi-Property Hospitality Chain",
    industry: "Hospitality",
    icon: TrendingUp,
    problem: "Static pricing across 50+ properties led to chronic under-pricing during peak periods and low occupancy during off-seasons, leaving significant revenue on the table.",
    solution: "Developed a dynamic pricing engine that combines demand forecasting, competitor rate monitoring, and local event data to automatically adjust room rates across all properties in real time.",
    tech: ["LightGBM", "Airflow", "Snowflake", "React Dashboard"],
    result: "18% increase in revenue per available room (RevPAR) within the first six months, contributing an additional $5.6M in annual revenue across the portfolio.",
  },
];

const CaseStudies = () => (
  <section id="case-studies" className="section-padding-lg bg-muted/40">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-16">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Client Success</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Case Studies</h2>
        <p className="text-muted-foreground mt-4">Measurable impact delivered across industries — here's how we've helped our clients achieve transformative results.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-8 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">{c.industry}</span>
              {/* <ArrowUpRight size={18} className="text-muted-foreground flex-shrink-0" /> */}
            </div>
            <h3 className="text-lg font-semibold text-foreground leading-snug mb-1">{c.title}</h3>
            <p className="text-xs text-muted-foreground mb-4">{c.client}</p>
            <div className="space-y-3 text-sm flex-1">
              <div>
                <span className="font-medium text-foreground">Challenge: </span>
                <span className="text-muted-foreground">{c.problem}</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Our Approach: </span>
                <span className="text-muted-foreground">{c.solution}</span>
              </div>
              <div className="flex items-start gap-2 bg-primary/5 rounded-md p-3 mt-2">
                <c.icon size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="font-medium text-accent text-sm">{c.result}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
              {c.tech.map((t) => (
                <span key={t} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
