
// import { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import AnimatedReveal from "@/components/AnimatedReveal";

// interface Skill {
//   name: string;
//   level: number;
// }

// interface SkillCategory {
//   id: string;
//   name: string;
//   skills: Skill[];
// }

// const skillCategories: SkillCategory[] = [
//   {
//     id: "frontend",
//     name: "Frontend",
//     skills: [
//       { name: "React", level: 90 },
//       { name: "TypeScript", level: 60 },
//       { name: "Next.js", level: 80 },
//       { name: "Tailwind CSS", level: 90 },
//       { name: "CSS/SCSS", level: 85 },
//       { name: "JavaScript", level: 80 },
//       { name: "HTML5", level: 95 },
//       // { name: "Redux", level: 75 },
//     ],
//   },
//   {
//     id: "backend",
//     name: "Backend",
//     skills: [
//       { name: "Node.js", level: 85 },
//       { name: "Express", level: 80 },
//       { name: "MongoDB", level: 75 },
//       // { name: "PostgreSQL", level: 70 },
//       // { name: "GraphQL", level: 65 },
//       // { name: "REST APIs", level: 90 },
//       // { name: "Firebase", level: 75 },
//       // { name: "AWS", level: 60 },
//     ],
//   },
//   {
//     id: "tools",
//     name: "Tools & Others",
//     skills: [
//       { name: "Git", level: 90 },
//       // { name: "Docker", level: 70 },
//       // { name: "Jest", level: 75 },
//       // { name: "CI/CD", level: 65 },
//       // { name: "Webpack", level: 70 },
//       { name: "Figma", level: 60 },
//       { name: "VS Code", level: 95 },
//       { name: "NPM/Yarn", level: 90 },
//     ],
//   },
// ];

// const SkillBar = ({ name, level }: Skill) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="mb-4">
//       <div className="flex justify-between items-center mb-1">
//         <span className="font-medium text-sm">{name}</span>
//         <span className={`text-xs ${hovered ? "opacity-100" : "opacity-60"} transition-opacity`}>
//           {/* {level}% */}
//         </span>
//       </div>
//       <div
//         className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <div
//           className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
//           style={{ 
//             // width: hovered ? `${level}%` : "0%", 
//             // transitionDelay: hovered ? "0ms" : "200ms" 
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default function SkillsSection() {
//   return (
//     <section id="skills" className="py-20">
//       <div className="container mx-auto px-4">
//         <AnimatedReveal>
//           <div className="text-center mb-16">
//             <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-3">
//               Skills & Expertise
//             </p>
//             <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//               My Technical Toolkit
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               I've cultivated a diverse set of skills across the full development stack. Here's a detailed breakdown of my technical expertise.
//             </p>
//           </div>
//         </AnimatedReveal>

//         <AnimatedReveal delay={200}>
//           <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
//             <TabsList className="grid w-full grid-cols-3 mb-8">
//               {skillCategories.map((category) => (
//                 <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
//                   {category.name}
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             {skillCategories.map((category) => (
//               <TabsContent key={category.id} value={category.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
//                   {category.skills.map((skill, index) => (
//                     <SkillBar key={skill.name} name={skill.name} level={skill.level} />
//                   ))}
//                 </div>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </AnimatedReveal>

//         <AnimatedReveal delay={400} className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-xl p-8 max-w-3xl mx-auto">
//           <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "Responsive Design", "SEO", "Performance Optimization", 
//               "UI/UX", "PWA", "Accessibility", "Agile/Scrum", 
//               "Technical Writing", "Code Review", "Mentoring"
//             ].map((skill) => (
//               <span 
//                 key={skill} 
//                 className="skill-pill inline-block px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </AnimatedReveal>
//       </div>
//     </section>
//   );
// }



import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, Server, Database, Palette, 
  Cloud, GitBranch, Cpu, Smartphone 
} from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
  color: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "Tailwind CSS", level: 95, color: "#06B6D4" },
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "HTML5/CSS3", level: 98, color: "#E34F26" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "Python", level: 80, color: "#3776AB" },
      { name: "REST APIs", level: 95, color: "#FF6B6B" },
      { name: "Authentication", level: 90, color: "#4ECDC4" },
      { name: "Microservices", level: 75, color: "#FFD93D" },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MongoDB", level: 85, color: "#47A248" },
      { name: "PostgreSQL", level: 80, color: "#336791" },
      { name: "Firebase", level: 75, color: "#FFCA28" },
      { name: "Redis", level: 70, color: "#DC382D" },
      { name: "Prisma", level: 85, color: "#2D3748" },
      { name: "GraphQL", level: 75, color: "#E10098" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "Git & GitHub", level: 95, color: "#F05032" },
      { name: "Docker", level: 80, color: "#2496ED" },
      { name: "AWS", level: 75, color: "#FF9900" },
      { name: "Vercel", level: 90, color: "#000000" },
      { name: "CI/CD", level: 85, color: "#F5A623" },
      { name: "Figma", level: 85, color: "#F24E1E" },
    ],
  },
];

const SkillBar = ({ name, level, color }: Skill) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, 300);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="group relative p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <span 
              className="text-sm font-bold"
              style={{ color }}
            >
              {name.charAt(0)}
            </span>
          </div>
          <span className="font-semibold">{name}</span>
        </div>
        <span className="font-bold text-lg" style={{ color }}>
          {animatedLevel}%
        </span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${animatedLevel}%`,
            background: `linear-gradient(90deg, ${color}, ${color}CC)`
          }}
        />
      </div>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none">
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        {level}% Proficiency
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-600/10 px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-3xl mx-auto">
              My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Technical Toolkit</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I've cultivated a diverse set of skills across the full development stack. 
              Here's a detailed breakdown of my technical expertise and proficiency levels.
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={200}>
          <Tabs 
            defaultValue="frontend" 
            className="max-w-6xl mx-auto"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-white data-[state=active]:dark:bg-gray-900 data-[state=active]:shadow-lg rounded-xl py-3 text-sm md:text-base transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${activeTab === category.id ? 'text-primary' : 'text-gray-500'}`}>
                      {category.icon}
                    </div>
                    {category.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      color={skill.color}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedReveal>

        <AnimatedReveal delay={400} className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-white to-blue-600/5 dark:from-primary/10 dark:via-gray-900 dark:to-blue-600/10 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Additional <span className="text-primary">Skills</span> & Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { skill: "Responsive Design", emoji: "📱" },
                { skill: "SEO Optimization", emoji: "🔍" },
                { skill: "Performance", emoji: "⚡" },
                { skill: "UI/UX Design", emoji: "🎨" },
                { skill: "PWA", emoji: "📲" },
                { skill: "Accessibility", emoji: "♿" },
                { skill: "Agile/Scrum", emoji: "🔄" },
                { skill: "Code Review", emoji: "👁️" },
                { skill: "Mentoring", emoji: "👨‍🏫" },
                { skill: "Testing", emoji: "🧪" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all group text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.skill}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Always Learning & Growing</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I continuously update my skills to stay current with the latest technologies and best practices.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                    Currently Learning
                  </div>
                  <div className="px-4 py-2 bg-blue-600/10 rounded-full text-blue-600 dark:text-blue-400 font-medium">
                    AWS Certification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}