import Link from "next/link";
import AnimatedLink from "../reusable/animation/AnimatedLinks";
import AnimatedButton from "../reusable/animation/AnimatedButton";
import Image from "next/image";
import GlassBlur from "../reusable/GlassBlur";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <GlassBlur />

      <div className="relative px-10 py-5 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
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
          <AnimatedLink href="#templates" title="Templates" />
          <AnimatedLink href="#examples" title="Live examples" />
          <AnimatedLink href="#support" title="Support" />
          <AnimatedLink href="#blog" title="Blog" />
        </nav>

        <div className="flex items-center gap-5 text-white">
          <Link href="#" className="transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          <Link href="#" className="transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M21.582 6.186a2.632 2.632 0 0 0-1.854-1.854C18.093 3.86 12 3.86 12 3.86s-6.093 0-7.728.472a2.632 2.632 0 0 0-1.854 1.854C1.946 7.82 1.946 12 1.946 12s0 4.18.472 5.814a2.632 2.632 0 0 0 1.854 1.854C5.907 20.14 12 20.14 12 20.14s6.093 0 7.728-.472a2.632 2.632 0 0 0 1.854-1.854C22.054 16.18 22.054 12 22.054 12s0-4.18-.472-5.814zM9.99 15.485V8.515L15.93 12z" />
            </svg>
          </Link>

          <AnimatedButton title="Bundle" />
        </div>
      </div>
    </header>
  );
}
