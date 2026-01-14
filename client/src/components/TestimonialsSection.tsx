import { Star, Quote } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO",
    company: "TechCorp Inc.",
    content: "Working with Babatunde was an absolute pleasure. His attention to detail and technical expertise transformed our vision into a reality. The website he built exceeded our expectations and has significantly improved our user engagement.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Manager",
    company: "StartUpXYZ",
    content: "Babatunde's ability to understand complex requirements and deliver high-quality solutions is impressive. He's not just a developer but a true partner in our success. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "Innovate Solutions",
    content: "The e-commerce platform Babatunde developed for us is robust, scalable, and user-friendly. His technical skills combined with great communication made the entire process smooth and efficient.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w-100&h=100&fit=crop&crop=face"
  }
];

const TestimonialCard = ({ testimonial, delay }: { testimonial: Testimonial; delay: number }) => {
  return (
    <AnimatedReveal delay={delay}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 h-full hover:shadow-2xl transition-all duration-300 group">
        <div className="mb-6">
          <Quote className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors" />
        </div>
        
        <div className="flex gap-2 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic">
          "{testimonial.content}"
        </p>
        
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-gray-500 dark:text-gray-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </AnimatedReveal>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-600/10 px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-3xl mx-auto">
              What <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what clients have to say about working with me.
            </p>
          </div>
        </AnimatedReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              delay={index * 200} 
            />
          ))}
        </div>
        
        <AnimatedReveal delay={600} className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Ready to become my next success story?</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                  Join the list of satisfied clients who have transformed their ideas 
                  into successful digital products.
                </p>
              </div>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}