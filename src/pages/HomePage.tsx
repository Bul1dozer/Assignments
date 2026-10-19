import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CircleHelp,
  CreditCard,
  Fingerprint,
  LockKeyhole,
  Smartphone,
  Wallet,
} from 'lucide-react';
import type { PageId } from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import { getLatestArticles } from '@/data/articles';

interface HomePageProps {
  onNavigate: (page: PageId, articleId?: string) => void;
}

const officialHome = 'https://www.bankwindhoek.com.na/Pages/default.aspx';
const whatsappArticle =
  'https://www.bankwindhoek.com.na/Pages/News/bank-windhoek-becomes-first-bank-in-namibia-to-launch-whatsapp-banking.aspx';

const serviceCards: {
  title: string;
  description: string;
  page: PageId;
  icon: typeof Wallet;
}[] = [
  {
    title: 'Personal banking',
    description: 'Explore everyday banking options for your personal goals and needs.',
    page: 'personal',
    icon: Wallet,
  },
  {
    title: 'Business banking',
    description: 'Find banking information for businesses and entrepreneurs.',
    page: 'business',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Corporate & institutional',
    description: 'Discover the bank’s corporate and institutional banking areas.',
    page: 'corporate',
    icon: Building2,
  },
  {
    title: 'Digital banking',
    description: 'Learn about digital channels and how to use them more confidently.',
    page: 'digital',
    icon: Smartphone,
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const latest = getLatestArticles(2);

  return (
    <div className="overflow-hidden">
      <section className="relative bg-white">
        <div className="container-max grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:py-20">
          <div className="relative z-10">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-accent-700">
              Banking for life in Namibia
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Banking that fits <span className="text-accent-600">your life.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore banking options, discover useful digital services and get clear
              information to help you make more confident everyday banking decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate('personal')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-red-900/10 transition hover:-translate-y-0.5 hover:bg-accent-600"
              >
                Explore banking
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('digital')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-primary-800 transition hover:border-primary-300 hover:bg-primary-50"
              >
                Discover digital banking
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5"><ShieldCheckIcon /> Customer safety matters</span>
              <span className="inline-flex items-center gap-1.5"><CircleHelp className="h-4 w-4 text-accent-600" /> Clear, accessible information</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -right-6 -top-7 h-36 w-36 rounded-full bg-red-100/70 blur-2xl" />
            <div className="absolute -bottom-7 -left-6 h-40 w-40 rounded-full bg-blue-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] bg-primary-900 shadow-2xl shadow-primary-900/15">
              <img
                src="https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/Go%20beyong%20pic%201.jpg"
                alt="A modern Bank Windhoek branch interior with a customer service desk"
                className="h-[340px] w-full object-cover sm:h-[440px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Here for your next step</p>
                <h2 className="mt-2 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                  Real support. More ways to bank.
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                  A customer-first digital experience inspired by Bank Windhoek’s public services.
                </p>
              </div>
              <div className="absolute right-4 top-4 rounded-2xl border border-white/40 bg-white/95 p-4 text-primary-900 shadow-lg sm:right-6 sm:top-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-accent-600">
                  <Smartphone className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-bold">Bank on the go</p>
                <p className="mt-1 text-xs text-slate-500">Digital convenience</p>
              </div>
            </div>
            <p className="mt-2 text-right text-[10px] text-slate-400">
              Image source: Bank Windhoek public newsroom
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="container-max grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
          <button type="button" onClick={() => onNavigate('personal')} className="group flex items-center gap-3 px-3 py-5 text-left transition hover:bg-white sm:px-5">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm"><CreditCard className="h-5 w-5" /></span>
            <span><span className="block text-sm font-bold text-primary-900">Accounts</span><span className="mt-1 block text-xs text-slate-500">Explore options</span></span>
          </button>
          <button type="button" onClick={() => onNavigate('business')} className="group flex items-center gap-3 px-3 py-5 text-left transition hover:bg-white sm:px-5">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm"><BriefcaseBusiness className="h-5 w-5" /></span>
            <span><span className="block text-sm font-bold text-primary-900">Business</span><span className="mt-1 block text-xs text-slate-500">Business banking</span></span>
          </button>
          <button type="button" onClick={() => onNavigate('digital')} className="group flex items-center gap-3 px-3 py-5 text-left transition hover:bg-white sm:px-5">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm"><Smartphone className="h-5 w-5" /></span>
            <span><span className="block text-sm font-bold text-primary-900">Digital</span><span className="mt-1 block text-xs text-slate-500">Banking channels</span></span>
          </button>
          <a href={officialHome} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-3 py-5 text-left transition hover:bg-white sm:px-5">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-accent-600 shadow-sm"><ArrowUpRight className="h-5 w-5" /></span>
            <span><span className="block text-sm font-bold text-primary-900">Official site</span><span className="mt-1 block text-xs text-slate-500">Bank Windhoek</span></span>
          </a>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-max">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-600">Find what you need</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">Explore banking</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Start with the area that best fits your needs. This academic demonstration points
                visitors to official sources for current product information and terms.
              </p>
            </div>
            <button type="button" onClick={() => onNavigate('contact')} className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary-800 transition hover:text-accent-600">
              Help and contact <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => onNavigate(service.page)}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-primary-900/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-800 transition group-hover:bg-red-50 group-hover:text-accent-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary-900">{service.title}</h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-600">
                    Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary-900 py-14 text-white sm:py-20">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-red-200">
              Digital banking
            </span>
            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              Everyday banking, with more ways to connect.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              From mobile and internet banking to WhatsApp Banking, digital channels can make
              everyday tasks more accessible. Choose the official information source before you
              register or transact.
            </p>
            <button type="button" onClick={() => onNavigate('digital')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-primary-900 transition hover:bg-red-50">
              Explore digital banking <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-red-200"><Smartphone className="h-5 w-5" /></span>
              <h3 className="mt-4 text-lg font-bold">WhatsApp Banking</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">Learn about the channel launched by Bank Windhoek and read its official setup guidance.</p>
              <a href={whatsappArticle} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red-200 hover:text-white">Read the announcement <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-red-200"><Fingerprint className="h-5 w-5" /></span>
              <h3 className="mt-4 text-lg font-bold">Security comes first</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">Understand simple habits that help protect your personal and banking information.</p>
              <button type="button" onClick={() => onNavigate('digital')} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red-200 hover:text-white">Read safety guidance <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-50 py-14 sm:py-20">
        <div className="container-max grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Featured communication campaign</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-primary-900 sm:text-4xl">Banking Where You Are</h2>
            <p className="mt-3 text-xl font-semibold text-accent-700">Your bank. Your life. Your way.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
              This Mobile Journalism campaign explores how digital banking can fit into real
              everyday situations. Explore the campaign brief, target audience, messages, visual
              assets and production storyboard.
            </p>
            <button type="button" onClick={() => onNavigate('campaign')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-600">
              Explore the campaign <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="relative overflow-hidden rounded-[1.6rem] bg-primary-900 shadow-xl">
            <img
              src="https://www.bankwindhoek.com.na/Style%20Library/Image2023/Media_Releases/WhatsApp%20Banking.jpg"
              alt="Bank Windhoek representatives at the WhatsApp Banking launch"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-200">Campaign focus</p>
              <p className="mt-2 text-xl font-bold">Convenience, safety and human support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-max">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-600">Updates and information</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">Banking news & insights</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">Selected articles based on Bank Windhoek’s public newsroom. Open the original source to verify current details.</p>
            </div>
            <a href="https://www.bankwindhoek.com.na/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="hidden flex-shrink-0 items-center gap-1.5 text-sm font-bold text-primary-800 hover:text-accent-600 sm:inline-flex">Official website <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {latest.map((article, index) => (
              <ArticleCard key={article.id} article={article} onNavigate={onNavigate} variant={index === 0 ? 'featured' : 'default'} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-max">
          <div className="flex flex-col gap-6 rounded-3xl border border-red-100 bg-red-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-accent-600 shadow-sm"><LockKeyhole className="h-6 w-6" /></span>
              <div>
                <h2 className="text-xl font-bold text-primary-900 sm:text-2xl">Keep your banking information safe.</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Never share your PIN, password or one-time password with anyone, including someone who claims to represent your bank. Use official channels if you have concerns.</p>
              </div>
            </div>
            <button type="button" onClick={() => onNavigate('digital')} className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-800">Digital safety tips <ArrowRight className="h-4 w-4" /></button>
          </div>
          <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
            This is a student-created academic website prototype for Mobile Journalism (H2612CJ). It is not an official Bank Windhoek service and does not provide banking transactions.
          </p>
        </div>
      </section>
    </div>
  );
}

function ShieldCheckIcon() {
  return <LockKeyhole className="h-4 w-4 text-accent-600" />;
}
