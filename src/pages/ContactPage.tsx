export default function ContactPage() {
  return (
    <section id="campaign-contact" className="bg-white py-12 sm:py-16">
      <div className="container-max">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-700">Project contact</p>
          <h2 className="mt-2 text-2xl font-bold text-primary-900 sm:text-3xl">Questions about the campaign?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Contact the student creator for feedback, questions about the campaign proposal or information about this Mobile Journalism assignment.
          </p>
          <p className="mt-5 text-sm font-semibold text-primary-900">Willemina T. Alfons</p>
          <p className="mt-1 text-sm text-slate-500">Mobile Journalism (H2612CJ) · University of Namibia, Windhoek Campus</p>
          <a href="mailto:200965085@students.unam.na" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
            Email the campaign creator
          </a>
          <div className="mt-8 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
            This is an independent academic prototype. It is not operated or endorsed by Bank Windhoek. Do not submit account details, card information, PINs, passwords or one-time passwords through this project.
          </div>
        </div>
      </div>
    </section>
  );
}
