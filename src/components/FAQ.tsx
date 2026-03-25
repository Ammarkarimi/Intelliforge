import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How do I know if my business needs AI?", a: "If you have repeatable decisions, large datasets, or processes that could benefit from pattern recognition and automation, AI can likely add value. We offer a free consultation to help you assess feasibility." },
  { q: "What kind of data do I need to get started?", a: "It depends on the use case. Generally, we need historical data relevant to the problem. This could be transactional records, sensor logs, customer interactions, or operational metrics. We'll help you audit what you have." },
  { q: "How long does a typical project take?", a: "Most projects range from 8 to 16 weeks depending on complexity. Simpler automation tasks can be delivered in 4–6 weeks, while enterprise ML systems may take longer." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We've worked with early-stage startups building their first data products and large enterprises modernizing legacy systems. Our engagement models are flexible." },
  { q: "What happens after deployment?", a: "We provide ongoing monitoring, model retraining, and optimization as part of our retainer model. We also offer stand-alone support packages." },
  { q: "How is AI different from traditional software automation?", a: "Traditional automation follows predefined rules. AI systems learn from data and can handle ambiguity, adapt to new patterns, and improve over time without manual reprogramming." },
  { q: "What industries do you specialize in?", a: "We have deep experience in healthcare, finance, retail, logistics, and SaaS but our methodology is applicable across most data-rich industries." },
  { q: "How do you ensure data security?", a: "We follow industry-standard security practices including encryption, access controls, and compliance with relevant regulations (GDPR, HIPAA where applicable). We can work within your existing security framework." },
];

const FAQ = () => (
  <section className="section-padding-lg">
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Common Questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 data-[state=open]:shadow-sm">
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
