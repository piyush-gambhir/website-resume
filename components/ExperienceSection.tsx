import React from "react";

export default function ExperienceSection() {
  return (
    <section className="pt-10 pb-16">
      <h2 className="font-semibold text-base mb-4 text-black/90">Experience</h2>
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          <span className="text-black/50 md:col-span-1">
            January 2024 - Present
          </span>
          <div className="flex flex-col md:col-span-2">
            <span className="text-black">Spyne</span>
            <span className="text-black/40 text-sm">SDE Intern</span>
            <p className="mt-2 text-black/70 text-lg"></p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          <span className="text-black/50 col-span-1">
            June 2023 - August 2023
          </span>
          <div className="flex flex-col md:col-span-2">
            <span className="text-black">Spyne</span>
            <span className="text-black/40 text-sm">SDE Summer Intern</span>
            <p className="mt-2 text-black/70 text-base">
              During my full-stack internship at Spyne, I developed web
              applications using Next.js, Express (Sails), and SQL. I built
              internal tools that increased non-technical team productivity by
              20% and contributed to the improvement of Spyne&apos;s AI models
              through web scraping and data processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
