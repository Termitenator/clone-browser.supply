import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
import InfiniteScrollRow from "@/component/reusable/scroll/InfiniteScrollRow";
import AmbientBackground from "@/component/reusable/AmbientBackground";
import { TestimonialType } from "@/component/ui/TestimonialCard";
import { getCustomers } from "@/lib/queries/customer";
function splitIntoRows(
  items: TestimonialType[],
  rowCount: number,
): TestimonialType[][] {
  const rows: TestimonialType[][] = Array.from({ length: rowCount }, () => []);
  items.forEach((item, index) => {
    rows[index % rowCount].push(item);
  });
  return rows;
}

export default async function TestimonialSection() {
  const customers = await getCustomers();

  const testimonials: TestimonialType[] = customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
    avatar: customer.avatarUrl,
    quote: customer.testimonial,
    rating: customer.rating,
  }));

  const [row1Data, row2Data, row3Data] = splitIntoRows(testimonials, 3);

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

          <div className="flex-shrink-0">
            <AnimatedButton
              title="See real customer websites →"
              href="/live-example"
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
