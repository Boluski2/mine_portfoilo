// components/Contact.tsx
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("https://adeboluserver.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === "success") {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
            Contact
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light">Let's work together</h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Have a project in mind? I'd love to hear about it. Reach out and let's
            see how I can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Mail size={18} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Email</h4>
                  <a href="mailto:babatundebolu@gmail.com" className="text-sm text-gray-900 hover:underline">
                    babatundebolu@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Phone size={18} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Phone</h4>
                  <a href="tel:+2348140830241" className="text-sm text-gray-900 hover:underline">
                    +234 814 083 0241
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-md">
                  <MapPin size={18} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Location</h4>
                  <p className="text-sm text-gray-900">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <p className="text-sm text-gray-500">
                Typically replies within <span className="text-gray-900 font-medium">30 minutes</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-lg p-6 md:p-8">
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3 text-green-700">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Message sent</p>
                    <p className="text-sm">Thanks for reaching out — I'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-700">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Something went wrong</p>
                    <p className="text-sm">Please check your entries and try again.</p>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-gray-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-md bg-gray-50/50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition ${
                      errors.name ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-gray-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-md bg-gray-50/50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition ${
                      errors.email ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-gray-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-md bg-gray-50/50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition ${
                      errors.subject ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-gray-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-md bg-gray-50/50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition resize-y ${
                      errors.message ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}