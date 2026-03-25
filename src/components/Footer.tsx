import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/intelliforge-logo.png" alt="IntelliForge Logo" className="h-10 sm:h-12 w-auto object-contain rounded-md" />
            <h3 className="text-xl font-bold">IntelliForge</h3>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            AI solutions built around your business. Practical, scalable, and grounded in real-world outcomes.
          </p>
          <p className="text-xs text-primary-foreground/50 mt-4">
            Academic partners: DA-IICT &amp; IIIT Hyderabad
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
            <li><a href="#case-studies" className="hover:text-primary-foreground transition-colors">Case Studies</a></li>
            <li><a href="#blog" className="hover:text-primary-foreground transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#process" className="hover:text-primary-foreground transition-colors">Our Process</a></li>
            <li><a href="#industries" className="hover:text-primary-foreground transition-colors">Industries</a></li>
            <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Github size={18} />
            </a>
          </div>
          <p className="text-xs text-primary-foreground/50 mt-6">
            mohammedammarkarimi@gmail.com<br />
            +91 9173779443
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} IntelliForge. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
