import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  ShieldCheck,
  Twitter,
} from 'lucide-react';
import type { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const officialHome = 'https://www.bankwindhoek.com.na/Pages/default.aspx';

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-max grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:py-16">
        <div>
          <button type="button" onClick={() => onNavigate('home')} className="flex items-center gap-3 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 text-xl font-bold text-white">W</span>
            <span>
              <span className="block text-lg font-bold">Bank Windhoek</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/55">Academic project prototype</span>
            </span>
          </button>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            A Mobile Journalism website concept exploring how bank communication can make digital services easier to understand, safer to use and more relevant to everyday life.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><button type="button" onClick={() => onNavigate('personal')} className="transition hover:text-white">Personal banking</button></li>
            <li><button type="button" onClick={() => onNavigate('business')} className="transition hover:text-white">Business banking</button></li>
            <li><button type="button" onClick={() => onNavigate('corporate')} className="transition hover:text-white">Corporate & institutional</button></li>
            <li><button type="button" onClick={() => onNavigate('digital')} className="transition hover:text-white">Digital banking</button></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Campaign</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><button type="button" onClick={() => onNavigate('campaign')} className="transition hover:text-white">Banking Where You Are</button></li>
            <li><button type="button" onClick={() => onNavigate('contact')} className="transition hover:text-white">Contact & information</button></li>
            <li><a href={officialHome} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white">Official website <ArrowUpRight className="h-3.5 w-3.5" /></a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Official sources</h2>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <a href={officialHome} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 transition hover:text-white"><Landmark className="mt-0.5 h-4 w-4 flex-shrink-0" /><span>Bank Windhoek website</span></a>
            <a href="https://www.bankwindhoek.com.na/Pages/News/bank-windhoek-becomes-first-bank-in-namibia-to-launch-whatsapp-banking.aspx" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 transition hover:text-white"><ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0" /><span>WhatsApp Banking announcement</span></a>
            <a href="mailto:200965085@students.unam.na" className="flex items-start gap-2 transition hover:text-white"><Mail className="mt-0.5 h-4 w-4 flex-shrink-0" /><span>Academic project contact</span></a>
            <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /><span>Windhoek, Namibia</span></span>
          </div>
          <div className="mt-5 flex gap-3">
            <a href="https://facebook.com/bankwindhoek" target="_blank" rel="noopener noreferrer" aria-label="Bank Windhoek on Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:bg-white/10 hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href="https://instagram.com/bankwindhoek" target="_blank" rel="noopener noreferrer" aria-label="Bank Windhoek on Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:bg-white/10 hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="https://x.com/bankwindhoek" target="_blank" rel="noopener noreferrer" aria-label="Bank Windhoek on X" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:bg-white/10 hover:text-white"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col gap-3 py-5 text-[11px] leading-5 text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} · Mobile Journalism (H2612CJ) academic project.</p>
          <p className="max-w-3xl">This is an independent student-created prototype, not an official Bank Windhoek website. No banking transactions or credential collection are provided.</p>
        </div>
      </div>
    </footer>
  );
}
