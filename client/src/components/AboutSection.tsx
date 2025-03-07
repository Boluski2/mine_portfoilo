
import { Code, Globe, LineChart, Zap } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <AnimatedReveal 
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 project-card"
    delay={delay}
  >
    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </AnimatedReveal>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-16">
            <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Passionate about creating exceptional web experiences
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-muted-foreground mb-6 text-lg">
                With a well knowledge experience in full-stack development, I specialize in building modern, responsive, and user-friendly web applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground">
                My approach combines clean code principles with innovative design, ensuring that every project I build is not only visually appealing but also performant and accessible.
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Code className="h-6 w-6" />}
            title="Clean Code"
            description="I write maintainable, scalable code following best practices and design patterns."
            delay={100}
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Performance"
            description="I optimize applications for speed and responsiveness across all devices."
            delay={200}
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Accessibility"
            description="I ensure websites are usable for everyone, regardless of ability or context."
            delay={300}
          />
          <FeatureCard
            icon={<LineChart className="h-6 w-6" />}
            title="Data-Driven"
            description="I use analytics and user feedback to continuously improve experiences."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
