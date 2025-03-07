"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname(); // Get the current route path
  const router = useRouter(); // Use the router for programmatic navigation

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Set the initial hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Update activeHash when the route changes
    setActiveHash(window.location.hash);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#project", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-10 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navLinks.map((link) => {
          if (link.href.startsWith("/#")) {
            // Use <a> for anchor links
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeHash === link.href.split("#")[1] || (pathname === "/" && link.href === "/")
                    ? "bg-white text-gray-900"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {link.label}
              </a>
            );
          } else {
            // Use <Link> for internal routes
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname === link.href
                    ? "bg-white text-gray-900"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            );
          }
        })}
      </nav>
    </div>
  );
};