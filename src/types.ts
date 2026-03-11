export interface EcosystemModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mainFunction: string;
  problemSolved: string;
  targetUsers: string;
  url: string;
  icon: string;
  features: string[];
  color: string;
}

export const ECOSYSTEM_DATA: EcosystemModule[] = [
  {
    id: 'education',
    title: 'Education AI',
    subtitle: 'Talent Readiness',
    description: 'AI-powered teaching & assessment tools that prepare the next generation of talent.',
    mainFunction: 'Automates personalized learning paths and skill assessments using adaptive AI algorithms.',
    problemSolved: 'The gap between traditional academic curricula and the rapidly evolving skills required by the modern AI industry.',
    targetUsers: 'Students, educators, and educational institutions looking to modernize their learning infrastructure.',
    url: 'https://education-ai-assistant.lovable.app/',
    icon: 'GraduationCap',
    features: ['Adaptive Learning', 'Automated Assessment', 'Skill Gap Analysis'],
    color: 'from-emerald-400 to-cyan-400'
  },
  {
    id: 'knowledge',
    title: 'Knowledge Enabler',
    subtitle: 'AI Knowledge Assistant',
    description: 'Conversational AI that transforms complex information into accessible, actionable knowledge.',
    mainFunction: 'Synthesizes vast amounts of unstructured data into structured, easy-to-digest insights via a conversational interface.',
    problemSolved: 'Information overload and the difficulty of extracting actionable intelligence from fragmented data sources.',
    targetUsers: 'Researchers, professionals, and lifelong learners who need quick, accurate information synthesis.',
    url: 'https://knowledge-enabler.lovable.app/chat',
    icon: 'BookOpen',
    features: ['Semantic Search', 'Contextual Reasoning', 'Knowledge Graphs'],
    color: 'from-blue-400 to-indigo-400'
  },
  {
    id: 'core',
    title: 'ATSfy Core',
    subtitle: 'Core Intelligence Layer',
    description: 'AI-driven transparent hiring infrastructure powering recruiter & candidate intelligence.',
    mainFunction: 'Provides a transparent, data-driven matching engine that evaluates candidates based on deep skill mapping.',
    problemSolved: 'Opaque and biased hiring processes that often overlook qualified talent due to inefficient screening methods.',
    targetUsers: 'Recruiters, HR departments, and job seekers seeking a fair and intelligent hiring experience.',
    url: 'https://atsfy-your-resume.lovable.app/',
    icon: 'Cpu',
    features: ['Recruiter Intelligence', 'Candidate Intelligence', 'Bias-Free Matching'],
    color: 'from-purple-400 to-pink-400'
  },
  {
    id: 'startuplens',
    title: 'StartupLens',
    subtitle: 'Startup Validation',
    description: 'AI-powered startup scoring across impact, viability, and market readiness.',
    mainFunction: 'Analyzes startup ideas and business models against market trends and historical data to provide a viability score.',
    problemSolved: 'High failure rates of early-stage startups due to lack of objective market validation and strategic guidance.',
    targetUsers: 'Founders, angel investors, and venture capitalists looking for data-backed startup evaluations.',
    url: 'https://ventureval.lovable.app/',
    icon: 'Rocket',
    features: ['Viability Scoring', 'Market Readiness', 'Founder Tools'],
    color: 'from-orange-400 to-red-400'
  },
  {
    id: 'finance',
    title: 'Finance XAI',
    subtitle: 'Financial Reasoning',
    description: 'Explainable AI for transparent financial guidance, budgeting, and goal planning.',
    mainFunction: 'Offers financial advice and planning with clear, human-readable explanations for every AI-generated recommendation.',
    problemSolved: 'The "black box" nature of traditional financial AI, which provides advice without explaining the underlying reasoning.',
    targetUsers: 'Individual investors, small business owners, and financial planners seeking transparent AI guidance.',
    url: 'https://intelli-finance-insights--ayanpal0698.replit.app/',
    icon: 'TrendingUp',
    features: ['Financial Reasoning', 'Explainable Forecasts', 'Goal Planning'],
    color: 'from-yellow-400 to-amber-400'
  }
];
