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
          <a href="#cta" className="hover:text-primary transition">
            Get Started
          </a>
          <button className="ml-4 px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
            Login
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
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-white shadow-md"
        >
          <a href="#features" className="block hover:text-primary">
            Features
          </a>
          <a href="#testimonials" className="block hover:text-primary">
            Testimonials
          </a>
          <a href="#cta" className="block hover:text-primary">
            Get Started
          </a>
          <button className="w-full mt-2 px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
            Login
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
