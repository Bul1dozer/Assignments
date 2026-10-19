import { useState } from 'react';
import { ArrowUpRight, Menu, ShieldCheck, X } from 'lucide-react';

export type PageId =
  | 'home'
  | 'personal'
  | 'business'
  | 'corporate'
  | 'digital'
  | 'campaign'
  | 'contact'
  | 'article';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const navItems: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'personal', label: 'Personal' },
  { id: 'business', label: 'Business' },
  { id: 'corporate', label: 'Corporate & Institutional' },
  { id: 'digital', label: 'Digital Banking' },
  { id: 'campaign', label: 'Banking Where You Are' },
  { id: 'contact', label: 'Contact' },
];

const officialHome = 'https://www.bankwindhoek.com.na/Pages/default.aspx';

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <div className="bg-primary-900 text-white">
        <div className="container-max flex min-h-9 items-center justify-between gap-3 py-2 text-[10px] sm:text-xs">
          <span className="flex items-center gap-2 text-white/85">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-400" />
            Student-created academic prototype · Not an official Bank Windhoek service
          </span>
          <a
            href={officialHome}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 font-semibold text-white transition hover:text-accent-300 sm:inline-flex"
          >
            Visit the official Bank Windhoek website
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="container-max">
          <div className="flex min-h-[76px] items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="group flex min-w-0 items-center gap-3 text-left"
              aria-label="Bank Windhoek academic project home"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-xl font-bold text-white shadow-sm transition group-hover:scale-105">
                W
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-lg font-bold leading-tight tracking-tight text-primary-800 sm:text-xl">
                  Bank Windhoek
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
                  Your bank. Your life. Your way.
                </span>
              </span>
            </button>

            <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  className={
                    'rounded-lg px-3 py-2.5 text-[13px] font-semibold transition ' +
                    (currentPage === item.id
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary-700')
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden flex-shrink-0 items-center gap-3 xl:flex">
              <a
                href={officialHome}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-accent-600"
              >
                Internet Banking
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2.5 text-primary-800 transition hover:bg-slate-100 xl:hidden"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-slate-100 bg-white pb-4 pt-2 xl:hidden" aria-label="Mobile navigation">
            <div className="container-max space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  className={
                    'block w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition ' +
                    (currentPage === item.id
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-slate-700 hover:bg-slate-50')
                  }
                >
                  {item.label}
                </button>
              ))}
              <a
                href={officialHome}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-between rounded-lg bg-accent-500 px-4 py-3 text-sm font-bold text-white"
              >
                Internet Banking — official website
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
