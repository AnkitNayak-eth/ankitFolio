import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const footerLinks = [
  {
    icon: <FaLinkedin className="h-6 w-6 " />,
    href: "https://www.linkedin.com/in/ankitnayaketh/",
  },
  {
    icon: <FaTwitter className="h-6 w-6 " />,
    href: "https://x.com/AnkitNayak_eth",
  },
  {
    icon: <FaGithub className="h-6 w-6 " />,
    href: "https://github.com/AnkitNayak-eth",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-violet-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-50"></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-row justify-between items-center gap-8">
          <div className="text-white/100">&copy; 2025. All rights reserved.</div>

          <nav className="flex flex-row items-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transform hover:scale-150 transition-transform duration-300 ease-in-out"
              >
                <span>{link.icon}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
