import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Calendar, Clock } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    title: "How AI is Transforming Small Businesses in 2026",
    excerpt: "AI isn't just for enterprises anymore. Discover practical applications that small teams can adopt today to compete at scale.",
    date: "Mar 12, 2026",
    readTime: "6 min read",
    content: `Artificial Intelligence was once the exclusive domain of tech giants with billion-dollar R&D budgets. That era is over. In 2026, small businesses are leveraging AI to punch well above their weight, and the results are remarkable.

**The Democratization of AI**

The explosion of accessible AI tools has fundamentally changed the playing field. Cloud-based ML platforms, pre-trained models, and no-code AI builders have eliminated the need for massive infrastructure investments. A five-person marketing agency can now deploy the same caliber of predictive analytics that Fortune 500 companies use at a fraction of the cost.

**Practical Applications Already Delivering ROI**

Here are the areas where we're seeing the strongest adoption among small businesses:

• **Customer Service Automation:** AI chatbots and virtual assistants can now handle 70–80% of routine customer inquiries, freeing up staff for complex issues. Tools like fine-tuned language models allow businesses to deploy assistants that genuinely understand their product domain, not generic bots that frustrate customers.

• **Inventory and Demand Forecasting:** Small retailers using ML-based demand forecasting are seeing 15–25% reductions in excess inventory. These models analyze historical sales, seasonal trends, and even local events to predict what you'll need and when.

• **Marketing Personalization:** AI-driven email segmentation and ad targeting are generating 2–3x higher conversion rates compared to traditional batch-and-blast approaches. The technology identifies micro-segments in your customer base and tailors messaging accordingly.

• **Financial Planning:** AI-assisted bookkeeping and cash flow forecasting tools are helping small business owners make data-driven financial decisions instead of relying on gut instinct.

**The Key Mistake to Avoid**

The biggest trap we see small businesses fall into is trying to build custom AI from scratch. Unless your core product is AI-powered, you should almost always start with off-the-shelf solutions and APIs, then customize as needed. This approach delivers 80% of the value at 20% of the cost.

**Where to Start**

If you're a small business exploring AI for the first time, begin with a single, well-defined problem not a grand transformation initiative. Pick the task that consumes the most manual hours, evaluate existing AI tools that address it, run a 30-day pilot, and measure the results. That's it. No strategy decks, no multi-year roadmaps. Just solve one problem, learn, and iterate.

The businesses that thrive with AI aren't the ones with the most sophisticated technology. They're the ones that identified the right problem to solve first.`,
  },
  {
    title: "When Should You Invest in Machine Learning?",
    excerpt: "Not every problem needs ML. Here's a framework for deciding when it makes sense and when it doesn't.",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    content: `Machine learning is powerful, but it's not a universal solution. We've seen companies waste six-figure budgets building ML systems for problems that a well-written SQL query could solve. Here's how to make the right call.

**The Decision Framework**

Before investing in ML, run your problem through these four filters:

**1. Do you have enough quality data?**

ML models are only as good as the data they're trained on. If you have fewer than a few thousand relevant data points, or if your data is riddled with inconsistencies, ML will likely underperform simple heuristics. We recommend a minimum of 10,000 labeled examples for supervised learning tasks, though some modern few-shot techniques can work with less.

**2. Is the problem too complex for rules?**

If you can describe your decision logic in a flowchart with fewer than 20 decision nodes, you probably don't need ML. Traditional rule-based automation is cheaper, faster to build, more interpretable, and easier to maintain. ML shines when the patterns are too subtle, too numerous, or too dynamic for humans to codify manually.

**3. Is the cost of errors acceptable?**

ML models make mistakes. That's not a flaw. It's a fundamental characteristic. The question is whether your use case can tolerate a 5–15% error rate (typical for many production ML systems). In fraud detection, a few false positives might be fine. In medical diagnostics, the bar is much higher. Understand your error tolerance before you start.

**4. Will the model's predictions actually be acted upon?**

This is the most overlooked filter. If your organization isn't ready to integrate ML predictions into actual business processes, if the output will just sit in a dashboard that no one checks, don't build it. ML delivers value only when its outputs drive decisions.

**When ML is the Right Choice**

The sweet spot for ML investment is when you have abundant historical data, the decision patterns are complex and evolving, the business impact of better predictions is significant and measurable, and your organization is operationally ready to act on model outputs. Common winning use cases include demand forecasting, churn prediction, recommendation systems, anomaly detection, and natural language understanding.

**When to Skip ML (For Now)**

Choose simpler alternatives when your data is sparse or poor quality, the rules are straightforward and stable, the problem doesn't justify the ongoing cost of model maintenance, or you lack the infrastructure to deploy and monitor models in production. There's no shame in starting with a spreadsheet model and graduating to ML later. In fact, that's often the smartest path, the spreadsheet becomes your baseline, and you only invest in ML when you can prove it outperforms simple approaches.

**The Bottom Line**

ML is an investment, not an experiment. It requires ongoing data curation, model retraining, monitoring, and infrastructure. Before diving in, make sure the expected ROI justifies these costs and that simpler solutions genuinely can't get you there.`,
  },
  {
    title: "AI vs Traditional Automation: What's the Difference?",
    excerpt: "Rule-based systems and AI serve different purposes. Understanding the distinction saves time and money.",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    content: `We regularly encounter clients who use "AI" and "automation" interchangeably. They're related but fundamentally different and choosing the wrong one for your problem can cost you months and hundreds of thousands of dollars.

**Traditional Automation: The Reliable Workhorse**

Traditional automation (also called rule-based or robotic process automation) follows predefined instructions. Think of it as a very fast, very precise human following a detailed manual.

Examples include invoice processing based on fixed templates, automated email responses triggered by specific keywords, data migration between systems using mapping rules, and scheduled report generation. The strength of traditional automation is its predictability. You define the rules, and the system follows them exactly. Every time. There are no surprises, no hallucinations, no drift. For stable, well-defined processes, this is exactly what you want.

**AI-Based Systems: The Adaptive Engine**

AI systems learn patterns from data rather than following explicit rules. They can handle ambiguity, adapt to new scenarios, and improve over time.

Examples include classifying customer support tickets by intent (even when phrased differently), detecting fraudulent transactions with shifting patterns, generating personalized product recommendations, and extracting information from unstructured documents in varying formats. The strength of AI is flexibility. It handles edge cases and variations that would require thousands of rules to hard-code.

**The Critical Trade-offs**

Here's the practical difference:

In terms of setup cost, traditional automation is lower while AI is higher. For handling edge cases, traditional automation is poor while AI is strong. Regarding predictability, traditional automation is very high while AI is moderate. Maintenance effort for traditional automation is low (unless rules change) while AI requires ongoing work (retraining and monitoring). Traditional automation has clear explainability while AI varies by model.

**Our Recommendation**

Start with traditional automation for any process where the rules are clear and stable. Layer AI on top only when the process involves unstructured data, changing patterns, or decisions that require judgment rather than rule-following.

The best enterprise systems combine both: automation handles the 80% of work that follows predictable patterns, and AI handles the 20% that doesn't. This hybrid approach delivers the reliability of automation with the adaptability of AI without over-engineering or over-spending.

If you're unsure which approach fits your specific use case, that's exactly the kind of strategic assessment we help our clients with. The right answer depends on your data, your process complexity, and your operational readiness.`,
  },
  {
    title: "Building a Data-Ready Organization",
    excerpt: "Before deploying AI, your data infrastructure needs to be solid. A practical guide to getting there.",
    date: "Jan 30, 2026",
    readTime: "8 min read",
    content: `Every successful AI initiative we've delivered has one thing in common: the client had their data house in order before we started. Conversely, every stalled project we've seen (ours or competitors') can trace its failure back to data readiness issues.

**Why Data Readiness Matters More Than Model Sophistication**

The AI industry loves to talk about model architectures, training techniques, and benchmark scores. But in the real world, 80% of an AI project's success is determined before a single line of model code is written. It's determined by the quality, accessibility, and governance of your data.

A sophisticated model trained on messy data will be outperformed by a simple model trained on clean, well-structured data. Every time.

**The Five Pillars of Data Readiness**

Based on our experience across dozens of enterprise AI deployments, here are the five areas that matter most:

**1. Data Quality**

This is table stakes. Your data must be accurate, complete, consistent, and timely. Common issues we encounter include duplicate records across systems, inconsistent formatting (dates, addresses, product names), missing values in critical fields, and stale data that hasn't been updated in months. Start by auditing your most critical datasets. Identify the top 10 data quality issues and fix them systematically. Don't try to boil the ocean focus on the data that your AI initiatives will actually need.

**2. Data Integration**

Most organizations store data in silos: CRM, ERP, marketing platforms, support tools, spreadsheets. AI models need a unified view. This doesn't necessarily mean a full data warehouse migration. It can start as simple as building reliable ETL pipelines between your core systems and a central analytics database.

**3. Data Governance**

Who owns each dataset? Who can access it? How is sensitive data handled? These questions must have clear answers before you bring AI into the picture. Establish data ownership by department and dataset, define access controls and audit trails, document data lineage (where each field comes from), and implement PII handling and compliance procedures.

**4. Data Literacy**

Your team needs to understand data well enough to collaborate effectively with AI engineers. This doesn't mean everyone needs to learn Python. It means business stakeholders can articulate what data they have, what data they need, what "good" looks like for their metrics, and how decisions are currently made. Invest in basic data literacy training for your key business teams. It pays dividends throughout every AI project.

**5. Data Infrastructure**

Your technical infrastructure needs to support the demands of AI workloads. This covers storage (can you handle the volume?), compute (can you train models at reasonable speed?), serving (can you deliver predictions in real time if needed?), and monitoring (can you detect data drift and model degradation?). You don't need to build everything from scratch. Cloud platforms like AWS, GCP, and Azure offer managed services for each of these capabilities.

**A Realistic Timeline**

Getting data-ready isn't an overnight process, but it doesn't have to take years either. For most mid-size organizations, a focused six to twelve month data readiness initiative can establish the foundation needed for successful AI adoption. The key is to be pragmatic, don't pursue data perfection. Pursue data sufficiency for your specific AI use cases, then improve iteratively.

**The Payoff**

Organizations that invest in data readiness before AI adoption see 3–5x higher ROI on their AI initiatives compared to those that try to fix data issues mid-project. It's the least glamorous part of AI, but it's the most impactful.`,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="section-padding-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">From Our Blog</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedPost(p)}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} /> {p.date}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {p.readTime}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read More <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPost(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border px-6 sm:px-8 py-5 flex items-start justify-between gap-4 z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} /> {selectedPost.date}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={12} /> {selectedPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                    {selectedPost.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} className="text-muted-foreground" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto px-6 sm:px-8 py-6">
                <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
                  {selectedPost.content.split("\n\n").map((paragraph, idx) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <h3 key={idx} className="text-lg font-semibold text-foreground mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, "")}
                        </h3>
                      );
                    }

                    // Handle paragraphs with bold sections and bullet points
                    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                    const hasBullets = paragraph.includes("• ");

                    if (hasBullets) {
                      const lines = paragraph.split("• ").filter(Boolean);
                      const intro = lines[0].includes("•") ? null : lines.shift();
                      return (
                        <div key={idx} className="mb-4">
                          {intro && (
                            <p className="text-muted-foreground mb-2">
                              {intro.split(/(\*\*[^*]+\*\*)/g).map((part, pi) =>
                                part.startsWith("**") && part.endsWith("**") ? (
                                  <strong key={pi} className="text-foreground font-semibold">{part.replace(/\*\*/g, "")}</strong>
                                ) : (
                                  <span key={pi}>{part}</span>
                                )
                              )}
                            </p>
                          )}
                          <ul className="space-y-2 ml-1">
                            {lines.map((line, li) => (
                              <li key={li} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-accent mt-1.5 text-xs">●</span>
                                <span>
                                  {line.split(/(\*\*[^*]+\*\*)/g).map((part, pi) =>
                                    part.startsWith("**") && part.endsWith("**") ? (
                                      <strong key={pi} className="text-foreground font-semibold">{part.replace(/\*\*/g, "")}</strong>
                                    ) : (
                                      <span key={pi}>{part}</span>
                                    )
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    return (
                      <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                        {parts.map((part, pi) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={pi} className="text-foreground font-semibold">{part.replace(/\*\*/g, "")}</strong>
                          ) : (
                            <span key={pi}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
