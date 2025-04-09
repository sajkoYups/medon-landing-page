"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-primary">Medon</h2>
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} Medon. All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex gap-6">
          <Link href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
