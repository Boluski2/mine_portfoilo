
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import AnimatedReveal from "@/components/AnimatedReveal";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "babatundebolu@gmail.com",
    link: "babatundebolu@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    content: "+2348140830241",
    link: "tel:+2348140830241",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    content: "Lagos, Nigeria",
  },
];

export default function ContactSection() {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "failed" | null>(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.status === 'success') {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
          setSubmitStatus('failed');
      }
  } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('failed');
  }

  setIsSubmitting(false);

  // Clear status message after 5 seconds
  setTimeout(() => {
      setSubmitStatus(null);
  }, 5000);
};

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-16">
            <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you! Fill out the form below or reach out through any of the provided contact methods.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedReveal delay={200} className="col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-base hover-underline"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-base">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/"
                    className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:scale-110 transition-transform"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/"
                    className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/2348182296188"
                    className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:scale-110 transition-transform"
                    aria-label="WhatSapp"
                    target="_blank"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                     fill="currentColor"
                     d="M16.2 3.8A9.88 9.88 0 003.1 16.6L2 21.8l5.3-1.4a9.9 9.9 0 0014.4-8.7c0-2.6-1-5-2.9-6.9a9.88 9.88 0 00-2.6-1.9zM12 19.4a7.4 7.4 0 01-3.9-1.1L6 18l.7-2.4a7.4 7.4 0 01-1.1-3.9 7.4 7.4 0 0112.7-5.3 7.4 7.4 0 01-5.3 12.7zm3.5-5.5c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.2c-.2.2-.7.7-.8.8-.1.2-.3.1-.5.1s-.9-.3-1.7-1c-.6-.6-1-1.3-1.1-1.5s0-.4.1-.5l.7-.8c.1-.2.2-.3.2-.6s0-.4-.1-.6-.6-1.5-.7-1.7c-.2-.3-.3-.3-.5-.3h-.6c-.2 0-.6.1-.9.4s-1.1 1-1.1 2.4 1.1 2.7 1.2 2.8c.1.2 2.2 3.5 5.3 4.8 1 .4 1.8.6 2.4.8 1 .3 1.9.3 2.6.2s1.3-.6 1.5-1.1c.2-.5.2-1 .2-1.1s-.2-.2-.4-.3z"
                    />

                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={400} className="col-span-1 lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Thank you for your message! I'll get back to you shortly.
                </div>
              )}
            <form onSubmit={handleSubmit} className="space-y-6">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Name
      </label>
      <Input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="w-full"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="phone" className="block text-sm font-medium mb-2">
        Phone
      </label>
      <Input
        id="phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Number"
        required
        className="w-full"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
        required
        className="w-full"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="subject" className="block text-sm font-medium mb-2">
        Subject
      </label>
      <Input
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="What is this regarding?"
        required
        className="w-full"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Message
      </label>
      <Textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message here..."
        rows={6}
        required
        className="w-full"
      />
    </div>
  </div>

  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full md:w-auto"
  >
    {isSubmitting ? (
      <span className="flex items-center">
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Sending...
      </span>
    ) : (
      <span className="flex items-center">
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </span>
    )}
  </Button>
</form>

            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
