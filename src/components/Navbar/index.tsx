'use client'
import { useState } from "react";
import Button from "@/components/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4">
      {/* Menu Items */}
      <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:flex-row flex-col lg:items-center transition-all duration-300 ease-in-out`}>
        <li className="mb-4 lg:mb-0 lg:mr-4">
          <Button route="/">Home</Button>
        </li>
        <li className="mb-4 lg:mb-0 lg:mr-4">
          <Button route="projects">Projects</Button>
        </li>
        <li className="mb-4 lg:mb-0 lg:mr-4">
          <Button route="skills">Skills</Button>
        </li>
        <li className="mb-4 lg:mb-0 lg:mr-4">
          <Button route="education">Education</Button>
        </li>
        <li className="mb-4 lg:mb-0 lg:mr-4">
          <Button route="contact">Contact</Button>
        </li>
        <li>
          <Button route="about">About</Button>
        </li>
      </ul>
      {/* Menu Burger Icon */}
      <button className="block lg:hidden ml-auto focus:outline-none" onClick={toggleMenu}>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
}
