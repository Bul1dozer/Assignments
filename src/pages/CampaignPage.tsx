import { useState } from 'react';
import {
  Building2,
  Target,
  Users,
  MessageSquare,
  Image as ImageIcon,
  Video,
  ArrowRight,
  X,
  CheckCircle,
  Play,
  FileText,
  Film,
  Palette,
  Shield,
  List,
} from 'lucide-react';
import { campaignInfo, campaignAssets, multimediaScript } from '@/data/campaign';
import CampaignAssetCard from '@/components/CampaignAssetCard';

export default function CampaignPage() {
  const [showScript, setShowScript] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section id="campaign-overview" className="relative scroll-mt-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="container-max relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-scale-in">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-4 animate-fade-up">
            Mobile Journalism Campaign
          </span>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4 animate-fade-up">
            Banking Where You Are
          </h1>
          <p className="text-2xl text-accent-300 font-serif italic mb-6 animate-fade-up">
            {campaignInfo.tagline}
          </p>
          <p className="text-sm text-primary-100 max-w-2xl mx-auto leading-relaxed animate-fade-up">
            {campaignInfo.institutionFull}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#campaign-strategy" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary-800 transition hover:bg-primary-50">
              Explore the campaign <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#campaign-assets" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View creative assets
            </a>
          </div>
        </div>
      </section>

      {/* Project and institution context */}
      <section id="campaign-about" className="scroll-mt-28 py-12 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Team */}
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900 mb-4">
                About the Campaign Creator
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {campaignInfo.studentInfo.name} is a Mobile Journalism student at the
                University of Namibia, Windhoek Campus (Student No: {campaignInfo.studentInfo.studentNumber}).
                This campaign portfolio represents an integrated approach to bank communication —
                combining research-driven strategy with professional visual design, mobile-first
                multimedia production, and digital publishing. The work draws on mobile journalism
                principles from Burum and Quinn (2016) and Adornato (2025), applying them to a
                real-world Namibian financial institution.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <p className="text-xs uppercase tracking-wider text-primary-600 font-semibold mb-1">
                    Campus
                  </p>
                  <p className="text-sm font-bold text-primary-800">{campaignInfo.studentInfo.campus}</p>
                </div>
                <div className="p-4 bg-accent-50 rounded-lg">
                  <p className="text-xs uppercase tracking-wider text-accent-600 font-semibold mb-1">
                    Course
                  </p>
                  <p className="text-sm font-bold text-accent-800">{campaignInfo.studentInfo.courseCode}</p>
                </div>
              </div>
            </div>

            {/* Institution */}
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900 mb-4">
                About Bank Windhoek
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                This academic campaign uses Bank Windhoek as the subject of a mobile-first
                communication concept. It explores how clear, relatable storytelling can make the
                topic of everyday digital banking easier to understand while keeping customer safety
                and human support in view. The site is an educational campaign concept, not a banking
                channel, and it does not verify current products, service availability or eligibility.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <p className="text-xs uppercase tracking-wider text-primary-600 font-semibold mb-1">
                    Project Type
                  </p>
                  <p className="text-sm font-bold text-primary-800">Academic concept</p>
                </div>
                <div className="p-4 bg-accent-50 rounded-lg">
                  <p className="text-xs uppercase tracking-wider text-accent-600 font-semibold mb-1">
                    Creative Assets
                  </p>
                  <p className="text-sm font-bold text-accent-800">12 visual concepts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section id="campaign-identity" className="scroll-mt-28 py-12 bg-slate-50">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600">
              <Palette className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900">
                Brand Identity & Visual Direction
              </h2>
              <p className="text-sm text-slate-500">
                Proposed visual direction for this academic campaign concept
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Colors */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Brand Colours</h3>
              <div className="space-y-3">
                <ColorSwatch name="Primary Blue" hex="#0033A0" className="bg-primary-500" />
                <ColorSwatch name="Accent Gold" hex="#E8A020" className="bg-accent-500" />
                <ColorSwatch name="White" hex="#FFFFFF" className="bg-white border border-slate-200" />
                <ColorSwatch name="Dark Blue" hex="#001133" className="bg-primary-900" />
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Headlines</p>
                  <p className="font-serif font-bold text-2xl text-primary-700">Playfair Display</p>
                  <p className="text-xs text-slate-500 mt-1">Bold, confident serif for campaign headlines</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Body Text</p>
                  <p className="font-sans font-medium text-lg text-slate-700">Inter</p>
                  <p className="text-xs text-slate-500 mt-1">Clean, readable sans-serif for body copy</p>
                </div>
              </div>
            </div>

            {/* Tone & Personality */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Tone & Personality</h3>
              <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Objectives & Audience */}
      <section id="campaign-strategy" className="scroll-mt-28 py-12 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Objective */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600">
                  <Target className="w-5 h-5" />
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900">Campaign Aim</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{campaignInfo.objective}</p>
            </div>

            {/* Audience */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-100 text-accent-600">
                  <Users className="w-5 h-5" />
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900">Target Audience</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{campaignInfo.targetAudience}</p>
            </div>

            {/* Key message */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-success-100 text-success-600">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900">Key Message</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">"{campaignInfo.keyMessage}"</p>
              <div className="space-y-1.5">
                {campaignInfo.supportingMessages.map((msg, i) => (
                  <p key={i} className="text-xs text-slate-500 flex items-start gap-2">
                    <span className="text-accent-500 font-bold flex-shrink-0">&bull;</span>
                    <span>{msg}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline banner */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-10">
        <div className="container-max text-center">
          <p className="text-xs uppercase tracking-widest text-accent-300 font-semibold mb-2">
            Campaign tagline
          </p>
          <p className="font-serif font-bold text-3xl md:text-4xl text-white">
            {campaignInfo.tagline}
          </p>
          <p className="text-white/60 text-sm mt-2">
            Campaign line: "You have a busy life. Your banking should fit into it."
          </p>
        </div>
      </section>

      {/* Asset gallery */}
      <section id="campaign-assets" className="scroll-mt-28 py-12 bg-slate-50">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600">
              <ImageIcon className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900">Campaign Visual Assets</h2>
              <p className="text-sm text-slate-500">Twelve visual concepts with creative rationale and intended platform specifications</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {campaignAssets.map((asset) => (
              <CampaignAssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </section>

      {/* Asset Inventory Table */}
      <section id="campaign-inventory" className="scroll-mt-28 py-12 bg-white">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600">
              <List className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900">Asset Inventory</h2>
              <p className="text-sm text-slate-500">Specifications for all 12 campaign asset concepts</p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary-50 text-left">
                  <th className="px-3 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">#</th>
                  <th className="px-3 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Asset Name</th>
                  <th className="px-3 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Platform</th>
                  <th className="px-3 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Dimensions</th>
                  <th className="px-3 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Main Message</th>
                  <th className="px-3 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Format</th>
                  <th className="px-3 py-3 font-semibold text-primary-700 text-xs uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {campaignAssets.map((asset) => (
                  <tr key={asset.id} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 font-bold text-primary-600">{asset.id}</td>
                    <td className="px-3 py-3 font-medium text-slate-800">{asset.name}</td>
                    <td className="px-3 py-3 text-slate-600 text-xs">{asset.platform}</td>
                    <td className="px-3 py-3 text-slate-600 text-xs">{asset.dimensions}</td>
                    <td className="px-3 py-3 text-slate-600 text-xs max-w-xs">{asset.message}</td>
                    <td className="px-3 py-3 text-slate-600 text-xs">{asset.format}</td>
                    <td className="px-3 py-3">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-3">
            {campaignAssets.map((asset) => (
              <div key={asset.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <span className="font-bold text-primary-600 text-sm">#{asset.id}</span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                    {asset.status}
                  </span>
                </div>
                <h4 className="font-medium text-slate-800 text-sm mb-1">{asset.name}</h4>
                <p className="text-xs text-slate-500">{asset.platform} &middot; {asset.dimensions}</p>
                <p className="text-xs text-slate-600 mt-2">{asset.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and trust */}
      <section id="campaign-safety" className="scroll-mt-28 bg-primary-950 py-12 text-white">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-300">Safety &amp; trust</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Convenience should never come at the cost of security.</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Digital-banking safety is a core supporting theme in this campaign. These are general
              awareness messages, not a substitute for current guidance from the bank.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Keep credentials private', text: 'Never share your PIN, password or one-time password with another person.' },
              { title: 'Check unexpected messages', text: 'Pause before opening unexpected links or acting on urgent requests for banking details.' },
              { title: 'Verify the channel', text: 'Confirm that a banking contact or instruction comes from a trusted, verified source.' },
              { title: 'Ask when unsure', text: 'If a request feels unusual, stop and seek help through a verified support channel.' },
            ].map((tip) => (
              <article key={tip.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <Shield className="h-5 w-5 text-accent-300" />
                <h3 className="mt-4 text-base font-bold">{tip.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Multimedia section */}
      <section id="campaign-storyboard" className="scroll-mt-28 py-12 bg-slate-50">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-100 text-accent-600">
              <Video className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900">Multimedia Campaign Asset</h2>
              <p className="text-sm text-slate-500">45-second vertical campaign video for mobile platforms</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video mockup */}
            <div>
              <div className="relative aspect-[9/16] max-h-[520px] mx-auto bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute top-10 right-10 w-40 h-40 bg-accent-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary-400/15 rounded-full blur-3xl" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-white mb-3">Banking Where You Are</h3>
                  <p className="text-accent-300 text-sm mb-6 italic">{campaignInfo.tagline}</p>
                  <div className="space-y-2 text-white/80 text-xs max-w-xs">
                    {multimediaScript.script.slice(1, 4).map((s, i) => (
                      <p key={i} className="leading-relaxed">{s.subtitle}</p>
                    ))}
                    <p className="text-white/50">...</p>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-[10px] text-white/60 uppercase tracking-wider">Bank Windhoek</p>
                    <p className="text-[10px] text-white/55 mt-1">Banking Where You Are</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full w-0 bg-accent-400" />
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 mt-3 italic">
                45-second vertical video concept · storyboard and production plan
              </p>
            </div>

            {/* Script / production info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary-600" />
                <h3 className="font-serif font-bold text-xl text-slate-900">{multimediaScript.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Format</p>
                  <p className="text-sm text-slate-700">{multimediaScript.format}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Duration</p>
                  <p className="text-sm text-slate-700">{multimediaScript.duration}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100 col-span-2">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Platforms</p>
                  <p className="text-sm text-slate-700">{multimediaScript.platform}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">{multimediaScript.logline}</p>

              <div className="p-4 bg-primary-50 rounded-lg mb-6">
                <h4 className="text-sm font-bold text-primary-800 mb-2 flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  Role in the Campaign
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The proposed video is the campaign's primary multimedia concept, designed for
                  mobile-first viewing. The 45-second storyboard shows how everyday situations can
                  communicate the campaign message in a relatable way. The listed scenes are a
                  production plan, not footage of actual customers or confirmation of specific
                  product features. The vertical format is intended for short-form mobile platforms.
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
        </div>
      </section>

      {/* Script modal */}
      {showScript && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowScript(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="font-serif font-bold text-lg text-slate-900">Production Script &amp; Storyboard</h3>
              <button onClick={() => setShowScript(false)} className="p-2 rounded-md hover:bg-slate-100">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-4 mb-8">
                {multimediaScript.script.map((scene, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-3 p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-xs font-bold text-primary-700">{scene.time}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Visual</p>
                      <p className="text-xs text-slate-700 leading-relaxed">{scene.shot}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Narration / Subtitle</p>
                      <p className="text-xs text-slate-700 leading-relaxed italic">{scene.narration}</p>
                      {scene.subtitle && (
                        <p className="text-[10px] text-slate-500 mt-1">Subtitle: {scene.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-serif font-bold text-lg text-slate-900 mb-4">Production Notes</h4>
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

              <div className="mt-6 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <FileText className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-500" />
                <div>
                  <p className="text-sm font-bold text-slate-800 mb-1">About this storyboard</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    This is the proposed script and shot plan for a 45-second campaign video. It is
                    presented here as a planning deliverable; no completed video is embedded on this site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project contact CTA */}
      <section className="py-12 bg-primary-50">
        <div className="container-max text-center">
          <h2 className="font-serif font-bold text-2xl text-slate-900 mb-3">Questions about the campaign?</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
            Contact the student creator about the campaign proposal or this Mobile Journalism assignment.
          </p>
          <a href="#campaign-contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold text-sm hover:bg-primary-800 transition-colors">
            Project contact <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
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
