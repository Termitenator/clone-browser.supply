import Link from "next/link";

const AnimatedLink = ({
  title,
  href,
  className = "text-lg font-medium",
}: {
  title: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`group font-sans font-medium text-white transition-colors ${className}`}>
      <div className="relative overflow-hidden h-[20px] leading-[20px]">
        <span className="block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[110%]">
          {title}
        </span>
        <span className="absolute inset-0 translate-y-[110%] transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default AnimatedLink;
