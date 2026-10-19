import { ArrowUpRight, BookOpen, ExternalLink, Info, Landmark, Mail } from 'lucide-react';

const officialHome = 'https://www.bankwindhoek.com.na/Pages/default.aspx';

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-primary-900 py-14 text-white sm:py-20">
        <div className="container-max">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Contact & information</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">The right information, from the right place.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">For genuine banking enquiries, always use contact details and support options published by Bank Windhoek. This site is a student-created academic prototype.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-max grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-accent-600"><Landmark className="h-6 w-6" /></span>
            <h2 className="mt-5 text-xl font-bold text-primary-900">Bank Windhoek</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Visit the official website to find current customer support options, branch details, products and service updates.</p>
            <a href={officialHome} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-800 hover:text-accent-600">Open official website <ArrowUpRight className="h-4 w-4" /></a>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-accent-600"><BookOpen className="h-6 w-6" /></span>
            <h2 className="mt-5 text-xl font-bold text-primary-900">About this project</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">The site combines a corporate-style banking presentation with the “Banking Where You Are” media and communication campaign for Mobile Journalism (H2612CJ).</p>
            <a href="#project-note" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-800 hover:text-accent-600">Read the project note <ExternalLink className="h-4 w-4" /></a>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-accent-600"><Mail className="h-6 w-6" /></span>
            <h2 className="mt-5 text-xl font-bold text-primary-900">Academic project contact</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">For feedback specifically about the student assignment, use the academic contact supplied with the assignment submission.</p>
            <a href="mailto:200965085@students.unam.na" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-800 hover:text-accent-600">Email the student <ArrowUpRight className="h-4 w-4" /></a>
          </article>
        </div>
      </section>

      <section id="project-note" className="pb-14">
        <div className="container-max">
          <div className="rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Info className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent-700" />
              <div>
                <h2 className="text-xl font-bold text-primary-900">Educational prototype — not a banking service</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">This independent student project is created to demonstrate a mobile-first communication campaign. It is not operated, maintained or endorsed by Bank Windhoek. Do not enter account details, card details, PINs, passwords or one-time passwords anywhere on this site. No account access, transactions, applications or banking enquiries are processed here.</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">The project uses links to selected public Bank Windhoek sources. Product details, availability, fees, terms and security instructions can change; refer to the official website for current information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
