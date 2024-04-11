import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="pt-10 pb-16">
      <h2 className="font-semibold text-base mb-4 text-black/90">Contact</h2>
      <div className="space-y-4">
        <div className="grid md:grid-cols-3 gap-2 md:gap-6">
          <span className="text-black/50 col-span-1">E-Mail</span>
          <Link
            href="mailto:developer.piyushgambhir@gmail.com"
            className="md:col-span-2 text-black/70 text-base"
          >
            developer@piyushgambhir.com
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-2 md:gap-6">
          <span className="text-black/50 md:col-span-1">LinkedIn</span>
          <Link
            href="https://www.linkedin.com/in/gambhirpiyush/"
            className="md:col-span-2 text-black/70 text-base"
          >
            {"in/gambhirpiyush"}
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-2 md:gap-6">
          <span className="text-black/50 md:col-span-1">GitHub</span>
          <Link
            href="https://github.com/piyush-gambhir"
            className="md:col-span-2 text-black/70 text-base"
          >
            {"git/piyush-gambhir"}
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-2 md:gap-6">
          <span className="text-black/50 md:col-span-1">X</span>
          <Link
            href="https://twitter.com/_piyushgambhir"
            className="md:col-span-2 text-black/70 text-base"
          >
            {"@_piyushgambhir"}
          </Link>
        </div>
      </div>
    </section>
  );
}
