"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "خانه", href: "/" },
    { label: "درباره من", href: "/about" },
    { label: "پروژه‌ها", href: "/projects" },
    { label: "مهارت‌ها", href: "/skills" },
    { label: "تماس", href: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-logo">
          Pouria
        </Link>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="باز کردن منو"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
