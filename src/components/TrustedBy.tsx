import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, Handshake } from "lucide-react";

const partners = [
  {
    name: "Dhirubhai Ambani Institute of Information and Communication Technology",
    short: "DA-IICT",
    logo: "/daiict-logo.jpg",
    label: "Academic Partner",
    description: "Joint research programs in applied AI and data science, with faculty collaboration and student internship pipelines.",
    icon: GraduationCap,
  },
  {
    name: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior",
    short: "IIITM Gwalior",
    logo: "/IIITM-Gwalior.png",
    label: "Research Collaboration",
    description: "Co-developing advanced NLP and computer vision solutions through sponsored research projects and shared IP.",
    icon: FlaskConical,
  },
];

const TrustedBy = () => (
  <section className="section-padding-lg bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <Handshake size={14} />
          Our Partners
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
          Trusted By & Academic Partners
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Collaborating with India's leading academic institutions to push the boundaries of AI research, innovation, and talent development.
        </p>
      </motion.div>

      {/* Partner Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {partners.map((p, i) => (
          <motion.div
            key={p.short}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Logo + Badge */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-20 h-20 rounded-xl bg-white border border-border/50 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={p.logo}
                  alt={`${p.short} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                <p.icon size={12} />
                {p.label}
              </span>
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {p.short}
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-snug">
              {p.name}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
      >
        {[
          { value: "10+", label: "Joint Research Papers" },
          { value: "50+", label: "Student Interns Mentored" },
          { value: "3+", label: "Years of Collaboration" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustedBy;
