import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Fingerprint,
  Globe2,
  Info,
  Landmark,
  LockKeyhole,
  Smartphone,
  Wallet,
} from 'lucide-react';
import type { PageId } from '@/components/Header';

type BankingPageKind = 'personal' | 'business' | 'corporate' | 'digital';

interface BankingPageProps {
  page: BankingPageKind;
  onNavigate: (page: PageId) => void;
}

const officialLinks = {
  home: 'https://www.bankwindhoek.com.na/Pages/default.aspx',
  personal: 'https://www.bankwindhoek.com.na/Pages/Personal/default.aspx',
  products: 'https://www.bankwindhoek.com.na/Pages/ProductsPage.aspx',
  business: 'https://www.bankwindhoek.com.na/Pages/Business/Finance.aspx',
  digital: 'https://www.bankwindhoek.com.na/Pages/Personal-Digital-Services.aspx',
  whatsapp: 'https://www.bankwindhoek.com.na/Pages/News/bank-windhoek-becomes-first-bank-in-namibia-to-launch-whatsapp-banking.aspx',
  biometric: 'https://www.bankwindhoek.com.na/Pages/Newsroom/News/Articles/bank-windhoek-fortifies-customer-security-with-biometrics.aspx',
  whatsappFaq: 'https://www.bankwindhoek.com.na/Documents/WhatsApp%20Banking%20FAQs.pdf',
};

const content = {
  personal: {
    eyebrow: 'Banking for individuals and families',
    title: 'Your everyday banking, in one place.',
    description: 'Explore the personal banking area and use the official Bank Windhoek website to confirm available accounts, eligibility, features, fees and terms.',
    image: 'https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/Go%20beyong%20pic%201.jpg',
    icon: Wallet,
    services: [
      { title: 'Transact', description: 'Find information about transaction accounts and everyday banking options.', icon: Wallet },
      { title: 'Save & invest', description: 'Explore savings and investment options through the official product catalogue.', icon: Landmark },
      { title: 'Borrow', description: 'Review borrowing options and confirm eligibility and conditions with the Bank.', icon: Building2 },
    ],
    link: officialLinks.personal,
    linkText: 'Explore personal banking',
  },
  business: {
    eyebrow: 'Banking for businesses and entrepreneurs',
    title: 'Support for the work you do.',
    description: 'A business needs dependable ways to manage its finances. Explore the Bank’s business banking information and confirm services, requirements and rates directly with Bank Windhoek.',
    image: 'https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/WhatsApp%20Banking.jpg',
    icon: BriefcaseBusiness,
    services: [
      { title: 'Business finance', description: 'Read about financing options and the information businesses may need when enquiring.', icon: BriefcaseBusiness },
      { title: 'Business banking', description: 'Access the official website to explore banking options for different business needs.', icon: Landmark },
      { title: 'Digital access', description: 'Discover digital channels that can support everyday account access and transactions.', icon: Smartphone },
    ],
    link: officialLinks.business,
    linkText: 'Explore business finance',
  },
  corporate: {
    eyebrow: 'For larger organisations and institutions',
    title: 'Banking information for complex needs.',
    description: 'Bank Windhoek lists Corporate and Institutional as one of its core banking areas. Use the official website to navigate to current services, specialist contacts and supporting information.',
    image: 'https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/Go%20beyong%20pic%201.jpg',
    icon: Building2,
    services: [
      { title: 'Corporate banking', description: 'Use official channels to find the current corporate banking service information.', icon: Building2 },
      { title: 'Institutional support', description: 'Direct complex service questions to the Bank through its verified contact channels.', icon: Globe2 },
      { title: 'Secure access', description: 'Business online banking is hosted on the official Bank Windhoek banking domain.', icon: LockKeyhole },
    ],
    link: officialLinks.home,
    linkText: 'Visit official website',
  },
  digital: {
    eyebrow: 'Convenience, backed by safety',
    title: 'Digital banking that meets you where you are.',
    description: 'Explore digital channels and practical safety guidance. Before registering or making a transaction, follow instructions published by Bank Windhoek and verify that you are using its official channels.',
    image: 'https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/WhatsApp%20Banking.jpg',
    icon: Smartphone,
    services: [
      { title: 'WhatsApp Banking', description: 'Bank Windhoek launched its WhatsApp Banking channel in April 2026. Read the official announcement and setup guidance.', icon: Smartphone },
      { title: 'Mobile & internet banking', description: 'Explore the Bank’s listed digital services and follow the official sign-in or registration process.', icon: Globe2 },
      { title: 'Biometric security', description: 'The Bank has published information about biometric authentication on its mobile app.', icon: Fingerprint },
    ],
    link: officialLinks.digital,
    linkText: 'Explore digital services',
  },
} satisfies Record<BankingPageKind, {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  icon: typeof Wallet;
  services: { title: string; description: string; icon: typeof Wallet }[];
  link: string;
  linkText: string;
}>;

