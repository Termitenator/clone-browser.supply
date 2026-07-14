import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
import InfiniteScrollRow from "@/component/reusable/scroll/InfiniteScrollRow";
import AmbientBackground from "@/component/reusable/AmbientBackground";

// --- Mock Data ---
const row1Data = [
  {
    id: 1,
    name: "Nic",
    avatar: "https://i.pravatar.cc/150?u=nic",
    quote:
      "This Framer template is excellent at elevating your online presence!",
  },
  {
    id: 2,
    name: "Widya",
    avatar: "https://i.pravatar.cc/150?u=wid",
    quote:
      "Beautiful design and is easy to set up! The tutorial helped me a lot.",
  },
  {
    id: 3,
    name: "Dávid",
    avatar: "https://i.pravatar.cc/150?u=dav",
    quote: "Super easy to use and customise and also beautifully designed.",
  },
  {
    id: 4,
    name: "Renan",
    avatar: "https://i.pravatar.cc/150?u=ren",
    quote: "Very nice templates, easy going to setup and navigate.",
  },
];

const row2Data = [
  {
    id: 5,
    name: "John",
    avatar: "https://i.pravatar.cc/150?u=joh",
    quote: "The templates is so well designed and has a unique look to them.",
  },
  {
    id: 6,
    name: "Sarah",
    avatar: "https://i.pravatar.cc/150?u=sar",
    quote:
      "The design is clean, easy to customize, professional, and versatile.",
  },
  {
    id: 7,
    name: "Mike",
    avatar: "https://i.pravatar.cc/150?u=mik",
    quote:
      "The template is excellent. It is super easy to work and very beautiful.",
  },
  {
    id: 8,
    name: "Anna",
    avatar: "https://i.pravatar.cc/150?u=ann",
    quote: "Intentional and distinct design makes them fun to look at.",
  },
];

const row3Data = [
  {
    id: 9,
    name: "Paul",
    avatar: "https://i.pravatar.cc/150?u=pau",
    quote: "An absolute game changer for my personal portfolio.",
  },
  {
    id: 10,
    name: "Emma",
    avatar: "https://i.pravatar.cc/150?u=emm",
    quote: "I love the micro-interactions and the dark mode aesthetic.",
  },
  {
    id: 11,
    name: "Liam",
    avatar: "https://i.pravatar.cc/150?u=lia",
    quote: "Saved me hundreds of hours of design and development time.",
  },
  {
    id: 12,
    name: "Chloe",
    avatar: "https://i.pravatar.cc/150?u=chl",
    quote: "The best purchase I've made this year for my business.",
  },
];
// -----------------

export default function TestimonialSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <AmbientBackground
        flip={false}
        fadeDirection="top"
        heightClass="h-[150%]"
        positionClassName="-top-[25%] left-0"
        objectPosition="object-[50%_100%]"
        scaleClass="scale-[1]"
        rotationClass="-rotate-180"
      />
      <SectionWrapper className="relative z-10 w-full border-x border-[#212121]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end p-10 md:p-12 border-b border-[#212121] gap-8">
          {/* Judul & Deskripsi (Kiri) */}
          <div className="max-w-xl">
            <SectionHeader
              as="h2"
              align="left"
              titleClassName="text-4xl md:text-[3.5rem] font-serif"
              title={"Trusted by 2k+ *customers*\n*around* the globe"}
              description="Speed, simplicity, and results. That's what customers achieve with my Framer website templates."
              className="!gap-4 mb-0"
            />
          </div>

          {/* CTA Button (Kanan) */}
          <div className="flex-shrink-0">
            <AnimatedButton
              title="See real customer websites →"
              className="bg-white hover:bg-gray-200 text-black px-6 py-4 rounded-xl text-sm md:text-base font-semibold transition-colors"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative z-10 w-full border-x border-[#212121]">
        <InfiniteScrollRow items={row1Data} direction="left" speed={45} />
        <InfiniteScrollRow items={row2Data} direction="right" speed={50} />
        <InfiniteScrollRow items={row3Data} direction="left" speed={40} />
      </SectionWrapper>
    </section>
  );
}
