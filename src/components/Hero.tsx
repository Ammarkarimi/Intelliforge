import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center section-padding-lg pt-32"
  >
    <div className="max-w-7xl mx-auto w-full">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold text-sm tracking-widest uppercase mb-4"
        >
          AI &amp; Machine Learning Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
        >
          AI Solutions Built Around Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed"
        >
          We design and deploy AI/ML systems tailored to real-world business
          problems to help you make smarter decisions, faster.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-7 py-3.5 rounded-md hover:bg-muted transition-colors text-sm"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
