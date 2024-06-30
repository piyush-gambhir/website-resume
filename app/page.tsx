import React from "react";
import { getWebsiteResumeData } from "@/actions/actions";

import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default async function Home() {
  return (
    <main className="mx-auto max-w-[40rem] text-black">
      <Header />
      <main className="flex flex-col px-4">
        <section className="pb-16">
          <h1 className="mb-4 text-4xl font-semibold">
            Ciao, I&apos;m Piyush.
            <br />
            <span className="text-4xl font-semibold text-black/60">
              A computer science engineer from India.
            </span>
          </h1>
          <p className="text-lg text-black/70">
            I am a software developer with a passion for building web
            applications and solving complex problems. I have experience in
            developing full-stack applications using modern technologies.
          </p>
        </section>
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </main>
  );
}
