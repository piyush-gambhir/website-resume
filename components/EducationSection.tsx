import React from "react";

export default function EducationSection() {
  return (
    <section className="pt-10 pb-16">
      <h2 className="font-semibold text-base mb-4 text-black/90">Education</h2>
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          <span className="text-black/50 md:col-span-1">
            October 2021 - Present (Expected 2025)
          </span>
          <div className="flex flex-col md:col-span-2">
            <span className="text-black">The NorthCap University</span>
            <span className="text-black/40 text-sm">B.Tech CSE AIML</span>
            <p className="mt-2 text-black/70 text-base">CGPA: 8.87</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          <span className="text-black/50 col-span-1">
            April 2020 - July 2021
          </span>
          <div className="flex flex-col col-span-2">
            <span className="text-black">St. Mary&apos;s School, Dwarka</span>
            <span className="text-black/40 text-sm">CBSE XII</span>
            <p className="mt-2 text-black/70 text-base">Percentage: 88.0%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
