"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "#ffffff" : "rgba(255,255,255,0)",
        boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
      }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Medon
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-primary transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-primary transition">
            Testimonials
          </a>
          <button
            onClick={() => {
              const el = document.getElementById("cta");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                history.replaceState(null, "", " ");
              }
            }}
            className="hover:text-primary transition"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        className={`overflow-hidden transition-all duration-300 md:hidden px-6 ${
          menuOpen ? "py-4" : "py-0"
        } bg-white shadow-md space-y-4`}
      >
        <a href="#features" className="block hover:text-primary">
          Features
        </a>
        <a href="#testimonials" className="block hover:text-primary">
          Testimonials
        </a>
        <button
          onClick={() => {
            const el = document.getElementById("cta");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              history.replaceState(null, "", " ");
              setMenuOpen(false);
            }
          }}
          className="hover:text-primary transition block"
        >
          Get Started
        </button>
      </motion.div>
    </motion.header>
  );
}
