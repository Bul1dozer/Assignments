import { useState, useEffect } from 'react';
import { X, ZoomIn, CheckCircle } from 'lucide-react';
import type { CampaignAsset } from '@/data/campaign';

interface CampaignAssetCardProps {
  asset: CampaignAsset;
}

export default function CampaignAssetCard({ asset }: CampaignAssetCardProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!showModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [showModal]);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        aria-label={`View details for asset ${asset.id}: ${asset.name}`}
        className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-left w-full"
      >
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

        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif font-semibold text-sm text-slate-900 leading-snug">
              {asset.id}. {asset.name}
            </h3>
            {asset.status === 'Complete' && (
              <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
            )}
          </div>
          <p className="text-xs text-slate-500 mb-2">{asset.dimensions}</p>
          <p className="text-sm text-slate-600 line-clamp-2">{asset.message}</p>
        </div>
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Asset ${asset.id}: ${asset.name}`}
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
                aria-label="Close asset details"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="rounded-xl overflow-hidden mb-6 border border-slate-100 bg-slate-100">
                <CampaignVisual asset={asset} large />
              </div>

              <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-700 italic leading-relaxed">{asset.caption}</p>
              </div>

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
                <SpecItem label="Design status" value={asset.status} statusBadge />
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
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-success-100 text-success-700">
          <CheckCircle className="w-3 h-3" />
          {value}
        </span>
      ) : (
        <p className="text-sm text-slate-700">{value}</p>
      )}
    </div>
  );
}

function CampaignVisual({ asset, large }: { asset: CampaignAsset; large?: boolean }) {
  const column = (asset.id - 1) % 4;
  const row = Math.floor((asset.id - 1) / 4);
  const positions = ['0%', '100%', '200%', '300%'];

  return (
    <div
      className={`relative w-full ${large ? 'aspect-[4/5] max-h-[620px] mx-auto' : 'aspect-[4/5]'} overflow-hidden bg-slate-100`}
      aria-label={`Supplied campaign artwork for asset ${asset.id}`}
    >
      <img
        src="/images/campaign/Bank_Windhoek_Campaign_Asset_Portfolio_(1).png"
        alt=""
        className="absolute max-w-none w-[400%] h-[300%] object-fill"
        style={{ left: `-${positions[column]}`, top: `-${row * 100}%` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent pointer-events-none" />
      <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-primary-700 shadow-sm">
        Supplied campaign artwork
      </span>
    </div>
  );
}
