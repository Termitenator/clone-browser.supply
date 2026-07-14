import SectionWrapper from "@/component/reusable/SectionWrapper";
import Link from "next/link";
import AnimatedCreatorBadge from "../reusable/animation/AnimatedCreatorBadge";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center">
      <SectionWrapper className="w-full border-x border-b border-[#212121]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-10 md:p-12 gap-12 md:gap-8">
          <div className="flex flex-col max-w-sm items-center md:items-start text-center md:text-left">
            <Link href="/" className="font-serif text-2xl text-white mb-4">
              Browser.supply
            </Link>

            <p className="text-white text-[15px] leading-relaxed mb-8">
              Launch your online business with a premium Framer website
              template.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-5 text-white">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-6">
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <Link
                href="#"
                className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">
                Templates
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">
                Live examples
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">
                Bundle
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">
                Blog
              </Link>
            </div>

            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <Link
                href="#"
                className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">
                Quiz
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">
                Support
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#212121] px-10 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">
          <p className="text-[13px] text-gray-500">
            © 2026 browser.supply. <span className="text-white">Framer</span>{" "}
            website templates
          </p>

          <AnimatedCreatorBadge />
        </div>
      </SectionWrapper>
    </footer>
  );
}
