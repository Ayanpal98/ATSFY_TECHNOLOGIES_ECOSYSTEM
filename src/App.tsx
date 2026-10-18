import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Check, Cpu,
  GraduationCap, Layers, Leaf, Linkedin, Mail, Menu, Network, Rocket,
  ShieldCheck, Sparkles, TrendingUp, X, Globe2, BriefcaseBusiness
} from 'lucide-react';
import { ECOSYSTEM_DATA } from './types';
import { InteractiveMVP } from './components/InteractiveMVP';

const pillars = [
  { icon: GraduationCap, number: '01', title: 'People & learning', copy: 'Tools that help people build knowledge, skills and confidence.' },
  { icon: BriefcaseBusiness, number: '02', title: 'Career & enterprise', copy: 'Intelligence for hiring, entrepreneurship and business growth.' },
  { icon: Leaf, number: '03', title: 'Business & impact', copy: 'Practical technology shaped around responsible progress.' },
];

const IconForModule = ({ name }: { name: string }) => {
  const props = { size: 22, strokeWidth: 1.7 };
  switch (name) {
    case 'GraduationCap': return <GraduationCap {...props} />;
    case 'BookOpen': return <BookOpen {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Rocket': return <Rocket {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    default: return <Layers {...props} />;
  }
};

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ['Ecosystem', '#ecosystem'],
    ['How we think', '#approach'],
    ['Responsible AI', '#ethics'],
    ['Founder', '#founder'],
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ATSFY Technologies home" onClick={closeMenu}>
          <span className="brand-mark"><Layers size={21} strokeWidth={1.8} /></span>
          <span className="brand-copy"><strong>ATSFY</strong><small>TECHNOLOGIES</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="mailto:info@atsfy.tech?subject=Partner%20with%20ATSFY" onClick={closeMenu}>Partner with us <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <span className="eyebrow-dot" /> BUILT IN NORTHEAST INDIA <span className="eyebrow-divider">/</span> MADE TO SCALE
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
              Intelligence that connects <em>ideas to impact.</em>
            </motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
              ATSFY Technologies builds AI-powered products for learning, work and business — grounded in real needs, designed for a wider world.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
              <a className="button button-primary" href="#ecosystem">Explore the ecosystem <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="mailto:info@atsfy.tech?subject=ATSFY%20partnership%20enquiry">Start a conversation <ArrowUpRight size={16} /></a>
            </motion.div>
            <div className="hero-note"><span><Check size={14} /></span> Purpose-built technology. A people-first point of view.</div>
          </div>

          <motion.div className="ecosystem-art" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }} aria-label="Illustration of the ATSFY intelligence ecosystem">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-line line-one" /><div className="art-line line-two" /><div className="art-line line-three" />
            <div className="art-node node-top"><GraduationCap size={19} /><span>LEARN</span></div>
            <div className="art-node node-left"><Cpu size={19} /><span>BUILD</span></div>
            <div className="art-node node-right"><TrendingUp size={19} /><span>GROW</span></div>
            <div className="art-core"><span className="core-symbol"><Network size={28} /></span><strong>ATSFY</strong><small>CORE INTELLIGENCE</small></div>
            <div className="art-node node-bottom"><Leaf size={19} /><span>IMPACT</span></div>
            <div className="art-caption"><span className="caption-line" /> One connected ambition <span className="caption-line" /></div>
          </motion.div>
        </section>

        <section className="proof-strip" aria-label="ATSFY focus">
          <div className="proof-inner">
            <span><Globe2 size={17} /> Northeast India origin</span>
            <i />
            <span><Network size={17} /> Connected product thinking</span>
            <i />
            <span><ShieldCheck size={17} /> Responsible AI principles</span>
          </div>
        </section>

        <section id="approach" className="section-wrap approach-section section-space">
          <div className="section-heading">
            <p className="section-kicker">THE ATSFY APPROACH</p>
            <h2>One ambition.<br /><em>Many ways to make it real.</em></h2>
          </div>
          <p className="section-intro">We focus on practical AI experiences that help people move from uncertainty to understanding, and from understanding to action.</p>
          <div className="pillar-grid">
            {pillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return <article className="pillar-card" key={pillar.number}>
                <div className="pillar-top"><span>{pillar.number}</span><PillarIcon size={22} /></div>
                <h3>{pillar.title}</h3><p>{pillar.copy}</p><span className="pillar-rule" />
              </article>;
            })}
          </div>
        </section>

        <section id="ecosystem" className="ecosystem-section section-space">
          <div className="section-wrap">
            <div className="section-heading heading-row">
              <div><p className="section-kicker">EXPLORE WHAT WE BUILD</p><h2>Products with a <em>purpose.</em></h2></div>
              <p className="section-intro">Explore selected ventures from the ATSFY ecosystem. Each product focuses on a distinct need, with a clear path to learn more.</p>
            </div>
            <div className="product-grid">
              {ECOSYSTEM_DATA.map((module, idx) => (
                <motion.article className="product-card" key={module.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: Math.min(idx * 0.06, 0.24) }}>
                  <div className="product-card-top"><span className="product-icon"><IconForModule name={module.icon} /></span><span className="product-index">{String(idx + 1).padStart(2, '0')}</span></div>
                  <p className="product-category">{module.subtitle}</p>
                  <h3>{module.title}</h3>
                  <p className="product-description">{module.description}</p>
                  <div className="product-audience"><span>Designed for</span><p>{module.targetUsers}</p></div>
                  <a className="product-link" href={module.url} target="_blank" rel="noopener noreferrer">Explore product <ArrowUpRight size={16} /></a>
                </motion.article>
              ))}
            </div>
            <p className="catalog-note">Product availability and capabilities may vary by venture. Follow each product link for its current experience.</p>
          </div>
        </section>

        <section id="mvp" className="mvp-section section-space">
          <div className="section-wrap">
            <div className="mvp-heading">
              <div><p className="section-kicker">INTERACTIVE PREVIEW</p><h2>Meet the <em>Core Intelligence</em> concept.</h2></div>
              <p>Try the existing prototype below. It is an exploratory demo, not a substitute for professional advice or a guarantee of product availability.</p>
            </div>
            <InteractiveMVP />
          </div>
        </section>

        <section className="core-section section-space">
          <div className="section-wrap core-layout">
            <div className="core-copy">
              <p className="section-kicker">A SHARED POINT OF VIEW</p>
              <h2>Technology should make complexity <em>easier to navigate.</em></h2>
              <p>Our long-term direction is an ecosystem of focused products supported by shared principles: useful intelligence, understandable experiences and responsible development.</p>
              <div className="core-points">
                <div><span className="core-point-icon"><Sparkles size={17} /></span><div><strong>Useful by design</strong><p>Start with a real problem, then make the experience clear and actionable.</p></div></div>
                <div><span className="core-point-icon"><ShieldCheck size={17} /></span><div><strong>Trust is part of the product</strong><p>Explain capabilities honestly and treat privacy, safety and user control as essential.</p></div></div>
                <div><span className="core-point-icon"><Globe2 size={17} /></span><div><strong>Rooted here, open to the world</strong><p>Build from Northeast India with the ambition to serve diverse communities.</p></div></div>
              </div>
            </div>
            <div className="core-visual">
              <div className="visual-label"><span className="eyebrow-dot" /> THE INTELLIGENCE LAYER</div>
              <div className="visual-center"><Network size={31} /><strong>Shared principles</strong><span>Clarity · Utility · Responsibility</span></div>
              <div className="visual-branches"><span>People</span><span>Enterprise</span><span>Impact</span></div>
              <p>One consistent philosophy across focused product experiences.</p>
            </div>
          </div>
        </section>

        <section id="ethics" className="ethics-section section-space">
          <div className="section-wrap ethics-panel">
            <div className="ethics-icon"><ShieldCheck size={25} /></div>
            <div className="ethics-copy"><p className="section-kicker">RESPONSIBLE BY INTENTION</p><h2>Trust is not a feature to add later.</h2><p>We believe AI should be understandable, useful and designed with the people it affects in mind. Our public claims should reflect practices we can demonstrate — not promises made for appearance.</p></div>
            <a className="button button-dark" href="mailto:info@atsfy.tech?subject=Responsible%20AI%20at%20ATSFY">Discuss our approach <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="founder" className="section-wrap founder-section section-space">
          <div className="founder-mark" aria-hidden="true">AP</div>
          <div className="founder-copy"><p className="section-kicker">OUR ROOTS</p><h2>Built from the Northeast.<br /><em>Looking outward.</em></h2><p>ATSFY is led by Ayan Pal, a founder from Tripura building technology around practical challenges and wider opportunity. The ambition is global; the starting point remains close to home.</p><a className="text-link" href="https://www.linkedin.com/in/atsfy/" target="_blank" rel="noopener noreferrer">Connect with the founder <ArrowUpRight size={16} /></a></div>
          <div className="founder-side"><span className="founder-quote-mark">“</span><p>World-class ideas can begin anywhere. What matters is the problem we choose to solve — and how responsibly we solve it.</p><span className="quote-attribution">ATSFY TECHNOLOGIES <span>·</span> TRIPURA → WORLD</span></div>
        </section>

        <section className="contact-section">
          <div className="section-wrap contact-inner">
            <p className="section-kicker">LET'S BUILD WHAT'S NEXT</p>
            <h2>Have a problem worth<br /><em>solving together?</em></h2>
            <p>For business enquiries, institutional partnerships and conversations about the ATSFY ecosystem, we would be glad to hear from you.</p>
            <a className="button button-primary" href="mailto:info@atsfy.tech?subject=Connect%20with%20ATSFY%20Technologies">Talk to ATSFY <Mail size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <a className="brand" href="#top"><span className="brand-mark"><Layers size={21} /></span><span className="brand-copy"><strong>ATSFY</strong><small>TECHNOLOGIES</small></span></a>
          <p>Intelligence that connects ideas to impact.</p>
          <div className="footer-links"><a href="#ecosystem">Ecosystem</a><a href="#ethics">Responsible AI</a><a href="https://www.linkedin.com/in/atsfy/" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="mailto:info@atsfy.tech"><Mail size={15} /> Email</a></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} ATSFY Technologies</span><span>Tripura, Northeast India <span className="footer-arrow">→</span> World</span></div>
      </footer>
    </div>
  );
};

export default App;
