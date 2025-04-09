// src/app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-24">
          <Hero />
        </section>

        <section id="features" className="py-24 bg-gray-50">
          <Features />
        </section>
        <section id="about" className="py-24">
          <About />
        </section>

        <section id="testimonials" className="py-24">
          <Testimonials />
        </section>

        <section id="cta" className="py-24 bg-gray-50">
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
