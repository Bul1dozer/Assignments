import { useState } from 'react';
import {
  X,
  ZoomIn,
  CheckCircle,
  Smartphone,
  MessageCircle,
  CreditCard,
  Shield,
  Calendar,
  Building2,
  Zap,
  Target,
  Share2,
  Megaphone,
} from 'lucide-react';
import type { CampaignAsset } from '@/data/campaign';

interface CampaignAssetCardProps {
  asset: CampaignAsset;
}

export default function CampaignAssetCard({ asset }: CampaignAssetCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
      >
        {/* Visual mockup */}
        <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
          <CampaignVisual asset={asset} />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex items-center gap-2 text-white text-sm font-medium bg-primary-500/80 px-4 py-2 rounded-lg">
              <ZoomIn className="w-5 h-5" />
              View details
            </div>
          </div>
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-primary-700 shadow-sm">
            {asset.format}
          </span>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif font-semibold text-sm text-slate-900 leading-snug">
              {asset.id}. {asset.name}
            </h3>
            <span className="flex-shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
              Concept
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-2">{asset.dimensions}</p>
          <p className="text-sm text-slate-600 line-clamp-2">{asset.message}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Asset {asset.id}: {asset.name}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-md hover:bg-slate-100"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Visual */}
              <div className="rounded-xl overflow-hidden mb-6 border border-slate-100 bg-slate-100">
                <CampaignVisual asset={asset} large />
              </div>

              {/* Caption */}
              <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  {asset.caption}
                </p>
              </div>

              {/* Specs table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SpecItem label="Asset Number" value={`#${String(asset.id).padStart(2, '0')}`} />
                <SpecItem label="Asset Name" value={asset.name} />
                <SpecItem label="Campaign Objective" value={asset.objective} />
                <SpecItem label="Target Audience" value={asset.audience} />
                <SpecItem label="Intended Platform" value={asset.platform} />
                <SpecItem label="Format" value={asset.format} />
                <SpecItem label="Dimensions" value={asset.dimensions} />
                <SpecItem label="Main Message" value={asset.message} />
                <SpecItem label="Call to Action" value={asset.callToAction} />
                <SpecItem label="Suggested filename" value={asset.filename} />
                <SpecItem label="Presentation status" value="Concept preview" statusBadge />
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SpecItem({
  label,
  value,
  statusBadge,
}: {
  label: string;
  value: string;
  statusBadge?: boolean;
}) {
  return (
    <div className="p-3 bg-slate-50 rounded-lg">
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
        {label}
      </p>
      {statusBadge ? (
        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
          {value}
        </span>
      ) : (
        <p className="text-sm text-slate-700">{value}</p>
      )}
    </div>
  );
}

/* ==================== Campaign Visuals ==================== */

function CampaignVisual({
  asset,
  large,
}: {
  asset: CampaignAsset;
  large?: boolean;
}) {
  switch (asset.id) {
    case 1: return <Visual01Launch asset={asset} large={large} />;
    case 2: return <Visual02Objectives asset={asset} large={large} />;
    case 3: return <Visual03Instagram asset={asset} large={large} />;
    case 4: return <Visual04Carousel asset={asset} large={large} />;
    case 5: return <Visual05FacebookPromo asset={asset} large={large} />;
    case 6: return <Visual06WhatsApp asset={asset} large={large} />;
    case 7: return <Visual07Banner asset={asset} large={large} />;
    case 8: return <Visual08PrintAd asset={asset} large={large} />;
    case 9: return <Visual09Safety asset={asset} large={large} />;
    case 10: return <Visual10Event asset={asset} large={large} />;
    case 11: return <Visual11PullUp asset={asset} large={large} />;
    case 12: return <Visual12CTA asset={asset} large={large} />;
    default: return <Visual01Launch asset={asset} large={large} />;
  }
}

type VisualProps = { asset: CampaignAsset; large?: boolean };

/* --- Asset 1: Main Campaign Launch Poster (vertical) --- */
function Visual01Launch({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-[9/16] max-h-[600px] mx-auto' : 'aspect-[9/16]'} bg-gradient-to-b from-primary-500 via-primary-600 to-primary-800 flex flex-col items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-accent-400/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 text-center px-6">
        <div className={`mx-auto ${large ? 'w-16 h-16' : 'w-10 h-10'} rounded-xl bg-white/15 flex items-center justify-center mb-6 backdrop-blur-sm`}>
          <Building2 className={large ? 'w-8 h-8' : 'w-5 h-5'} text-white />
        </div>
        <p className={`text-accent-300 font-sans font-semibold uppercase tracking-widest ${large ? 'text-xs' : 'text-[7px]'} mb-3`}>
          Bank Windhoek Presents
        </p>
        <h1 className={`font-serif font-black text-white leading-tight ${large ? 'text-4xl' : 'text-lg'}`}>
          Banking
        </h1>
        <h1 className={`font-serif font-black text-accent-400 leading-tight ${large ? 'text-4xl' : 'text-lg'} mb-4`}>
          Where You Are
        </h1>
        <div className={`w-16 h-0.5 bg-white/30 mx-auto mb-4`} />
        <p className={`font-serif italic text-white/90 ${large ? 'text-lg' : 'text-[10px]'}`}>
          Your bank. Your life. Your way.
        </p>
      </div>
      <div className={`absolute bottom-4 left-0 right-0 text-center z-10 ${large ? 'text-xs' : 'text-[7px]'} text-white/50`}>
        Bank Windhoek &middot; www.bankwindhoek.com.na
      </div>
    </div>
  );
}

/* --- Asset 2: Objectives Infographic (portrait) --- */
function Visual02Objectives({ large }: VisualProps) {
  const icons = [Zap, Smartphone, MessageCircle, Share2, Shield, Target, Megaphone, Building2, CreditCard, Calendar];
  return (
    <div className={`relative w-full ${large ? 'aspect-[4/5] max-h-[600px] mx-auto' : 'aspect-[4/5]'} bg-white flex flex-col overflow-hidden`}>
      <div className="bg-primary-500 py-4 px-4 text-center">
        <p className={`font-serif font-bold text-white ${large ? 'text-xl' : 'text-[11px]'}`}>
          Campaign Objectives
        </p>
        <p className={`text-accent-300 ${large ? 'text-xs' : 'text-[7px]'}`}>Banking Where You Are</p>
      </div>
      <div className="flex-1 p-3 grid grid-cols-2 gap-2 overflow-hidden">
        {['Awareness', 'Explore', 'Explain', 'Engage', 'Safety', 'Trust', 'Feedback', 'Human', 'Innovate', 'Inform'].map((label, i) => {
          const Icon = icons[i];
          return (
            <div key={i} className={`flex items-center gap-2 ${large ? 'p-2.5' : 'p-1.5'} rounded-lg bg-primary-50 border border-primary-100`}>
              <div className={`flex-shrink-0 ${large ? 'w-8 h-8' : 'w-5 h-5'} rounded-lg bg-primary-500 flex items-center justify-center`}>
                <Icon className={large ? 'w-4 h-4' : 'w-2.5 h-2.5'} text-white />
              </div>
              <div>
                <p className={`font-bold text-primary-700 ${large ? 'text-[10px]' : 'text-[6px]'}`}>{i + 1}</p>
                <p className={`text-slate-700 ${large ? 'text-[10px]' : 'text-[6px]'} font-medium`}>{label}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-slate-50 py-2 px-4 text-center">
        <p className={`font-serif italic text-primary-700 ${large ? 'text-sm' : 'text-[8px]'}`}>
          "Banking options that fit your everyday life."
        </p>
      </div>
    </div>
  );
}

/* --- Asset 3: Instagram Square --- */
function Visual03Instagram({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-square max-h-[500px] mx-auto' : 'aspect-square'} bg-gradient-to-br from-primary-600 to-primary-800 flex flex-col items-center justify-center overflow-hidden`}>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-2xl" />
      <div className="relative z-10 text-center px-6">
        <div className={`mx-auto ${large ? 'w-14 h-14' : 'w-8 h-8'} rounded-full bg-white/15 flex items-center justify-center mb-5`}>
          <Smartphone className={large ? 'w-7 h-7' : 'w-4 h-4'} text-white />
        </div>
        <p className={`font-serif font-black text-white leading-tight ${large ? 'text-2xl' : 'text-[12px]'}`}>
          You have a busy life.
        </p>
        <p className={`font-serif font-black text-accent-400 leading-tight ${large ? 'text-2xl' : 'text-[12px]'} mb-4`}>
          Your banking should fit into it.
        </p>
        <div className={`inline-block px-3 py-1 rounded-full bg-white/20 ${large ? 'text-xs' : 'text-[7px]'} text-white font-medium`}>
          #BankingWhereYouAre
        </div>
      </div>
      <div className={`absolute bottom-3 left-3 z-10 ${large ? 'text-sm' : 'text-[7px]'} font-bold text-white`}>
        Bank Windhoek
      </div>
    </div>
  );
}

/* --- Asset 4: Facebook Carousel (shows 5 slides as a stack) --- */
function Visual04Carousel({ large }: VisualProps) {
  const slides = [
    { icon: MessageCircle, title: 'WhatsApp Banking', desc: 'Bank on the app you already use' },
    { icon: Smartphone, title: 'Mobile App', desc: 'Banking in your pocket' },
    { icon: CreditCard, title: 'Online Banking', desc: 'Full banking on any device' },
    { icon: Building2, title: 'Digital Hubs', desc: 'Self-service near you' },
    { icon: Zap, title: 'ATMs', desc: 'Cash whenever you need it' },
  ];
  return (
    <div className={`relative w-full ${large ? 'aspect-square max-h-[500px] mx-auto' : 'aspect-square'} bg-slate-100 flex items-center justify-center overflow-hidden p-3`}>
      <div className="relative w-full h-full">
        {slides.map((slide, i) => {
          const Icon = slide.icon;
          return (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex flex-col items-center justify-center p-4 text-center"
              style={{
                transform: `translate(${i * 8}px, ${i * 8}px) scale(${1 - i * 0.04})`,
                opacity: i === 0 ? 1 : 0.3 + i * 0.1,
                zIndex: 10 - i,
              }}
            >
              <Icon className={large ? 'w-10 h-10' : 'w-6 h-6'} text-white mb-3 />
              <p className={`font-serif font-bold text-white ${large ? 'text-lg' : 'text-[10px]'}`}>
                {slide.title}
              </p>
              <p className={`text-white/80 ${large ? 'text-xs' : 'text-[7px]'}`}>{slide.desc}</p>
            </div>
          );
        })}
      </div>
      <div className={`absolute bottom-1 right-2 ${large ? 'text-xs' : 'text-[6px]'} text-slate-400`}>
        5 slides
      </div>
    </div>
  );
}

/* --- Asset 5: Facebook Promotional (landscape) --- */
function Visual05FacebookPromo({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-[1200/628] max-h-[400px] mx-auto' : 'aspect-[1200/628]'} bg-gradient-to-r from-primary-600 to-primary-800 flex items-center overflow-hidden`}>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
        <div className="w-full h-full bg-accent-400 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between w-full px-6">
        <div className="flex-1">
          <div className={`flex items-center gap-2 mb-3`}>
            <div className={`rounded-lg bg-white/15 flex items-center justify-center ${large ? 'w-10 h-10' : 'w-6 h-6'}`}>
              <Building2 className={large ? 'w-5 h-5' : 'w-3 h-3'} text-white />
            </div>
            <span className={`text-white/70 font-medium ${large ? 'text-sm' : 'text-[7px]'}`}>Bank Windhoek</span>
          </div>
          <h2 className={`font-serif font-bold text-white leading-tight ${large ? 'text-2xl' : 'text-[11px]'}`}>
            Banking that fits your
          </h2>
          <h2 className={`font-serif font-bold text-accent-400 leading-tight ${large ? 'text-2xl' : 'text-[11px]'}`}>
            everyday life.
          </h2>
          <p className={`text-white/60 mt-2 ${large ? 'text-sm' : 'text-[7px]'}`}>
            Follow for tips and updates
          </p>
        </div>
        <div className={`flex flex-col gap-2 ${large ? 'w-32' : 'w-16'}`}>
          {['WhatsApp', 'Mobile App', 'Online'].map((label) => (
            <div key={label} className={`bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center ${large ? 'text-xs' : 'text-[6px]'} text-white font-medium`}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- Asset 6: WhatsApp Banking Poster (vertical) --- */
function Visual06WhatsApp({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-[9/16] max-h-[600px] mx-auto' : 'aspect-[9/16]'} bg-gradient-to-b from-primary-700 to-primary-900 flex flex-col overflow-hidden`}>
      <div className={`bg-primary-500 py-3 px-4 flex items-center gap-2`}>
        <MessageCircle className={large ? 'w-5 h-5' : 'w-3 h-3'} text-white />
        <span className={`font-bold text-white ${large ? 'text-sm' : 'text-[8px]'}`}>WhatsApp Banking</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className={`bg-white rounded-2xl p-4 w-full max-w-[240px] mb-4`}>
          <p className={`text-slate-500 ${large ? 'text-[10px]' : 'text-[6px]'} mb-2`}>Bank Windhoek</p>
          <div className="bg-primary-50 rounded-lg p-2 mb-2">
            <p className={`text-slate-700 ${large ? 'text-[10px]' : 'text-[6px]'}`}>Your balance: N$ 2,450.00</p>
          </div>
          <div className="bg-success-50 rounded-lg p-2">
            <p className={`text-success-700 ${large ? 'text-[10px]' : 'text-[6px]'}`}>Payment sent to John D.</p>
          </div>
        </div>
        <p className={`font-serif font-bold text-white text-center ${large ? 'text-xl' : 'text-[10px]'} mb-2`}>
          Bank on WhatsApp.
        </p>
        <p className={`text-accent-300 text-center ${large ? 'text-sm' : 'text-[8px]'}`}>
          Simple. Secure. Everywhere.
        </p>
      </div>
      <div className={`bg-primary-600 py-2 px-4 text-center ${large ? 'text-xs' : 'text-[6px]'} text-white/70`}>
        Save this number. Start banking today.
      </div>
    </div>
  );
}

/* --- Asset 7: Digital Banner (leaderboard - very wide) --- */
function Visual07Banner({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-[728/90] max-h-[200px] mx-auto' : 'aspect-[728/90]'} bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-between px-4 overflow-hidden`}>
      <div className="flex items-center gap-3">
        <Building2 className={large ? 'w-6 h-6' : 'w-4 h-4'} text-white />
        <div>
          <p className={`font-serif font-bold text-white ${large ? 'text-base' : 'text-[8px]'}`}>
            Banking Where You Are
          </p>
          <p className={`text-accent-300 ${large ? 'text-xs' : 'text-[6px]'}`}>
            Your bank. Your life. Your way.
          </p>
        </div>
      </div>
      <div className={`bg-white/20 rounded-lg px-4 py-1.5 ${large ? 'text-sm' : 'text-[7px]'} text-white font-semibold`}>
        Click to explore
      </div>
    </div>
  );
}

/* --- Asset 8: Print Advertisement (A4 portrait) --- */
function Visual08PrintAd({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-[210/297] max-h-[600px] mx-auto' : 'aspect-[210/297]'} bg-white flex flex-col overflow-hidden border border-slate-200`}>
      <div className="bg-primary-500 px-4 py-6 flex flex-col items-center text-center">
        <Building2 className={`${large ? 'w-10 h-10' : 'w-5 h-5'} text-white mb-3`} />
        <p className={`text-accent-300 font-semibold uppercase tracking-widest ${large ? 'text-xs' : 'text-[6px]'} mb-2`}>Bank Windhoek</p>
        <h2 className={`font-serif font-black text-white leading-tight ${large ? 'text-3xl' : 'text-sm'}`}>
          The future of banking
        </h2>
        <h2 className={`font-serif font-black text-accent-400 leading-tight ${large ? 'text-3xl' : 'text-sm'}`}>
          is where you are.
        </h2>
      </div>
      <div className="flex-1 px-5 py-5 flex flex-col justify-center">
        <p className={`text-slate-700 leading-relaxed ${large ? 'text-sm' : 'text-[7px]'} mb-4`}>
          From WhatsApp Banking to Digital Banking Hubs, Bank Windhoek brings banking to where you already are. Bank when it suits you, on the platforms you already use, with human support whenever you need it.
        </p>
        <div className="space-y-2">
          {['Check balances on WhatsApp', 'Pay beneficiaries in seconds', 'Get help at Digital Banking Hubs', 'Bank securely, 24/7'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`rounded-full bg-primary-100 flex items-center justify-center ${large ? 'w-5 h-5' : 'w-3 h-3'}`}>
                <CheckCircle className={`${large ? 'w-3 h-3' : 'w-2 h-2'} text-primary-600`} />
              </div>
              <span className={`text-slate-600 ${large ? 'text-sm' : 'text-[7px]'}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-50 px-5 py-3 text-center">
        <p className={`font-bold text-primary-700 ${large ? 'text-sm' : 'text-[7px]'}`}>
          Visit www.bankwindhoek.com.na to learn more
        </p>
      </div>
    </div>
  );
}

/* --- Asset 9: Safety Infographic (vertical) --- */
function Visual09Safety({ large }: VisualProps) {
  const tips = [
    { icon: Shield, title: 'Never share your PIN', desc: 'Bank Windhoek will never ask for it' },
    { icon: Smartphone, title: 'Use official channels', desc: 'Only the verified Bank Windhoek WhatsApp number' },
    { icon: Megaphone, title: 'Beware of scams', desc: 'Do not click suspicious links' },
    { icon: CheckCircle, title: 'Verify transactions', desc: 'Check alerts and report unknown activity' },
  ];
  return (
    <div className={`relative w-full ${large ? 'aspect-[9/16] max-h-[600px] mx-auto' : 'aspect-[9/16]'} bg-gradient-to-b from-primary-600 to-primary-800 flex flex-col overflow-hidden`}>
      <div className="px-4 pt-6 text-center">
        <div className={`mx-auto ${large ? 'w-14 h-14' : 'w-8 h-8'} rounded-full bg-white/15 flex items-center justify-center mb-3`}>
          <Shield className={large ? 'w-7 h-7' : 'w-4 h-4'} text-white />
        </div>
        <h3 className={`font-serif font-bold text-white ${large ? 'text-xl' : 'text-[10px]'}`}>
          Bank Safely
        </h3>
        <p className={`text-accent-300 ${large ? 'text-sm' : 'text-[7px]'}`}>Protect your information</p>
      </div>
      <div className="flex-1 px-3 py-4 space-y-2">
        {tips.map((tip, i) => {
          const Icon = tip.icon;
          return (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-start gap-2">
              <Icon className={`${large ? 'w-5 h-5' : 'w-3 h-3'} text-accent-400 flex-shrink-0 mt-0.5`} />
              <div>
                <p className={`font-bold text-white ${large ? 'text-xs' : 'text-[7px]'}`}>{tip.title}</p>
                <p className={`text-white/60 ${large ? 'text-[10px]' : 'text-[6px]'}`}>{tip.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`bg-white/5 py-2 text-center ${large ? 'text-xs' : 'text-[6px]'} text-white/50`}>
        Bank Windhoek &middot; Your security is our priority
      </div>
    </div>
  );
}

/* --- Asset 10: Event Announcement (portrait) --- */
function Visual10Event({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-[4/5] max-h-[600px] mx-auto' : 'aspect-[4/5]'} bg-gradient-to-br from-accent-500 to-accent-600 flex flex-col items-center justify-center overflow-hidden`}>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl" />
      <div className="relative z-10 text-center px-5">
        <div className={`mx-auto ${large ? 'w-14 h-14' : 'w-8 h-8'} rounded-xl bg-white/20 flex items-center justify-center mb-4`}>
          <Calendar className={large ? 'w-7 h-7' : 'w-4 h-4'} text-white />
        </div>
        <p className={`text-white/80 font-medium uppercase tracking-wider ${large ? 'text-sm' : 'text-[7px]'} mb-2`}>
          You’re Invited
        </p>
        <h3 className={`font-serif font-black text-white leading-tight ${large ? 'text-2xl' : 'text-[12px]'} mb-2`}>
          Banking Where You Are
        </h3>
        <h3 className={`font-serif font-black text-white leading-tight ${large ? 'text-2xl' : 'text-[12px]'} mb-4`}>
          Community Day
        </h3>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
          <p className={`font-bold text-white ${large ? 'text-lg' : 'text-[10px]'}`}>November 22, 2026</p>
          <p className={`text-white/70 ${large ? 'text-sm' : 'text-[7px]'}`}>All Bank Windhoek Branches &amp; Digital Hubs</p>
        </div>
        <p className={`text-white/60 mt-4 ${large ? 'text-sm' : 'text-[7px]'}`}>
          Visit your nearest branch or Digital Banking Hub
        </p>
      </div>
    </div>
  );
}

/* --- Asset 11: Pull-Up Banner (tall vertical) --- */
function Visual11PullUp({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-[850/2000] max-h-[650px] mx-auto' : 'aspect-[850/2000]'} bg-gradient-to-b from-primary-600 via-primary-700 to-primary-900 flex flex-col overflow-hidden`}>
      <div className="px-4 pt-6 text-center">
        <div className={`mx-auto ${large ? 'w-12 h-12' : 'w-7 h-7'} rounded-xl bg-white/15 flex items-center justify-center mb-3`}>
          <Building2 className={large ? 'w-6 h-6' : 'w-3.5 h-3.5'} text-white />
        </div>
        <p className={`text-accent-300 font-semibold ${large ? 'text-xs' : 'text-[6px]'} mb-2`}>Bank Windhoek</p>
        <h3 className={`font-serif font-black text-white ${large ? 'text-2xl' : 'text-[11px]'} leading-tight`}>
          Banking
        </h3>
        <h3 className={`font-serif font-black text-accent-400 ${large ? 'text-2xl' : 'text-[11px]'} leading-tight mb-4`}>
          Where You Are
        </h3>
      </div>
      <div className="flex-1 px-3 space-y-2 flex flex-col justify-center">
        {[
          { icon: MessageCircle, label: 'WhatsApp Banking' },
          { icon: Smartphone, label: 'Mobile Banking App' },
          { icon: CreditCard, label: 'Online Banking' },
          { icon: Building2, label: 'Digital Banking Hubs' },
          { icon: Zap, label: 'ATM Network' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white/10 rounded-lg p-2.5 flex items-center gap-2">
              <Icon className={`${large ? 'w-4 h-4' : 'w-2.5 h-2.5'} text-accent-400 flex-shrink-0`} />
              <span className={`text-white font-medium ${large ? 'text-xs' : 'text-[6px]'}`}>{item.label}</span>
            </div>
          );
        })}
      </div>
      <div className="px-4 pb-6 text-center">
        <p className={`font-serif italic text-white/80 ${large ? 'text-sm' : 'text-[7px]'}`}>
          Your bank. Your life. Your way.
        </p>
        <div className={`w-12 h-0.5 bg-accent-400 mx-auto my-2`} />
        <p className={`text-white/50 ${large ? 'text-xs' : 'text-[6px]'}`}>www.bankwindhoek.com.na</p>
      </div>
    </div>
  );
}

/* --- Asset 12: Call-to-Action (square) --- */
function Visual12CTA({ large }: VisualProps) {
  return (
    <div className={`relative w-full ${large ? 'aspect-square max-h-[500px] mx-auto' : 'aspect-square'} bg-gradient-to-br from-primary-700 to-primary-900 flex flex-col items-center justify-center overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-white/5 rounded-full blur-3xl" />
      <div className="relative z-10 text-center px-6">
        <div className={`mx-auto mb-5 ${large ? 'w-16 h-16' : 'w-10 h-10'} rounded-full border-4 border-accent-400/30 flex items-center justify-center`}>
          <div className={`${large ? 'w-10 h-10' : 'w-6 h-6'} rounded-full bg-accent-400 flex items-center justify-center`}>
            <Zap className={large ? 'w-5 h-5' : 'w-3 h-3'} text-white />
          </div>
        </div>
        <p className={`font-serif font-black text-white leading-tight ${large ? 'text-2xl' : 'text-[12px]'}`}>
          Your banking fits your life.
        </p>
        <p className={`font-serif font-black text-accent-400 leading-tight ${large ? 'text-2xl' : 'text-[12px]'} mb-5`}>
          Start today.
        </p>
        <div className={`inline-block px-4 py-2 rounded-full bg-white text-primary-700 font-bold ${large ? 'text-sm' : 'text-[8px]'}`}>
          Explore Digital Banking
        </div>
        <p className={`text-white/40 mt-3 ${large ? 'text-xs' : 'text-[6px]'}`}>
          #BankingWhereYouAre
        </p>
      </div>
    </div>
  );
}
