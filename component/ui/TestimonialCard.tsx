import Image from "next/image";

export interface TestimonialType {
  id: string | number;
  quote: string;
  name: string;
  avatar: string;
}

export default function TestimonialCard({
  quote,
  name,
  avatar,
}: TestimonialType) {
  return (
    <div className="w-[350px] md:w-[400px] h-full flex-shrink-0 flex flex-col justify-between p-8 md:p-10 border-r border-[#212121] bg-transparent gap-8">
      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-[40px] font-sans font-medium text-[rgb(171,171,171)] leading-[1.3em] tracking-[-0.04em] text-left">
          "
        </h3>
        <h5 className="text-white font-serif text-[22px] md:text-[26px] font-bold leading-[1.4em] text-left">
          {quote}
        </h5>
        <div className="flex gap-1 text-white">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={32}
          height={32}
          className="rounded-full object-cover bg-neutral-800"
        />
        <span className="text-[rgb(171,171,171)] text-sm">{name}</span>
      </div>
    </div>
  );
}
