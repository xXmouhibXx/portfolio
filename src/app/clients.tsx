"use client";

import { Typography } from "@material-tailwind/react";
// Import all the icons you need
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiTensorflow
} from 'react-icons/si';

const TECH_STACK = {
  frontend: [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  ],
  databases: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  ],
};

export function Clients() {  // Keep the function name as Clients
  return (
    <section className="px-8 py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            My Tech Stack
          </Typography>
        </div>

        {/* Frontend */}
        <div className="text-center mb-16">
          <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
            Frontend:
          </Typography>
          <div className="flex flex-wrap justify-center items-center gap-12">
  {TECH_STACK.frontend.map((tech, key) => {
    const Icon = tech.icon;
    return (
      <div key={key} className="flex flex-col items-center">
        <Icon className="text-6xl" style={{ color: tech.color }} />
        <Typography variant="small" className="mt-2 text-gray-700 font-medium">
          {tech.name}
        </Typography>
      </div>
    );
  })}
</div>

        </div>

        {/* Backend */}
        <div className="text-center mb-16">
          <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
            Backend:
          </Typography>
         <div className="flex flex-wrap justify-center items-center gap-12">
  {TECH_STACK.backend.map((tech, key) => {
    const Icon = tech.icon;
    return (
      <div key={key} className="flex flex-col items-center">
        <Icon className="text-6xl" style={{ color: tech.color }} />
        <Typography variant="small" className="mt-2 text-gray-700 font-medium">
          {tech.name}
        </Typography>
      </div>
    );
  })}
</div>

        </div>

        {/* Databases */}
        <div className="text-center mb-16">
          <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
            Databases:
          </Typography>
          <div className="flex flex-wrap justify-center items-center gap-12">
  {TECH_STACK.databases.map((tech, key) => {
    const Icon = tech.icon;
    return (
      <div key={key} className="flex flex-col items-center">
        <Icon className="text-6xl" style={{ color: tech.color }} />
        <Typography variant="small" className="mt-2 text-gray-700 font-medium">
          {tech.name}
        </Typography>
      </div>
    );
  })}
</div>

        </div>

        {/* Tools */}
        <div className="text-center mb-16">
          <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
            Tools:
          </Typography>
          <div className="flex flex-wrap justify-center items-center gap-12">
  {TECH_STACK.tools.map((tech, key) => {
    const Icon = tech.icon;
    return (
      <div key={key} className="flex flex-col items-center">
        <Icon className="text-6xl" style={{ color: tech.color }} />
        <Typography variant="small" className="mt-2 text-gray-700 font-medium">
          {tech.name}
        </Typography>
      </div>
    );
  })}
</div>
        </div>
      </div>
    </section>
  );
}

export default Clients;