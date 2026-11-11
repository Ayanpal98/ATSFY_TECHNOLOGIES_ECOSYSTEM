import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown,
  Cpu, GraduationCap, Layers3, Linkedin, Menu, Rocket, ShieldCheck,
  Sparkles, TrendingUp, X, Globe2, Mail, Github, Leaf
} from 'lucide-react';
import { ECOSYSTEM_DATA } from './types';

const icons: Record<string, React.ElementType> = {
  GraduationCap, BookOpen, Cpu, Rocket, TrendingUp
};

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const links = [['Ecosystem', '#ecosystem'], ['Approach', '#approach'], ['Principles', '#principles'], ['Founder', '#founder']];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#1c301f]">
      <motion.div className="fixed left-0 top-0 z-[70] h-[2px] bg-[#d9a43b]" style={{ width: progress }} />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[.24] grain" />
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f7f6f2]/90 shadow-[0_8px_40px_rgba(28,48,31,.08)] backdrop-blur-xl' : 'bg-transparent'}`}>
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <a href="#top" className="group flex items-center gap-3" aria-label="ATSFY home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c301f] text-[#d9a43b] shadow-lg shadow-[#1c301f]/15"><Layers3 size={21}/></span>
            <span className="font-display text-[19px] font-bold tracking-[-.06em]">ATSFY<span className="text-[#657253]">.</span><span className="ml-1 text-[10px] font-semibold tracking-[.19em] text-[#657253]">TECHNOLOGIES</span></span>
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {links.map(([label, href]) => <a key={href} href={href} className="text-[13px] font-semibold text-[#52614e] transition hover:text-[#1c301f]">{label}</a>)}
            <a href="#contact" className="rounded-full bg-[#1c301f] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#285040]">Let's build together <ArrowUpRight className="ml-2 inline" size={14}/></a>
          </div>
          <button className="rounded-full border border-[#1c301f]/15 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        </nav>
        {menuOpen && <div className="border-t border-[#1c301f]/10 bg-[#f7f6f2] px-6 py-5 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="block border-b border-[#1c301f]/10 py-3 text-sm font-semibold">{label}</a>)}<a href="#contact" onClick={closeMenu} className="mt-4 block rounded-xl bg-[#1c301f] p-3 text-center text-sm font-bold text-white">Let's build together</a></div>}
      </header>

      <section id="top" className="relative z-10 px-5 pb-24 pt-36 md:px-10 md:pb-36 md:pt-52">
        <div className="absolute right-[-10%] top-24 -z-10 h-[620px] w-[620px] rounded-full border border-[#285040]/10 md:right-[2%]">
          <div className="absolute inset-[9%] rounded-full border border-[#285040]/10"/>
          <div className="absolute inset-[19%] rounded-full border border-[#285040]/10"/>
          <div className="absolute left-[15%] top-[22%] h-3 w-3 rounded-full bg-[#d9a43b] shadow-[0_0_30px_#d9a43b]"/>
          <div className="absolute bottom-[18%] right-[16%] h-2 w-2 rounded-full bg-[#657253]"/>
        </div>
        <div className="mx-auto max-w-[1440px]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#285040]/15 bg-white/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#52614e]">
            <span className="h-2 w-2 rounded-full bg-[#d9a43b]"/> Building from Northeast India
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .8 }} className="max-w-[1050px] font-display text-[clamp(3.6rem,9.5vw,9.5rem)] font-medium leading-[.91] tracking-[-.085em]">
            Intelligence<br/><span className="serif-italic text-[#657253]">with purpose.</span>
          </motion.h1>
          <div className="mt-10 grid max-w-5xl grid-cols-1 gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[620px] text-lg leading-[1.65] text-[#52614e] md:text-[21px]">ATSFY Technologies is an independent AI and technology venture studio in Agartala, Tripura. We build practical digital products across learning, career intelligence, knowledge systems, and business — from Northeast India for wider markets.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#ecosystem" className="rounded-full bg-[#1c301f] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#285040]">Explore our work <ArrowDown className="ml-3 inline" size={15}/></a>
              <a href="#contact" className="rounded-full border border-[#1c301f]/20 px-6 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-white">Talk to ATSFY <ArrowUpRight className="ml-3 inline" size={15}/></a>
            </div>
          </div>
          <div className="mt-24 flex flex-col justify-between gap-5 border-t border-[#1c301f]/15 pt-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#657253] md:flex-row">
            <span>Independent technology venture studio</span><span>Agartala, Tripura · India</span><span>Tripura → World</span>
          </div>
        </div>
      </section>

      <section id="approach" className="relative z-10 bg-[#1c301f] px-5 py-24 text-[#f7f6f2] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-[.8fr_1.2fr] md:gap-24">
          <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#d9a43b]">01 / The idea</p><h2 className="font-display text-5xl leading-[1.02] tracking-[-.06em] md:text-7xl">One core.<br/><span className="serif-italic text-[#c5cdb8]">Many possibilities.</span></h2></div>
          <div className="max-w-2xl self-end"><p className="text-xl leading-[1.65] text-white/75 md:text-2xl">ATSFY is building a connected portfolio of technology products and ventures, supported by shared thinking across product, engineering, AI, and operations.</p><p className="mt-7 max-w-xl text-sm leading-7 text-white/45">We focus on practical problems, responsible use of technology, and products that can grow from regional needs to wider markets. Each product has its own purpose; the shared ambition is to make technology more useful and accessible.</p></div>
        </div>
        <div className="mx-auto mt-20 grid max-w-[1440px] grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ['01','People first','Build around real human needs.'],
            ['02','Explainable by design','Make decisions easier to understand.'],
            ['03','Built to connect','Create products that work better together.']
          ].map(([n,t,d])=><div key={n} className="bg-[#1c301f] p-7 md:p-9"><span className="text-xs text-[#d9a43b]">{n}</span><h3 className="mt-8 font-display text-2xl tracking-tight">{t}</h3><p className="mt-3 text-sm text-white/45">{d}</p></div>)}
        </div>
      </section>

      <section id="ecosystem" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-7 md:mb-20 md:flex-row md:items-end">
            <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#9a742b]">02 / The portfolio</p><h2 className="font-display text-5xl tracking-[-.07em] md:text-7xl">Ideas in motion<span className="text-[#d9a43b]">.</span></h2></div>
            <p className="max-w-md text-base leading-7 text-[#657253]">A growing portfolio across learning, knowledge, careers, venture building, and financial intelligence.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ECOSYSTEM_DATA.map((item, i) => {
              const Icon = icons[item.icon] || Cpu;
              return <motion.article key={item.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: i * .06 }} className="group flex min-h-[360px] flex-col rounded-[22px] border border-[#1c301f]/10 bg-white/65 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#657253]/40 hover:bg-white hover:shadow-[0_22px_70px_rgba(28,48,31,.09)] md:p-9">
                <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9ede4] text-[#285040]"><Icon size={22}/></span><span className="font-mono text-xs text-[#9aa18e]">0{i+1}</span></div>
                <p className="mt-9 text-[10px] font-bold uppercase tracking-[.2em] text-[#9a742b]">{item.subtitle}</p>
                <h3 className="mt-2 font-display text-3xl tracking-[-.05em]">{item.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#657253]">{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-between border-t border-[#1c301f]/10 pt-5 text-xs font-bold"><span>Explore product</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c301f]/15 transition group-hover:border-[#1c301f] group-hover:bg-[#1c301f] group-hover:text-white"><ArrowUpRight size={16}/></span></a>
              </motion.article>
            })}
          </div>
          <p className="mt-6 text-[11px] leading-5 text-[#8b9383]">Portfolio links reflect the product destinations currently configured by ATSFY. Product availability and capabilities may vary by destination.</p>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#e9ede4] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-[1fr_1fr]">
          <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#9a742b]">03 / The shared layer</p><h2 className="font-display text-5xl leading-[1.04] tracking-[-.07em] md:text-7xl">The work behind<br/><span className="serif-italic text-[#657253]">the products.</span></h2><p className="mt-8 max-w-lg text-base leading-8 text-[#52614e]">A consistent foundation for turning ideas into useful digital experiences — from early product thinking to engineering, deployment, and ongoing improvement.</p></div>
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[7%] rounded-full border border-[#285040]/15"/><div className="absolute inset-[20%] rounded-full border border-[#285040]/20"/><div className="absolute inset-[34%] rounded-full border border-[#285040]/25"/>
            <div className="absolute inset-0 flex items-center justify-center"><div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#1c301f] text-[#f7f6f2] shadow-2xl"><Layers3 size={28} className="mb-2 text-[#d9a43b]"/><span className="text-[10px] font-bold uppercase tracking-[.18em]">ATSFY Core</span></div></div>
            {[
              ['AI & research','top-[2%] left-1/2 -translate-x-1/2'],
              ['Engineering','right-[-1%] top-1/2 -translate-y-1/2'],
              ['Product design','bottom-[2%] left-1/2 -translate-x-1/2'],
              ['Operations','left-[-1%] top-1/2 -translate-y-1/2']
            ].map(([label,pos])=><div key={label} className={`absolute ${pos} rounded-full border border-[#285040]/15 bg-[#f7f6f2] px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#52614e] shadow-sm`}>{label}</div>)}
            <div className="absolute left-[17%] top-[18%] h-2 w-2 rounded-full bg-[#d9a43b]"/><div className="absolute bottom-[20%] right-[16%] h-2 w-2 rounded-full bg-[#657253]"/>
          </div>
        </div>
      </section>

      <section id="principles" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#9a742b]">04 / Principles</p>
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]"><h2 className="font-display text-5xl tracking-[-.07em] md:text-7xl">Progress,<br/><span className="serif-italic text-[#657253]">with principles.</span></h2>
            <div className="divide-y divide-[#1c301f]/10">
              {[
                [ShieldCheck,'Responsible AI','We value explainability, human oversight, privacy, and fairness in the way technology is designed and used.'],
                [Globe2,'Access for more people','Products should account for different languages, contexts, devices, and levels of connectivity.'],
                [Leaf,'Long-term thinking','We aim to build with care, learn from real use, and grow in a way that creates lasting value.']
              ].map(([Icon,title,desc]: any)=><div key={title} className="grid gap-4 py-7 sm:grid-cols-[50px_1fr]"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9ede4] text-[#285040]"><Icon size={20}/></span><div><h3 className="font-display text-2xl tracking-tight">{title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-[#657253]">{desc}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="relative z-10 bg-[#285040] px-5 py-24 text-[#f7f6f2] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[.65fr_1.35fr] md:items-center md:gap-24">
          <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[340px] items-center justify-center overflow-hidden rounded-[180px_180px_24px_24px] border border-white/20 bg-[#1c301f]">
            <div className="absolute inset-0 founder-lines opacity-40"/><span className="relative font-display text-[100px] font-medium tracking-[-.1em] text-[#d9a43b]">AP</span><span className="absolute bottom-7 text-[9px] font-bold uppercase tracking-[.25em] text-white/50">Founder · ATSFY</span>
          </div>
          <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#d9a43b]">05 / The founder</p><h2 className="font-display text-5xl tracking-[-.07em] md:text-7xl">Built from<br/><span className="serif-italic text-[#d7dfd1]">where we stand.</span></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">Founded by Ayan Pal, ATSFY carries a belief that world-class technology can be built from anywhere. Rooted in Tripura, the ambition is to create products that are grounded in real needs and ready to reach the world.</p><div className="mt-9 flex flex-wrap gap-3"><a href="https://www.linkedin.com/in/atsfy/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 text-xs font-bold transition hover:bg-white hover:text-[#1c301f]"><Linkedin className="mr-2 inline" size={15}/> Connect on LinkedIn</a><a href="https://github.com/Ayanpal98" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 text-xs font-bold transition hover:bg-white hover:text-[#1c301f]"><Github className="mr-2 inline" size={15}/> GitHub</a></div></div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px] rounded-[28px] bg-[#d9a43b] px-7 py-14 md:px-16 md:py-20">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#1c301f]/65">06 / Start a conversation</p>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><h2 className="max-w-3xl font-display text-5xl leading-[1] tracking-[-.07em] md:text-7xl">Have a meaningful<br/>problem to solve?</h2><p className="mt-6 max-w-xl text-base leading-7 text-[#1c301f]/70">We'd like to hear what you're building, what needs to work better, or where technology could help.</p></div><a href="mailto:info@atsfy.tech?subject=Let's%20build%20together" className="inline-flex items-center justify-center rounded-full bg-[#1c301f] px-7 py-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#285040]">Email ATSFY <ArrowUpRight className="ml-4" size={17}/></a></div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#1c301f]/10 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 text-xs text-[#657253] md:flex-row md:items-center">
          <a href="#top" className="font-display text-lg font-bold tracking-[-.06em] text-[#1c301f]">ATSFY<span className="text-[#d9a43b]">.</span></a>
          <p>© {new Date().getFullYear()} ATSFY Technologies. Built from Tripura, India.</p>
          <div className="flex gap-5"><a href="mailto:info@atsfy.tech" className="hover:text-[#1c301f]">Contact</a><a href="https://www.linkedin.com/in/atsfy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1c301f]">LinkedIn</a><a href="https://github.com/Ayanpal98" target="_blank" rel="noopener noreferrer" className="hover:text-[#1c301f]">GitHub</a></div>
        </div>
      </footer>
    </main>
  );
};

export default App;