export default function BankingPage({ page, onNavigate }: BankingPageProps) {
  const pageContent = content[page];
  const HeroIcon = pageContent.icon;
  const isDigital = page === 'digital';

  return (
    <div>
      <section className="bg-slate-50">
        <div className="container-max grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-700">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              {pageContent.eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-primary-900 sm:text-5xl">{pageContent.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{pageContent.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={pageContent.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-600">
                {pageContent.linkText} <ArrowUpRight className="h-4 w-4" />
              </a>
              {isDigital && (
                <a href={officialLinks.whatsappFaq} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-primary-800 transition hover:border-primary-300 hover:bg-primary-50">
                  WhatsApp Banking FAQs <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-red-100/70" />
            <img src={pageContent.image} alt="Bank Windhoek branch or digital banking announcement image from the official newsroom" className="relative h-72 w-full rounded-[1.7rem] object-cover shadow-xl sm:h-96" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-accent-600"><HeroIcon className="h-5 w-5" /></span>
              <span><span className="block text-sm font-bold text-primary-900">Bank Windhoek</span><span className="mt-0.5 block text-xs text-slate-500">Official information linked</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-700">Explore your options</p>
            <h2 className="mt-2 text-3xl font-bold text-primary-900 sm:text-4xl">{isDigital ? 'Digital services & safer banking' : 'Start with what you need'}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">The cards below provide a simple overview. Product availability, eligibility, pricing and features must be checked on Bank Windhoek’s official channels.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pageContent.services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <article key={service.title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-red-200 hover:shadow-lg hover:shadow-primary-900/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-800"><ServiceIcon className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-lg font-bold text-primary-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {isDigital && (
        <>
          <section className="bg-primary-900 py-12 text-white sm:py-16">
            <div className="container-max grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">Before you transact</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A few habits make a difference.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">Digital convenience should go hand in hand with careful handling of your personal and banking information.</p>
              </div>
              <div className="space-y-4">
                {[
                  'Never share your PIN, password or one-time password with anyone.',
                  'Check the address and source before following banking links.',
                  'Use the official Bank Windhoek website or verified channels when in doubt.',
                  'Read the Bank’s current instructions before registering for a digital service.',
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-200" />
                    <p className="text-sm leading-6 text-white/85">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="bg-white py-12 sm:py-16">
            <div className="container-max grid gap-5 md:grid-cols-2">
              <a href={officialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-slate-200 p-6 transition hover:border-red-200 hover:shadow-lg">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent-700"><Info className="h-4 w-4" /> Official announcement</span>
                <h3 className="mt-3 text-xl font-bold text-primary-900">WhatsApp Banking</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Read the Bank’s announcement for current service details and its published WhatsApp Banking number.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-800">Read announcement <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </a>
              <a href={officialLinks.biometric} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-slate-200 p-6 transition hover:border-red-200 hover:shadow-lg">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent-700"><Fingerprint className="h-4 w-4" /> Security update</span>
                <h3 className="mt-3 text-xl font-bold text-primary-900">Biometric authentication</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Review the Bank’s published information about biometric authentication and fraud awareness.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-800">Read security update <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </a>
            </div>
          </section>
        </>
      )}

      <section className="pb-14">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-red-50 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-700" />
              <div>
                <h2 className="font-bold text-primary-900">For current terms and official assistance</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Use Bank Windhoek’s official channels. This academic prototype cannot open accounts, receive credentials or carry out transactions.</p>
              </div>
            </div>
            <button type="button" onClick={() => onNavigate('contact')} className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-800">Contact & information <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
    </div>
  );
}
