import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  ChevronRight, 
  Globe, 
  ArrowUpRight,
  Zap,
  Shield,
  Layers,
  Linkedin,
  Github
} from 'lucide-react';
import { ECOSYSTEM_DATA } from './types';
import { InteractiveMVP } from './components/InteractiveMVP';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className="min-h-screen grid-pattern relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass py-4 border-b border-white/10 shadow-2xl" 
          : "bg-transparent py-6 border-b border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Layers className="text-black w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">ATSFY <span className="text-brand-primary">TECH</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
            <a href="#mvp" className="hover:text-white transition-colors">Core MVP</a>
            <a href="#ethics" className="hover:text-white transition-colors">Ethics</a>
            <a href="#founder" className="hover:text-white transition-colors">Founder</a>
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <button className="px-5 py-2 rounded-full bg-white text-black font-bold hover:bg-brand-primary transition-all">
              Join Network
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-bold tracking-widest uppercase text-brand-primary mb-8"
          >
            <SparkleIcon className="w-4 h-4" />
            Future AI Ecosystem
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            Building Interconnected <br />
            <span className="gradient-text">AI Infrastructure</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-12"
          >
            From talent readiness to financial growth — emerging from the Northeast for India and beyond. ATSFY is the parent firm powering the next generation of intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-primary text-black font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Explore Ecosystem <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl glass border-white/10 font-bold text-lg hover:bg-white/5 transition-colors">
              Read Whitepaper
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section id="value-prop" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
                The <span className="text-brand-primary">Interconnected</span> Advantage
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                ATSFY Technologies uniquely enables an AI ecosystem by bridging the gap between talent development and financial growth. We don't just build isolated tools; we build a continuous pipeline of intelligence.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Talent-to-Finance Pipeline</h4>
                    <p className="text-white/40 text-sm">We nurture talent through Education AI, validate their innovations with StartupLens, and fuel their growth with Finance XAI.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
                    <Globe className="text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Regional Roots, Global Reach</h4>
                    <p className="text-white/40 text-sm">Born in Northeast India, we leverage regional talent to build AI solutions that solve global challenges in hiring, learning, and finance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden glass border-white/10 p-1 flex items-center justify-center">
                <div className="w-full h-full bg-black/40 rounded-[22px] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-30" />
                  <div className="text-center z-10">
                    <div className="text-5xl font-bold font-display mb-2">Core Value</div>
                    <div className="text-brand-primary font-mono tracking-widest uppercase text-xs">Propelling Ecosystem Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section id="ecosystem" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">The Ecosystem</h2>
              <p className="text-white/40 max-w-md">Five specialized AI verticals interconnected by a single core intelligence layer.</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-mono text-white/30">
              <span className="flex items-center gap-1"><Globe size={14} /> Global Scale</span>
              <span className="flex items-center gap-1"><Shield size={14} /> Secure Infra</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_DATA.map((module, idx) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl glass border-white/5 hover:border-white/20 transition-all relative overflow-hidden flex flex-col"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${module.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-brand-dark flex items-center justify-center">
                    <IconComponent name={module.icon} className="text-white w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-1">{module.title}</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">{module.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{module.description}</p>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-primary mb-1">Main Function</h4>
                    <p className="text-xs text-white/40">{module.mainFunction}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary mb-1">Problem Solved</h4>
                    <p className="text-xs text-white/40">{module.problemSolved}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-1">Target Users</h4>
                    <p className="text-xs text-white/40">{module.targetUsers}</p>
                  </div>
                </div>                <a 
                  href={module.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold group-hover:text-brand-primary transition-colors mt-auto"
                >
                  Learn More <ArrowUpRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MVP Section */}
      <section id="mvp" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">Core Intelligence</h2>
            <p className="text-white/40 max-w-2xl mx-auto">Experience the introductory MVP of our interconnected brain. This layer powers every startup in the ATSFY ecosystem.</p>
          </div>
          <InteractiveMVP />
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="future-vision" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tight mb-8">
              Future <span className="gradient-text">Vision</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-16 p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="relative z-10 text-brand-primary font-mono text-xs tracking-[0.3em] uppercase font-bold mb-6">Mission Statement</p>
              <h3 className="relative z-10 text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight">
                To build an interconnected AI infrastructure that empowers global talent and drives innovation, rooted in the unique potential of Northeast India.
              </h3>
            </div>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-16">
              Our long-term aspiration is to redefine how AI ecosystems are built globally. Starting from the Northeast of India, we are creating a blueprint for decentralized, high-impact innovation that scales across borders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass border-white/5">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="text-brand-primary" />
              </div>
              <h4 className="font-bold text-xl mb-4">Global Impact</h4>
              <p className="text-white/40 text-sm">Exporting Northeast India's unique problem-solving perspective to global markets, creating AI that is both culturally nuanced and technically superior.</p>
            </div>
            <div className="p-8 rounded-3xl glass border-white/5">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Cpu className="text-brand-secondary" />
              </div>
              <h4 className="font-bold text-xl mb-4">Autonomous Growth</h4>
              <p className="text-white/40 text-sm">Developing self-evolving AI models that learn from the ecosystem's own data to continuously improve hiring, learning, and financial outcomes.</p>
            </div>
            <div className="p-8 rounded-3xl glass border-white/5">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center mx-auto mb-6">
                <Layers className="text-purple-400" />
              </div>
              <h4 className="font-bold text-xl mb-4">Unified Intelligence</h4>
              <p className="text-white/40 text-sm">A future where every individual and startup has access to a personal AI 'Core' that manages their entire professional and financial lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI Section */}
      <section id="ethics" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[10px] font-bold tracking-widest uppercase text-emerald-400 mb-8">
                <Shield className="w-3 h-3" /> Responsible AI
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Ethics by <span className="text-emerald-400">Design</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                At ATSFY Technologies, we believe that the power of AI comes with a profound responsibility. Our commitment to ethical development is woven into the very fabric of our infrastructure.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center shrink-0">
                    <Shield className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Data Privacy First</h4>
                    <p className="text-white/40 text-sm">We implement industry-leading encryption and decentralized data storage protocols to ensure that user information remains private and secure at all times.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Zap className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Bias Mitigation</h4>
                    <p className="text-white/40 text-sm">Our models undergo rigorous testing and continuous auditing to identify and eliminate algorithmic biases, ensuring fair outcomes for all users across our ecosystem.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Layers className="text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Radical Transparency</h4>
                    <p className="text-white/40 text-sm">Through our Explainable AI (XAI) initiatives, we provide clear insights into how our models make decisions, fostering trust and accountability.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] glass border-white/10 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-30" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-3xl bg-emerald-400/20 flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Shield className="w-12 h-12 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-display font-bold mb-4">Trust Infrastructure</div>
                  <p className="text-white/40 text-sm max-w-xs mx-auto">Building the world's most trusted AI ecosystem through rigorous ethical standards and transparent development.</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-emerald-400/20 rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border border-cyan-400/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden glass border-white/10 relative group">
                <img 
                  src="https://picsum.photos/seed/ayanpal/800/1000" 
                  alt="Ayan Pal" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-brand-primary font-mono text-xs tracking-widest uppercase font-bold mb-2">Founder & Managing Partner</p>
                  <h3 className="text-3xl font-display font-bold">Ayan Pal</h3>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary/20 blur-3xl rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] font-bold tracking-widest uppercase text-brand-primary mb-8">
                <SparkleIcon className="w-3 h-3" /> Leadership
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Rooted in <span className="gradient-text">Truth</span>
              </h2>
              <div className="space-y-6">
                <p className="text-white/80 text-xl font-medium leading-relaxed italic">
                  "Hardcore farmer turned tech founder. Building ATSfy — a transparent, merit‑first hiring system as honest and visible as a field in daylight."
                </p>
                <div className="h-px w-20 bg-brand-primary/30" />
                <p className="text-white/50 text-lg leading-relaxed">
                  Ayan's journey from the fields to the forefront of AI innovation defines the ethos of ATSFY Technologies. His perspective ensures that our technology remains grounded, practical, and focused on real-world impact.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <a href="https://www.linkedin.com/in/atsfy/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass rounded-[40px] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center mb-8">
                <Zap className="text-brand-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">From Northeast India <br />to the World.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                ATSFY Technologies isn't just building apps; we're building the foundational layer for an AI-first future. By focusing on talent readiness and financial reasoning, we're ensuring that the benefits of AI are accessible and actionable for everyone.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-3xl font-bold font-display">5+</p>
                  <p className="text-xs uppercase tracking-widest text-white/30 font-bold">Startups</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-3xl font-bold font-display">100%</p>
                  <p className="text-xs uppercase tracking-widest text-white/30 font-bold">AI Driven</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass border-white/10 p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Abstract Visual Representation of Interconnectedness */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-brand-primary/20 blur-2xl animate-pulse" />
                    <Cpu className="w-24 h-24 text-brand-primary relative z-10" />
                  </div>
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                      style={{ transform: `rotate(${deg}deg)` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl glass border-white/20 flex items-center justify-center">
                        {i === 0 && <GraduationCap size={20} />}
                        {i === 1 && <BookOpen size={20} />}
                        {i === 2 && <Rocket size={20} />}
                        {i === 3 && <TrendingUp size={20} />}
                        {i === 4 && <Shield size={20} />}
                      </div>
                    </motion.div>
                  ))}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <circle cx="50%" cy="50%" r="35%" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center">
              <Layers className="text-black w-4 h-4" />
            </div>
            <span className="font-display font-bold text-lg">ATSFY TECH</span>
          </div>
          <p className="text-white/20 text-sm">© 2026 ATSFY Technologies. All rights reserved.</p>
          <div className="flex gap-6 text-white/40 hover:text-white transition-colors text-sm">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/atsfy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Rocket': return <Rocket className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    default: return <Cpu className={className} />;
  }
};

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M3 5h4" /><path d="M21 17v4" /><path d="M19 19h4" />
  </svg>
);

export default App;
