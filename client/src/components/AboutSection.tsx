
// import { Code, Globe, LineChart, Zap } from "lucide-react";
// import AnimatedReveal from "@/components/AnimatedReveal";

// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   delay: number;
// }

// const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
//   <AnimatedReveal 
//     className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 project-card"
//     delay={delay}
//   >
//     <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//       {icon}
//     </div>
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-muted-foreground">{description}</p>
//   </AnimatedReveal>
// );

// export default function AboutSection() {
//   return (
//     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <AnimatedReveal>
//           <div className="text-center mb-16">
//             <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-3">
//               About Me
//             </p>
//             <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//               Passionate about creating exceptional web experiences
//             </h2>
//             <div className="mx-auto max-w-3xl">
//               <p className="text-muted-foreground mb-6 text-lg">
//                 With a well knowledge experience in full-stack development, I specialize in building modern, responsive, and user-friendly web applications that solve real-world problems.
//               </p>
//               <p className="text-muted-foreground">
//                 My approach combines clean code principles with innovative design, ensuring that every project I build is not only visually appealing but also performant and accessible.
//               </p>
//             </div>
//           </div>
//         </AnimatedReveal>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <FeatureCard
//             icon={<Code className="h-6 w-6" />}
//             title="Clean Code"
//             description="I write maintainable, scalable code following best practices and design patterns."
//             delay={100}
//           />
//           <FeatureCard
//             icon={<Zap className="h-6 w-6" />}
//             title="Performance"
//             description="I optimize applications for speed and responsiveness across all devices."
//             delay={200}
//           />
//           <FeatureCard
//             icon={<Globe className="h-6 w-6" />}
//             title="Accessibility"
//             description="I ensure websites are usable for everyone, regardless of ability or context."
//             delay={300}
//           />
//           <FeatureCard
//             icon={<LineChart className="h-6 w-6" />}
//             title="Data-Driven"
//             description="I use analytics and user feedback to continuously improve experiences."
//             delay={400}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import { Code, Globe, LineChart, Zap, Brain, Rocket, Users, Shield } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <AnimatedReveal 
    className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:scale-[1.02]"
    delay={delay}
  >
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <div className="text-primary">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
  </AnimatedReveal>
);

export default function AboutSection() {
  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your requirements & goals", icon: Brain },
    { step: "02", title: "Design", description: "Wireframes, UI/UX planning & prototypes", icon: Rocket },
    { step: "03", title: "Development", description: "Clean, scalable code implementation", icon: Code },
    { step: "04", title: "Delivery", description: "Testing, deployment & maintenance", icon: Shield },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-600/10 px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-3xl mx-auto">
              Passionate About Creating{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Exceptional Digital Experiences
              </span>
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                With extensive experience in full-stack development, I specialize in building modern, 
                responsive, and user-friendly web applications that solve real-world problems and drive 
                business growth.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                My approach combines clean code principles with innovative design, ensuring that 
                every project I build is not only visually appealing but also performant, 
                accessible, and scalable.
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <FeatureCard
            icon={<Code className="h-8 w-8" />}
            title="Clean Code"
            description="I write maintainable, scalable code following best practices, design patterns, and industry standards."
            delay={100}
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Performance"
            description="I optimize applications for speed and responsiveness, ensuring fast loading times across all devices."
            delay={200}
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8" />}
            title="Accessibility"
            description="I ensure websites are usable for everyone, regardless of ability or context, following WCAG guidelines."
            delay={300}
          />
          <FeatureCard
            icon={<LineChart className="h-8 w-8" />}
            title="Data-Driven"
            description="I use analytics and user feedback to continuously improve experiences and drive business results."
            delay={400}
          />
        </div>

        <AnimatedReveal delay={500}>
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                My Development Process
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    className="relative group"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 group-hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <div className="p-3 rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${(index + 1) * 25}%`,
                              transitionDelay: `${index * 200}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                This structured approach ensures <span className="font-semibold text-primary">quality</span>, 
                {" "}<span className="font-semibold text-primary">efficiency</span>, and{" "}
                <span className="font-semibold text-primary">client satisfaction</span> at every stage.
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={700} className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl p-8 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Ready to start your project?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Let's discuss how I can help bring your vision to life.
                </p>
              </div>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}