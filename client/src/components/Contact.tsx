
import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormFields>>({});

  const updateField = (field: keyof FormFields, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));

    setErrors((previous) => {
      const updated = { ...previous };
      delete updated[field];
      return updated;
    });

    if (status !== "sending") {
      setStatus("idle");
    }
  };

  const validate = () => {
    const newErrors: Partial<FormFields> = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending" || !validate()) return;

    setStatus("sending");

    try {
      const response = await fetch(
        "https://adeboluserver.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok || data?.status !== "success") {
        throw new Error("Message delivery failed.");
      }

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormFields) =>
    `w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
      errors[field]
        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
    }`;

  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Get in touch
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Let's build something{" "}
            <span className="text-blue-700">meaningful.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            Whether you have a project in mind, an opportunity to discuss,
            or simply want to connect, I'd be glad to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <div>
            <div className="mb-7">
              <h3 className="text-lg font-semibold text-slate-950">
                Contact information
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                The best way to reach me is through email or the contact form.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:babatundebolu@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Mail size={19} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-slate-900">
                    babatundebolu@gmail.com
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-slate-400 transition group-hover:text-blue-700"
                />
              </a>

              <a
                href="tel:+2348140830241"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Phone size={19} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-900">
                    +234 814 083 0241
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-slate-400 transition group-hover:text-blue-700"
                />
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <MapPin size={19} />
                </span>

                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-900">
                    Lagos, Nigeria
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-7 rounded-xl bg-slate-950 p-6 text-white">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-slate-300">
                  Open to opportunities
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Interested in full-time roles, meaningful collaborations,
                and opportunities to build useful digital products.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-7">
              <h3 className="text-xl font-semibold text-slate-950">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the details below and I'll receive your message.
              </p>
            </div>

            {status === "success" && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Message sent successfully</p>
                  <p className="mt-1 text-xs leading-5">
                    Thank you for reaching out. Your message has been submitted.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
              >
                <AlertCircle size={20} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">
                    Unable to send your message
                  </p>
                  <p className="mt-1 text-xs leading-5">
                    Something went wrong. Please try again or contact me directly by email.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Your name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass("name")}
                    placeholder="John Doe"
                  />

                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass("email")}
                    placeholder="john@example.com"
                  />

                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={inputClass("subject")}
                  placeholder="What would you like to discuss?"
                />

                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-600">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${inputClass("message")} resize-y`}
                  placeholder="Tell me a little about your project, idea, or opportunity..."
                />

                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Your information will only be used to respond to your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
