"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedLink from "../reusable/animation/AnimatedLinks";
import AnimatedButton from "../reusable/animation/AnimatedButton";
import GlassBlur from "../reusable/GlassBlur";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const mobileNavLinks = [
    { name: "Templates", href: "/templates" },
    { name: "Live examples", href: "/examples" },
    { name: "Support", href: "/support" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[100] transition-all duration-300">
        <GlassBlur />

        <div className="relative px-6 md:px-10 py-5 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 relative z-[100]">
            <Image
              src="https://framerusercontent.com/images/IJzpbfJQNym0HsznaxMArf71yI.png"
              alt="Browser.supply Logo"
              className="h-4 w-auto object-contain"
              width={18}
              height={18}
            />
            <AnimatedLink
              href="/"
              title="Browser.supply"
              className="text-lg font-semibold tracking-tight"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <AnimatedLink href="/templates" title="Templates" />
            <AnimatedLink href="/live-example" title="Live examples" />
            <AnimatedLink href="/support" title="Support" />
            <AnimatedLink href="/blog" title="Blog" />
          </nav>

          <div className="hidden md:flex items-center gap-5 text-white relative z-[100]">
            <Link href="#" className="transition-colors hover:text-gray-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            <Link href="#" className="transition-colors hover:text-gray-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M21.582 6.186a2.632 2.632 0 0 0-1.854-1.854C18.093 3.86 12 3.86 12 3.86s-6.093 0-7.728.472a2.632 2.632 0 0 0-1.854 1.854C1.946 7.82 1.946 12 1.946 12s0 4.18.472 5.814a2.632 2.632 0 0 0 1.854 1.854C5.907 20.14 12 20.14 12 20.14s6.093 0 7.728-.472a2.632 2.632 0 0 0 1.854-1.854C22.054 16.18 22.054 12 22.054 12s0-4.18-.472-5.814zM9.99 15.485V8.515L15.93 12z" />
              </svg>
            </Link>

            <AnimatedButton title="Bundle" />
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[100] w-8 h-8 flex flex-col justify-center items-end gap-[6px] focus:outline-none"
            aria-label="Toggle Menu">
            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 4 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-[1.5px] bg-white origin-center"
            />
            <motion.div
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -4 : 0,
                width: isOpen ? "24px" : "20px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[1.5px] bg-white origin-center"
            />
          </button>
        </div>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] w-full h-screen bg-black/20 backdrop-blur-md flex flex-col px-6 pt-28 pb-8 md:hidden">
            <nav className="flex flex-col gap-6 mt-4">
              {mobileNavLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-medium transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-12 flex flex-col gap-8">
              <div className="flex items-center gap-6 text-white">
                <Link href="#" aria-label="X (Twitter)">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="YouTube">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M21.582 6.186a2.632 2.632 0 0 0-1.854-1.854C18.093 3.86 12 3.86 12 3.86s-6.093 0-7.728.472a2.632 2.632 0 0 0-1.854 1.854C1.946 7.82 1.946 12 1.946 12s0 4.18.472 5.814a2.632 2.632 0 0 0 1.854 1.854C5.907 20.14 12 20.14 12 20.14s6.093 0 7.728-.472a2.632 2.632 0 0 0 1.854-1.854C22.054 16.18 22.054 12 22.054 12s0-4.18-.472-5.814zM9.99 15.485V8.515L15.93 12z" />
                  </svg>
                </Link>
              </div>

              <Link
                href="#"
                className="w-full bg-white text-black text-center py-3.5 rounded-lg font-medium text-[15px] hover:bg-gray-100 transition-colors">
                Full-kit
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
