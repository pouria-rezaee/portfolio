"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navContainer} container`}>
        <Link href="/#home" className={styles.logo} onClick={handleNavClick}>
          P<span>.</span>R
        </Link>

        <div
          className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}
        >
          <ul className={styles.navList}>
            <li>
              <Link
                href="/#home"
                className={styles.navLink}
                onClick={handleNavClick}
              >
                خانه
              </Link>
            </li>

            <li>
              <Link
                href="/#about"
                className={styles.navLink}
                onClick={handleNavClick}
              >
                درباره من
              </Link>
            </li>

            <li>
              <Link
                href="/#skills"
                className={styles.navLink}
                onClick={handleNavClick}
              >
                مهارت‌ها
              </Link>
            </li>

            <li>
              <Link
                href="/#projects"
                className={styles.navLink}
                onClick={handleNavClick}
              >
                پروژه‌ها
              </Link>
            </li>

            <li>
              <Link
                href="/#contact"
                className={styles.navLink}
                onClick={handleNavClick}
              >
                تماس
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            type="button"
            aria-label="تغییر پوسته"
          >
            ◐
          </button>

          <button
            className={styles.hamburger}
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
