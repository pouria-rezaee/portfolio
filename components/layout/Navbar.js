"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/#home", label: "خانه" },
  { href: "/#about", label: "درباره من" },
  { href: "/#skills", label: "مهارت‌ها" },
  { href: "/#projects", label: "پروژه‌ها" },
  { href: "/#contact", label: "تماس" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");

  // Scroll state: navbar background + active section
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("/#", ""));

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) {
          current = id;
        }
      });
      setActiveHash(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme: applied straight to the DOM/localStorage — no React state needed,
  // the sun/moon icon swap is handled purely in CSS via [data-theme] (see
  // Navbar.module.css), so there's nothing here to sync back into a render.
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navContainer} container`}>
        <Link href="/#home" className={styles.logo} onClick={handleNavClick}>
          P<span>.</span>R
        </Link>

        <div
          id="nav-menu"
          className={`${styles.navMenu} ${menuOpen ? styles.showMenu : ""}`}
        >
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeHash === item.href.replace("/#", "") ? styles.active : ""
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            type="button"
            aria-label="تغییر پوسته"
            onClick={toggleTheme}
          >
            <svg className={styles.iconSun} viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
            </svg>
            <svg className={styles.iconMoon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
            </svg>
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            type="button"
            aria-label="باز کردن منو"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
