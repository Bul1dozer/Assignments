import { useState } from 'react';
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Send,
  CheckCircle,
  Shield,
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formState.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formState.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Your message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 py-16">
        <div className="container-max text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white mb-3">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            We welcome your feedback, story suggestions, enquiries, and campaign
            partnership proposals.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-serif font-bold text-xl text-slate-900 mb-4">
                  Publication &amp; Campaign Contact
                </h2>
                <div className="space-y-4">
                  <ContactItem
                    icon={<Mail className="w-5 h-5" />}
                    label="Email"
                    value="200965085@students.unam.na"
                    href="mailto:200965085@students.unam.na"
                  />
                  <ContactItem
                    icon={<Phone className="w-5 h-5" />}
                    label="Phone"
                    value="0816270080"
                    href="tel:0816270080"
                  />
                  <ContactItem
                    icon={<Globe className="w-5 h-5" />}
                    label="Website"
                    value="www.bankwindhoek.com.na"
                    href="https://www.bankwindhoek.com.na"
                  />
                  <ContactItem
                    icon={<MapPin className="w-5 h-5" />}
                    label="Address"
                    value="University of Namibia, Windhoek Campus \u2014 Mobile Journalism (H2612CJ)"
                  />
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">
                  Follow the Campaign
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/bankwindhoek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-primary-50 transition-colors text-sm font-medium text-slate-700 hover:text-primary-700"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/bankwindhoek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-primary-50 transition-colors text-sm font-medium text-slate-700 hover:text-primary-700"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://x.com/bankwindhoek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-primary-50 transition-colors text-sm font-medium text-slate-700 hover:text-primary-700"
                  >
                    <Twitter className="w-4 h-4" />
                    X
                  </a>
                </div>
              </div>

              {/* Invitation */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-serif font-bold text-lg text-primary-800 mb-2">
                  We Want to Hear From You
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Have a story tip, feedback on our reporting, or a campaign
                  enquiry? Use the form to reach our editorial and campaign teams.
                  We read every message.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Fields marked with <span className="text-error-500">*</span> are required.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-success-800">
                        Message sent successfully.
                      </p>
                      <p className="text-xs text-success-700 mt-1">
                        Thank you for reaching out. We will respond to your enquiry
                        within 2–3 business days.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Full Name <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-error-300 focus:ring-error-200'
                            : 'border-slate-200 focus:ring-primary-200 focus:border-primary-400'
                        }`}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-xs text-error-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Email Address <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-error-300 focus:ring-error-200'
                            : 'border-slate-200 focus:ring-primary-200 focus:border-primary-400'
                        }`}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-xs text-error-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Subject <span className="text-error-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? 'border-error-300 focus:ring-error-200'
                          : 'border-slate-200 focus:ring-primary-200 focus:border-primary-400'
                      } bg-white`}
                      aria-invalid={!!errors.subject}
                    >
                      <option value="">Select a topic...</option>
                      <option value="feedback">General Feedback</option>
                      <option value="story-tip">Story Tip / News Suggestion</option>
                      <option value="campaign">Campaign Enquiry</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="correction">Report a Correction</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-xs text-error-600 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Your Message <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 resize-none ${
                        errors.message
                          ? 'border-error-300 focus:ring-error-200'
                          : 'border-slate-200 focus:ring-primary-200 focus:border-primary-400'
                      }`}
                      placeholder="Write your message here..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-xs text-error-600 mt-1">{errors.message}</p>
                    )}
                    <p className="text-xs text-slate-400 mt-1">
                      {formState.message.length} characters
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold text-sm hover:bg-primary-600 transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>

                {/* Privacy notice */}
                <div className="mt-8 p-4 bg-slate-50 rounded-lg flex items-start gap-3">
                  <Shield className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-700 mb-1">
                      Privacy Notice
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      The information you provide through this form — your name,
                      email address, and message — is used solely to respond to your
                      enquiry. We do not share your personal information with third
                      parties. Your data is stored securely and retained only for as
                      long as necessary to address your communication. By submitting
                      this form, you consent to this use of your information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
          {label}
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    );
  }
  return content;
}
