import Link from "next/link";

interface AnimatedButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const AnimatedButton = ({
  title,
  onClick,
  className = "bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white text-lg",
  href,
}: AnimatedButtonProps) => {
  const innerContent = (
    <div className="relative overflow-hidden h-5 flex flex-col justify-start">
      <span className="flex items-center h-5 leading-none transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[110%]">
        {title}
      </span>

      <span className="absolute inset-0 flex items-center justify-center h-5 leading-none translate-y-[110%] transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
        {title}
      </span>
    </div>
  );

  const combinedClassName = `group flex items-center justify-center px-5 py-3 gap-2 rounded-lg text-sm font-semibold transition-colors ${className}`;
  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={combinedClassName}>
      {innerContent}
    </button>
  );
};

export default AnimatedButton;
