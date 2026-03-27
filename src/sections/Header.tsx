"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import GooeyNav from "@/components/GooeyNav";

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

  // Determine initial active index based on current path/hash
  let initialIndex = 0;
  if (pathname === "/blogs") initialIndex = 3;
  else if (activeHash === "#about") initialIndex = 1;
  else if (activeHash === "#project") initialIndex = 2;
  else if (activeHash === "#contact") initialIndex = 4;

  const handleItemClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      e.preventDefault();
      const hash = href.split("#")[1];
      setActiveHash(`#${hash}`);
      router.push(`/#${hash}`);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      setActiveHash("");
      router.push(href);
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-10 w-full z-50 pointer-events-none">
      <div className="pointer-events-auto bg-white/10 backdrop-blur rounded-full border border-white/15">
        <GooeyNav
          items={navLinks}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={initialIndex}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
};