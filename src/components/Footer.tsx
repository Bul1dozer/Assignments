import { Building2, Mail, Phone, Globe, Facebook, Instagram, Twitter } from 'lucide-react';
import type { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-100 mt-20">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500 text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-lg text-white">The Namibian Times</span>
            </div>
            <p className="text-sm text-primary-200 leading-relaxed">
              A mobile-first digital news publication covering Namibia and the world,
              committed to accurate, verified, and accessible journalism.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Sections</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home' as PageId, label: 'Home' },
                { id: 'national' as PageId, label: 'National News' },
                { id: 'international' as PageId, label: 'International News' },
                { id: 'sports' as PageId, label: 'Sports' },
                { id: 'entertainment' as PageId, label: 'Entertainment' },
              ].map((link) => (
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

          {/* Campaign links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Campaign</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('campaign')}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Banking Where You Are Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com/bankwindhoek"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/bankwindhoek"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/bankwindhoek"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>200965085@students.unam.na</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>0816270080</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>www.bankwindhoek.com.na</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-300">
            &copy; {year} The Namibian Times. An academic project by Willemina T. Alfons
            (200965085) for Mobile Journalism (H2612CJ), {year}.
          </p>
          <p className="text-xs text-primary-300">
            Photography via Pexels. Articles are educational content.
          </p>
        </div>
      </div>
    </footer>
  );
}
