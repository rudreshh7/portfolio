import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between m-6 md:backdrop-blur md:my-15 md:mx-40 lg:mx-80">
      <div>
        <Link className="font-black" href="/">
          रुद्रेश
        </Link>
      </div>
      <ul className="flex justify-around gap-4 text-sl md:gap-6">
        <li>
          <Link href="/projects">projects</Link>
        </li>

        <li>
          <Link href="/resume">resume</Link>
        </li>
        <li>
          <Link href="/blogs">blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
