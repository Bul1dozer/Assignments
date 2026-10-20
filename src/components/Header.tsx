import { useState } from 'react';
import { ArrowDown, BookOpen, Menu, ShieldCheck, X } from 'lucide-react';

const navigation = [
  { id: 'campaign-overview', label: 'Overview' },
  { id: 'campaign-strategy', label: 'Strategy & Audience' },
  { id: 'campaign-assets', label: 'Creative Assets' },
  { id: 'campaign-storyboard', label: 'Video Storyboard' },
  { id: 'campaign-safety', label: 'Safety & Trust' },
  { id: 'campaign-about', label: 'About the Project' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const jumpToSection = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-primary-900 text-white">
        <div className="container-max flex min-h-8 items-center justify-between gap-3 py-1.5 text-[10px] sm:text-xs">
          <span className="inline-flex items-center gap-2 text-white/85">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-400" />
            Mobile Journalism · Academic campaign concept
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-white/75">
            <BookOpen className="h-3.5 w-3.5 text-accent-300" />
            Banking Where You Are
          </span>
        </div>
      </div>

      <div className="container-max">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => jumpToSection('campaign-overview')}
            className="group flex min-w-0 items-center gap-3 text-left"
            aria-label="Go to campaign overview"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-700 text-white shadow-sm transition group-hover:bg-primary-800">
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-sans text-base font-extrabold leading-tight tracking-tight text-primary-900 sm:text-lg">
                Banking Where You Are
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
                Your bank. Your life. Your way.
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-0.5 2xl:flex" aria-label="Campaign sections">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jumpToSection(item.id)}
                className="rounded-lg px-2.5 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-primary-50 hover:text-primary-800"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2.5 text-primary-800 transition hover:bg-slate-100 2xl:hidden"
            aria-label={mobileOpen ? 'Close campaign navigation' : 'Open campaign navigation'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-100 bg-white pb-3 pt-2 2xl:hidden" aria-label="Mobile campaign sections">
          <div className="container-max space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jumpToSection(item.id)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-primary-50 hover:text-primary-800"
              >
                {item.label}
                <ArrowDown className="h-4 w-4 text-accent-600" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => jumpToSection('campaign-contact')}
              className="mt-2 w-full rounded-lg bg-accent-500 px-4 py-3 text-left text-sm font-bold text-white transition hover:bg-accent-600"
            >
              Contact the Campaign Creator
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
