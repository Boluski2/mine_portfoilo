
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedReveal from "@/components/AnimatedReveal";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 60 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "CSS/SCSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5", level: 95 },
      // { name: "Redux", level: 75 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      // { name: "PostgreSQL", level: 70 },
      // { name: "GraphQL", level: 65 },
      // { name: "REST APIs", level: 90 },
      // { name: "Firebase", level: 75 },
      // { name: "AWS", level: 60 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      // { name: "Docker", level: 70 },
      // { name: "Jest", level: 75 },
      // { name: "CI/CD", level: 65 },
      // { name: "Webpack", level: 70 },
      { name: "Figma", level: 60 },
      { name: "VS Code", level: 95 },
      { name: "NPM/Yarn", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level }: Skill) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-sm">{name}</span>
        <span className={`text-xs ${hovered ? "opacity-100" : "opacity-60"} transition-opacity`}>
          {level}%
        </span>
      </div>
      <div
        className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ 
            width: hovered ? `${level}%` : "0%", 
            transitionDelay: hovered ? "0ms" : "200ms" 
          }}
        ></div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-16">
            <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-3">
              Skills & Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Technical Toolkit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've cultivated a diverse set of skills across the full development stack. Here's a detailed breakdown of my technical expertise.
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={200}>
          <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedReveal>

        <AnimatedReveal delay={400} className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Responsive Design", "SEO", "Performance Optimization", 
              "UI/UX", "PWA", "Accessibility", "Agile/Scrum", 
              "Technical Writing", "Code Review", "Mentoring"
            ].map((skill) => (
              <span 
                key={skill} 
                className="skill-pill inline-block px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
