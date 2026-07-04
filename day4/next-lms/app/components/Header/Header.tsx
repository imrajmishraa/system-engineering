import React from "react";
import Link from "next/link";

interface Navlink {
  label: string;
  href: string;
}

interface HeaderProps {
  logoText?: string;
  links?: Navlink[];
  children: React.ReactNode;
}

const defaultLinks: Navlink[] = [
  { label: "Home", href: "/" },
  { label: "LMS", href: "/lms" },
  { label: "React", href: "/react" },
  { label: "NextJS", href: "/nextjs" },
];

export default function Header({
  logoText = "Next.JS",
  links = defaultLinks,
  children,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md md:px-10">
      {/* Logo wrapping Next.js Link */}
      <Link
        href="/"
        className="text-2xl font-bold text-gray-800 tracking-tight transition-opacity hover:opacity-90"
      >
        {logoText}
      </Link>
      {/* Navigation Links */}

      <nav className="flex items-center gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm  font-bold text-gray-600 transition-colors duration-200 hover: hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
