import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export type SectionId =
  | 'overview'
  | 'strategy'
  | 'objectives'
  | 'messages'
  | 'assets'
  | 'inventory'
  | 'storyboard'
  | 'safety'
  | 'about'
  | 'contact';

interface HeaderProps {
  onNavigate: (section: SectionId) => void;
  activeSection: SectionId;
}

const navGroups: { label: string; items: { id: SectionId; label: string }[] }[] = [
  {
    label: 'Campaign',
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'strategy', label: 'Strategy & Audience' },
      { id: 'objectives', label: 'Objectives' },
      { id: 'messages', label: 'Key Messages' },
    ],
  },
  {
    label: 'Deliverables',
    items: [
      { id: 'assets', label: 'Creative Assets' },
      { id: 'inventory', label: 'Asset Inventory' },
      { id: 'storyboard', label: 'Video Storyboard' },
      { id: 'safety', label: 'Safety & Trust' },
    ],
  },
  {
    label: 'Project',
    items: [
      { id: 'about', label: 'About the Project' },
      { id: 'contact', label: 'Contact' },
    ],
  },
];

const allNavItems = navGroups.flatMap((g) => g.items);

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (section: SectionId) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNav('overview')}
            className="flex items-center gap-2.5 group"
            aria-label="Go to campaign overview"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500 text-white transition-transform group-hover:scale-105">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-serif font-bold text-lg text-primary-700 leading-tight">
                Banking Where You Are
              </div>
              <div className="text-[10px] uppercase tracking-widest text-accent-600 font-medium">
                Your bank. Your life. Your way.
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Campaign sections">
            {allNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="lg:hidden bg-white border-t border-slate-100 animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto"
          aria-label="Campaign sections (mobile)"
        >
          <div className="container-max py-3">
            {navGroups.map((group) => (
              <div key={group.label} className="mb-3">
                <p className="px-4 py-1 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  {group.label}
                </p>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
