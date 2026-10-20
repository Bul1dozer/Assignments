import { useState, useEffect, useRef } from 'react';
import {
  Building2,
  Target,
  Users,
  MessageSquare,
  Image as ImageIcon,
  Video,
  ArrowRight,
  ArrowDown,
  X,
  CheckCircle,
  Play,
  FileText,
  Film,
  Palette,
  Shield,
  Smartphone,
  MessageCircle,
  Zap,
  Heart,
  GraduationCap,
  Mail,
  MapPin,
  Lightbulb,
  Lock,
  Eye,
  AlertTriangle,
  HelpCircle,
  Megaphone,
  Share2,
  Briefcase,
  Baby,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import type { SectionId } from '@/components/Header';
import { campaignInfo, campaignAssets, multimediaScript } from '@/data/campaign';
import CampaignAssetCard from '@/components/CampaignAssetCard';

interface CampaignPageProps {
  onNavigate: (section: SectionId) => void;
}

const objectiveIcons = [
  Megaphone,
  Smartphone,
  Lightbulb,
  Share2,
  Shield,
  Heart,
  MessageSquare,
  UserCheck,
  Sparkles,
  Briefcase,
];

const objectiveLabels = [
  'Awareness',
  'Explore',
  'Explain Simply',
  'Engage',
  'Safety',
  'Trust',
  'Feedback',
  'Human Side',
  'Innovate',
  'Inform',
];

const audienceSegments = [
  { icon: GraduationCap, label: 'Young Adults & Students', desc: 'Value convenience and banking that fits around study and early career life.' },
  { icon: Briefcase, label: 'Working Professionals', desc: 'Appreciate quick access to banking information during a busy schedule.' },
  { icon: Building2, label: 'Small-Business Owners', desc: 'Need accessible banking information and flexible digital tools.' },
  { icon: Zap, label: 'Entrepreneurs', desc: 'Want modern, efficient ways to stay on top of their finances.' },
  { icon: Baby, label: 'Parents', desc: 'Benefit from banking that fits around family responsibilities.' },
  { icon: Smartphone, label: 'Smartphone Users', desc: 'Already comfortable using mobile apps and messaging platforms.' },
  { icon: UserCheck, label: 'Less Confident with Tech', desc: 'Need simple explanations and reassurance about digital safety.' },
];

const safetyTips = [
  { icon: Lock, title: 'Protect Your PIN & Passwords', desc: 'Never share your PIN, password, or one-time password (OTP) with anyone. Your bank will never ask for these.' },
  { icon: AlertTriangle, title: 'Recognise Suspicious Messages', desc: 'Be cautious of unexpected messages asking for personal or banking details. Scammers often create urgency.' },
  { icon: Eye, title: 'Be Careful with Links', desc: 'Do not click on links in unfamiliar messages or emails. They may lead to fake websites designed to steal information.' },
  { icon: Shield, title: 'Verify Before You Act', desc: 'If a banking communication seems unusual, confirm it through a trusted channel before taking any action.' },
  { icon: MessageCircle, title: 'Use Trusted Channels', desc: 'Only interact with banking services through channels you have verified as genuine.' },
  { icon: HelpCircle, title: 'Seek Human Assistance', desc: 'When something feels wrong or confusing, ask for help. Digital convenience does not mean losing human support.' },
];

const visualPrinciples = [
  'Bold, confident typography with clear hierarchy',
  'Campaign blue as the dominant colour, gold as accent',
  'Generous white space for readability',
  'Mobile-first composition for every asset',
  'Realistic, relatable Namibian imagery',
  'Consistent treatment across all platforms',
];

export default function CampaignPage({ onNavigate }: CampaignPageProps) {
  const [showScript, setShowScript] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showScript) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowScript(false);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [showScript]);

  return (
    <div className="pt-16">
      {/* ================================================================
          SECTION B: CAMPAIGN HERO
      ================================================================ */}
      <section
        id="section-overview"
        className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/15 rounded-full blur-3xl" />
        <div className="container-max relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 animate-scale-in">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-400/20 text-accent-200 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-up border border-accent-400/30">
            Mobile Journalism Campaign &middot; H2612CJ
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 animate-fade-up leading-tight">
            BANKING
            <br />
            <span className="text-accent-400">WHERE YOU ARE</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent-300 font-serif italic mb-8 animate-fade-up">
            Your bank. Your life. Your way.
          </p>
          <p className="text-base text-primary-100 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up">
            Your day is full of things that matter. Your banking should fit into it.
            Explore a campaign about digital convenience, safer banking habits and the
            value of human support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <button
              onClick={() => onNavigate('assets')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg"
            >
              Explore the Campaign
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('storyboard')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-sm transition-all border border-white/20"
            >
              <Play className="w-4 h-4" />
              Watch the Campaign Storyboard
            </button>
          </div>
          <p className="text-xs text-primary-300 mt-10 max-w-lg mx-auto">
            An independent academic project by {campaignInfo.studentInfo.name} &middot;{' '}
            {campaignInfo.studentInfo.courseCode}, {campaignInfo.studentInfo.year}
          </p>
        </div>
        <button
          onClick={() => onNavigate('strategy')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
          aria-label="Scroll to campaign introduction"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </section>

      {/* ================================================================
          SECTION C: CAMPAIGN INTRODUCTION
      ================================================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionLabel>Introduction</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Banking That Fits Into Everyday Life
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              The campaign presents digital banking as something that should fit into
              everyday life — not something intimidating or difficult to understand. It
              is a communication and education concept, not a working banking service.
              The campaign is built around three central themes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ThemeCard
              icon={Zap}
              title="Convenience"
              desc="Banking information and selected services can be accessed through digital channels, wherever you are."
              color="primary"
            />
            <ThemeCard
              icon={Shield}
              title="Confidence"
              desc="Customers should understand what digital services do and how to use them safely and with confidence."
              color="accent"
            />
            <ThemeCard
              icon={Heart}
              title="Human Support"
              desc="Digital convenience does not mean losing access to assistance. Human support remains an important part of banking."
              color="primary"
            />
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION D & E: STRATEGY & AUDIENCE
      ================================================================ */}
      <section id="section-strategy" className="py-16 md:py-20 bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <SectionLabel>Strategy & Audience</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Who the Campaign Speaks To
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {campaignInfo.targetAudience}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {audienceSegments.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="font-serif font-bold text-sm text-slate-900">{seg.label}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{seg.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Aim + secondary audience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600">
                  <Target className="w-5 h-5" />
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900">Campaign Aim</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{campaignInfo.objective}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-100 text-accent-600">
                  <Users className="w-5 h-5" />
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900">Secondary Audience</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Employees, communities, journalists and business stakeholders who are
                interested in how Bank Windhoek communicates about digital banking and
                customer education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION D: CAMPAIGN OBJECTIVES
      ================================================================ */}
      <section id="section-objectives" className="py-16 md:py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <SectionLabel>Objectives</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Ten Campaign Objectives
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Each objective supports the campaign's central aim of making digital banking
              more understandable, convenient and relevant to everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {campaignInfo.objectives.map((obj, i) => {
              const Icon = objectiveIcons[i] || Target;
              return (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500 text-white flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-2xl font-serif font-black text-primary-200">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-primary-600 font-bold mb-1">
                    {objectiveLabels[i]}
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">{obj}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION F: KEY MESSAGES AND CAMPAIGN TONE
      ================================================================ */}
      <section id="section-messages" className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <SectionLabel>Key Messages</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              What the Campaign Says
            </h2>
          </div>

          {/* Key message banner */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-10 text-center shadow-lg">
              <MessageSquare className="w-10 h-10 text-accent-400 mx-auto mb-4" />
              <p className="font-serif text-xl md:text-2xl text-white leading-relaxed italic">
                "{campaignInfo.keyMessage}"
              </p>
            </div>
          </div>

          {/* Supporting messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {campaignInfo.supportingMessages.map((msg, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{msg}</p>
              </div>
            ))}
          </div>

          {/* Core campaign lines */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-center font-serif font-bold text-lg text-slate-800 mb-6">
              Core Campaign Lines
            </h3>
            <div className="space-y-3">
              {[
                'You have a busy life. Your banking should fit into it.',
                'Banking Where You Are.',
                'Your bank. Your life. Your way.',
                'Digital convenience. Human support.',
              ].map((line, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-6 py-4 border-l-4 border-accent-500 shadow-sm"
                >
                  <p className="font-serif italic text-base text-slate-800 text-center">
                    "{line}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tone & personality */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif font-bold text-lg text-slate-800 mb-4">Tone & Personality</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {campaignInfo.toneAndPersonality.map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION G: VISUAL IDENTITY AND ART DIRECTION
      ================================================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <SectionLabel>Visual Identity</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Brand Identity & Art Direction
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The campaign's visual identity is designed to demonstrate that all assets
              belong to one coherent campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {/* Colors */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Campaign Colours</h3>
              <div className="space-y-3">
                <ColorSwatch name="Primary Blue" hex="#0033A0" className="bg-primary-500" />
                <ColorSwatch name="Accent Gold" hex="#E8A020" className="bg-accent-500" />
                <ColorSwatch name="White" hex="#FFFFFF" className="bg-white border border-slate-200" />
                <ColorSwatch name="Dark Navy" hex="#001133" className="bg-primary-900" />
              </div>
            </div>

            {/* Typography */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Headlines
                  </p>
                  <p className="font-serif font-bold text-2xl text-primary-700">Playfair Display</p>
                  <p className="text-xs text-slate-500 mt-1">Bold, confident serif for campaign headlines</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Body Text
                  </p>
                  <p className="font-sans font-medium text-lg text-slate-700">Inter</p>
                  <p className="text-xs text-slate-500 mt-1">Clean, readable sans-serif for body copy</p>
                </div>
              </div>
            </div>

            {/* Visual principles */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Visual Principles</h3>
              <ul className="space-y-2">
                {visualPrinciples.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="text-accent-500 font-bold flex-shrink-0">&bull;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tone chips */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif font-bold text-sm text-slate-800 mb-3">
              <Palette className="w-4 h-4 inline-block mr-1 text-primary-500" />
              Tone & Personality
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {campaignInfo.toneAndPersonality.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION H: CAMPAIGN VISUAL ASSET GALLERY
      ================================================================ */}
      <section id="section-assets" className="py-16 md:py-20 bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <SectionLabel>Creative Assets</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Campaign Visual Asset Gallery
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Twelve campaign visuals across print, social media and digital platforms.
              Each card opens a detailed view with full specifications. These are
              design concept previews rendered in the campaign's visual style.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {campaignAssets.map((asset) => (
              <CampaignAssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION I: ASSET INVENTORY
      ================================================================ */}
      <section id="section-inventory" className="py-16 md:py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <SectionLabel>Asset Inventory</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Complete Asset Inventory
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Full specifications for all twelve campaign deliverables. The gallery and
              inventory draw from the same underlying data.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block max-w-6xl mx-auto">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-50 text-left">
                    <th className="px-4 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">#</th>
                    <th className="px-4 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Asset Name</th>
                    <th className="px-4 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Platform</th>
                    <th className="px-4 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Dimensions</th>
                    <th className="px-4 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Main Message</th>
                    <th className="px-4 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Format</th>
                    <th className="px-4 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignAssets.map((asset) => (
                    <tr key={asset.id} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary-600">{asset.id}</td>
                      <td className="px-4 py-3 font-medium text-slate-800">{asset.name}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{asset.platform}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{asset.dimensions}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs max-w-xs">{asset.message}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{asset.format}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-success-100 text-success-700">
                          <CheckCircle className="w-3 h-3" />
                          {asset.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
            {campaignAssets.map((asset) => (
              <div key={asset.id} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-start justify-between mb-2">
                  <span className="font-bold text-primary-600 text-sm">#{asset.id}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-success-100 text-success-700">
                    <CheckCircle className="w-3 h-3" />
                    {asset.status}
                  </span>
                </div>
                <h3 className="font-medium text-slate-800 text-sm mb-1">{asset.name}</h3>
                <p className="text-xs text-slate-500">{asset.platform} &middot; {asset.dimensions}</p>
                <p className="text-xs text-slate-600 mt-2">{asset.message}</p>
                <p className="text-[10px] text-slate-400 mt-2 font-mono">{asset.filename}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION J & K & L: MULTIMEDIA VIDEO + STORYBOARD + PRODUCTION NOTES
      ================================================================ */}
      <section id="section-storyboard" className="py-16 md:py-20 bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <SectionLabel>Video Storyboard</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              45-Second Campaign Video
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {multimediaScript.logline}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Video concept preview */}
            <div>
              <div className="relative aspect-[9/16] max-h-[520px] mx-auto bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute top-10 right-10 w-40 h-40 bg-accent-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary-400/15 rounded-full blur-3xl" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-white mb-3">
                    Banking Where You Are
                  </h3>
                  <p className="text-accent-300 text-sm mb-6 italic">{campaignInfo.tagline}</p>
                  <div className="space-y-2 text-white/80 text-xs max-w-xs">
                    {multimediaScript.script.slice(1, 4).map((s, i) => (
                      <p key={i} className="leading-relaxed">
                        {s.subtitle}
                      </p>
                    ))}
                    <p className="text-white/50">...</p>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-[10px] text-white/60 uppercase tracking-wider">Bank Windhoek</p>
                    <p className="text-[10px] text-accent-300 mt-1">Banking Where You Are</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full w-0 bg-accent-400" />
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 mt-3 italic">
                Video concept preview — {multimediaScript.duration},{' '}
                {multimediaScript.format}. This is a production storyboard, not a
                playable video.
              </p>
            </div>

            {/* Video specs + script button */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary-600" />
                <h3 className="font-serif font-bold text-xl text-slate-900">
                  {multimediaScript.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <SpecBox label="Format" value={multimediaScript.format} />
                <SpecBox label="Duration" value={multimediaScript.duration} />
                <div className="col-span-2">
                  <SpecBox label="Platforms" value={multimediaScript.platform} />
                </div>
              </div>

              <div className="p-4 bg-primary-50 rounded-lg mb-6">
                <h4 className="text-sm font-bold text-primary-800 mb-2 flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  Role in the Campaign
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The proposed video is the campaign's primary multimedia concept, designed
                  for mobile-first consumption. It condenses the campaign's message —
                  that banking should fit into everyday life — into 45 seconds of
                  shareable content. The vertical format ensures optimal viewing on
                  smartphones, the primary access point for the target audience.
                </p>
              </div>

              <button
                onClick={() => setShowScript(true)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-primary-200 text-primary-700 font-medium text-sm hover:bg-primary-50 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Full Production Script &amp; Storyboard
              </button>
            </div>
          </div>

          {/* Inline storyboard timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-6 text-center">
              Scene-by-Scene Storyboard
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 md:-translate-x-1/2" />

              <div className="space-y-6">
                {multimediaScript.script.map((scene, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row gap-4 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-500 border-2 border-white md:-translate-x-1/2 mt-6 z-10" />

                    {/* Content card */}
                    <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                        <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="px-2.5 py-1 rounded-full bg-primary-500 text-white text-xs font-bold">
                            {scene.time}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            Scene {i + 1}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed mb-3">
                          <span className="font-semibold text-slate-900">Visual: </span>
                          {scene.shot}
                        </p>
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                          <span className="font-semibold not-italic text-slate-900">Narration: </span>
                          {scene.narration}
                        </p>
                        {scene.subtitle && (
                          <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                            <span className="font-semibold text-slate-700">Subtitle: </span>
                            {scene.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Spacer for other half */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Production notes */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-6 text-center">
              Production Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(multimediaScript.productionNotes).map(([key, val]) => (
                <div key={key} className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <p className="text-[10px] uppercase tracking-wider text-accent-600 font-bold mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Production status notice */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-slate-900 mb-1">Storyboard status</p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  This script and storyboard represent a production-ready plan. The video
                  has not yet been filmed, edited or exported. The element above is a
                  concept preview, not a playable video file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION M: DIGITAL BANKING SAFETY AND CUSTOMER TRUST
      ================================================================ */}
      <section id="section-safety" className="py-16 md:py-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4">
              <Shield className="w-7 h-7 text-accent-400" />
            </div>
            <SectionLabel light>Safety & Trust</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
              Digital Banking Safety
            </h2>
            <p className="text-base text-primary-200 max-w-2xl mx-auto leading-relaxed">
              Educational guidance to help you bank more safely. This is general safety
              information, not a security guarantee. Always verify through trusted
              channels before acting on banking communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {safetyTips.map((tip, i) => {
              const Icon = tip.icon;
              return (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-400/20 text-accent-300">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="font-serif font-bold text-sm text-white">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-primary-100 leading-relaxed">{tip.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto mt-10">
            <div className="bg-white/5 rounded-lg p-5 border border-white/10 text-center">
              <p className="text-sm text-primary-100 leading-relaxed">
                These tips are part of the campaign's educational content. When something
                feels wrong or confusing, seek human assistance — digital convenience
                does not mean losing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION N: CAMPAIGN CALL TO ACTION
      ================================================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Banking Should Fit Into Your Life
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore the campaign. Understand your digital banking options. Make
              informed choices about your safety and the way you manage everyday banking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <CTAButton icon={ImageIcon} label="Explore Campaign Assets" onClick={() => onNavigate('assets')} />
            <CTAButton icon={Video} label="View Video Storyboard" onClick={() => onNavigate('storyboard')} />
            <CTAButton icon={Shield} label="Read Safety Tips" onClick={() => onNavigate('safety')} />
            <CTAButton icon={GraduationCap} label="About the Project" onClick={() => onNavigate('about')} />
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION O: ABOUT THE PROJECT AND ACADEMIC ATTRIBUTION
      ================================================================ */}
      <section id="section-about" className="py-16 md:py-20 bg-slate-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>About the Project</SectionLabel>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                Academic Attribution
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {campaignInfo.studentInfo.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    Student No: {campaignInfo.studentInfo.studentNumber}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Developed as a Mobile Journalism ({campaignInfo.studentInfo.courseCode})
                academic campaign project at the University of Namibia,{' '}
                {campaignInfo.studentInfo.campus}. This website is an independent
                student-created educational prototype exploring digital banking
                awareness, customer safety, convenience and human support through
                campaign visuals and a mobile video storyboard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoRow label="Course" value={`${campaignInfo.studentInfo.course} (${campaignInfo.studentInfo.courseCode})`} />
                <InfoRow label="Campus" value={campaignInfo.studentInfo.campus} />
                <InfoRow label="Assignment" value={campaignInfo.studentInfo.assignment} />
                <InfoRow label="Academic Year" value={campaignInfo.studentInfo.year} />
              </div>

              <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
                <p className="text-xs text-accent-900 leading-relaxed">
                  <strong>Disclaimer:</strong> This is an independent educational
                  prototype. It is not an official Bank Windhoek website or service, is
                  not affiliated with or endorsed by Bank Windhoek Limited, and does not
                  provide banking services. All campaign concepts, visuals and scripts
                  are student-produced educational content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION P: CONTACT
      ================================================================ */}
      <section id="section-contact" className="py-16 md:py-20 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              For questions about this academic campaign project, reach out using the
              student email below.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${campaignInfo.contact.email}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Email</p>
                    <p className="text-sm text-slate-700">{campaignInfo.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Location</p>
                    <p className="text-sm text-slate-700">{campaignInfo.studentInfo.campus}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-6 text-center leading-relaxed">
                This is an academic project contact. No banking services, account
                enquiries or transaction support are available through this contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SCRIPT MODAL
      ================================================================ */}
      {showScript && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowScript(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full production script and storyboard"
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Full Production Script &amp; Storyboard
              </h3>
              <button
                ref={closeButtonRef}
                onClick={() => setShowScript(false)}
                className="p-2 rounded-md hover:bg-slate-100"
                aria-label="Close script modal"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-4 mb-8">
                {multimediaScript.script.map((scene, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-3 p-4 bg-slate-50 rounded-lg"
                  >
                    <div>
                      <p className="text-xs font-bold text-primary-700">{scene.time}</p>
                      <p className="text-[10px] text-slate-400 mt-1">Scene {i + 1}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Visual
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">{scene.shot}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Narration / Subtitle
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed italic">
                        {scene.narration}
                      </p>
                      {scene.subtitle && (
                        <p className="text-[10px] text-slate-500 mt-1">
                          Subtitle: {scene.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-serif font-bold text-lg text-slate-900 mb-4">
                Production Notes
              </h4>
              <div className="space-y-3">
                {Object.entries(multimediaScript.productionNotes).map(([key, val]) => (
                  <div key={key} className="p-3 bg-accent-50 rounded-lg">
                    <p className="text-[10px] uppercase tracking-wider text-accent-600 font-semibold mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">{val}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-1">Storyboard status</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    This script and storyboard represent a production-ready plan. The
                    video has not yet been filmed, edited or exported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==================== Helper Components ==================== */

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 ${
        light ? 'text-accent-300' : 'text-accent-600'
      }`}
    >
      {children}
    </span>
  );
}

function ThemeCard({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: typeof Zap;
  title: string;
  desc: string;
  color: 'primary' | 'accent';
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
          color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-accent-100 text-accent-600'
        }`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function CTAButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: typeof Shield;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all group"
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500 text-white group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </span>
      <span className="text-sm font-medium text-slate-800 text-center">{label}</span>
    </button>
  );
}

function ColorSwatch({ name, hex, className }: { name: string; hex: string; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 rounded-lg ${className} flex-shrink-0`} />
      <div>
        <p className="text-sm font-medium text-slate-800">{name}</p>
        <p className="text-xs text-slate-500 font-mono">{hex}</p>
      </div>
    </div>
  );
}

function SpecBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-white rounded-lg border border-slate-100">
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
        {label}
      </p>
      <p className="text-sm text-slate-700">{value}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-slate-50 rounded-lg">
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
        {label}
      </p>
      <p className="text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}
