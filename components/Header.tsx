import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between px-4 py-16 text-base font-semibold">
      <Link href={"/"} className="">
        Piyush
      </Link>
      <nav className="">
        <Link href="https://drive.google.com/file/d/1x3gwl6qaXc3DLnZg_8nClJKy9N799mbR/view?usp=sharing">
          Resume
        </Link>
      </nav>
    </header>
  );
}
