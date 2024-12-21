"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-10 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-item ${
              activeHash === link.href ? "bg-white text-gray-900" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
