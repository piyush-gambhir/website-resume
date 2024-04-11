import React from "react";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="pt-10 pb-16 ">
      <h2 className="font-semibold text-base mb-4 text-black/90">Projects</h2>
      <div className="space-y-10">
        <ProjectCard
          title="ChatGPT Clone"
          description="
      A full-featured ChatGPT clone, this project showcases my skills in web development, UI design, and the integration of advanced language processing. By leveraging cutting-edge technologies, I built a sophisticated conversational AI experience.
    "
          badgeList={[
            {
              key: "next",
              label: "Next.js",
            },
            {
              key: "react",
              label: "React.js",
            },
            {
              key: "tailwind",
              label: "Tailwind CSS",
            },
            {
              key: "openai",
              label: "Open AI API",
            },
            {
              key: "prisma",
              label: "Prisma ORM",
            },
            {
              key: "postgres",
              label: "Postgres",
            },

            {
              key: "vercel",
              label: "Vercel",
            },
            {
              key: "typescript",
              label: "TypeScript",
            },
            {
              key: "docker",
              label: "Docker",
            },
          ]}
          githubLink="https://github.com/piyush-gambhir"
          deployLink="https://github.com/piyush-gambhir"
        />
        <ProjectCard
          title="ChatGPT Clone"
          description="
      A full-featured ChatGPT clone, this project showcases my skills in web development, UI design, and the integration of advanced language processing. By leveraging cutting-edge technologies, I built a sophisticated conversational AI experience.
    "
          badgeList={[
            {
              key: "next",
              label: "Next.js",
            },
            {
              key: "react",
              label: "React.js",
            },
            {
              key: "tailwind",
              label: "Tailwind CSS",
            },
            {
              key: "openai",
              label: "Open AI API",
            },
            {
              key: "prisma",
              label: "Prisma ORM",
            },
            {
              key: "postgres",
              label: "Postgres",
            },

            {
              key: "vercel",
              label: "Vercel",
            },
            {
              key: "typescript",
              label: "TypeScript",
            },
            {
              key: "docker",
              label: "Docker",
            },
          ]}
          githubLink="https://github.com/piyush-gambhir"
          deployLink="https://github.com/piyush-gambhir"
        />
      </div>
    </section>
  );
}
