import { Building2, Mail } from 'lucide-react';
import type { SectionId } from './Header';
import { campaignInfo } from '@/data/campaign';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

const footerSections: { id: SectionId; label: string }[] = [
  { id: 'overview', label: 'Campaign Overview' },
  { id: 'strategy', label: 'Strategy & Audience' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'messages', label: 'Key Messages' },
  { id: 'assets', label: 'Creative Assets' },
  { id: 'inventory', label: 'Asset Inventory' },
  { id: 'storyboard', label: 'Video Storyboard' },
  { id: 'safety', label: 'Safety & Trust' },
  { id: 'about', label: 'About the Project' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500 text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block leading-tight">
                  Banking Where You Are
                </span>
                <span className="text-xs text-accent-300 italic">
                  Your bank. Your life. Your way.
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-200 leading-relaxed max-w-md">
              A student-created Mobile Journalism campaign exploring digital banking
              awareness, customer safety, convenience and human support. This website
              is an independent educational prototype and is{' '}
              <strong className="text-white">not an official Bank Windhoek website or service</strong>.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Campaign Sections
            </h2>
            <ul className="space-y-2 text-sm">
              {footerSections.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 invisible">
              More
            </h2>
            <ul className="space-y-2 text-sm">
              {footerSections.slice(5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Academic attribution */}
        <div className="border-t border-primary-800 mt-10 pt-6 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <p className="text-sm text-white font-medium">
                {campaignInfo.studentInfo.name}
              </p>
              <p className="text-xs text-primary-300 mt-1">
                {campaignInfo.studentInfo.course} ({campaignInfo.studentInfo.courseCode}) &middot;{' '}
                {campaignInfo.studentInfo.campus} &middot; {campaignInfo.studentInfo.assignment},{' '}
                {campaignInfo.studentInfo.year}
              </p>
            </div>
            <a
              href={`mailto:${campaignInfo.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-primary-200 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              {campaignInfo.contact.email}
            </a>
          </div>
          <p className="text-xs text-primary-400 leading-relaxed">
            This is an independent academic prototype created for coursework at the
            University of Namibia. It is not affiliated with, endorsed by, or connected
            to Bank Windhoek Limited. All campaign concepts, visuals and scripts are
            student-produced educational content.
          </p>
        </div>
      </div>
    </footer>
  );
}
