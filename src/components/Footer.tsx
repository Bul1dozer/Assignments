import { ArrowUpRight, BookOpen, Mail, ShieldCheck } from 'lucide-react';
import { campaignInfo } from '@/data/campaign';

const sectionLinks = [
  { id: 'campaign-strategy', label: 'Campaign strategy' },
  { id: 'campaign-assets', label: 'Creative assets' },
  { id: 'campaign-storyboard', label: 'Video storyboard' },
  { id: 'campaign-safety', label: 'Safety & trust' },
];

export default function Footer() {
  const jumpToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-max grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:py-14">
        <div>
          <button type="button" onClick={() => jumpToSection('campaign-overview')} className="flex items-center gap-3 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-white"><BookOpen className="h-5 w-5" /></span>
            <span>
              <span className="block text-lg font-extrabold">Banking Where You Are</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/55">Academic campaign project</span>
            </span>
          </button>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
            A Mobile Journalism campaign concept about making digital banking easier to understand, safer to use and more relevant to everyday life.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-white/55">
            <ShieldCheck className="h-4 w-4 text-accent-300" />
            Student-created educational prototype
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Explore the campaign</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <button type="button" onClick={() => jumpToSection(link.id)} className="transition hover:text-white">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Project details</h2>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>{campaignInfo.studentInfo.name}</p>
            <p>{campaignInfo.studentInfo.course} ({campaignInfo.studentInfo.courseCode})</p>
            <p>{campaignInfo.studentInfo.assignment} · {campaignInfo.studentInfo.year}</p>
            <a href={'mailto:' + campaignInfo.studentInfo.email} className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4" />
              Contact the student
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col gap-3 py-5 text-[11px] leading-5 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} · Mobile Journalism (H2612CJ) academic project.</p>
          <p className="max-w-3xl">
            This is an independent student-created campaign concept, not an official Bank Windhoek website or service. It does not collect banking credentials or perform transactions.
          </p>
        </div>
      </div>
    </footer>
  );
}
