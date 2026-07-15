import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AmbientBackground from "@/component/reusable/AmbientBackground";
import LiveExampleCard from "@/component/ui/LiveExampleCard";
import { getCustomers } from "@/lib/queries/customer";

export const revalidate = 60;

export default async function LiveExamplesPage() {
  const customers = await getCustomers();
  const liveExamples = customers.filter((c) => !!c.liveSiteVideoUrl);

  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <section className="relative w-full flex flex-col">
        <AmbientBackground
          flip={false}
          fadeDirection="bottom"
          heightClass="h-[120vh]"
          positionClassName="top-0 left-0"
          scaleClass="scale-[1.5]"
        />

        <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
          <div className="flex flex-col items-center pt-[180px] pb-[80px] px-[40px] text-center gap-[32px]">
            <Badge
              text="LIVE EXAMPLES"
              className="bg-[#1a1a1a] border border-white/5 text-gray-300"
            />

            <SectionHeader
              as="h1"
              align="center"
              titleClassName="text-5xl md:text-[5.5rem] font-serif leading-[1.1] text-white tracking-tight"
              title={"Real sites built\nfrom a template"}
              description={
                "A showcase of real customer websites, live right\nnow, built using my Framer website templates."
              }
              className="max-w-3xl mx-auto mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#212121] border-t border-[#212121]">
            {liveExamples.length === 0 ? (
              <div className="col-span-full text-center py-20 text-gray-400">
                No live examples yet.
              </div>
            ) : (
              liveExamples.map((customer) => (
                <LiveExampleCard
                  key={customer.id}
                  videoSrc={customer.liveSiteVideoUrl!}
                  link={`/templates/${customer.templateUsed.templateId}`}
                  avatar={customer.avatarUrl}
                  name={customer.name}
                  templateName={customer.templateUsed.templateName}
                  templateThumb={customer.templateUsed.thumbnailUrl}
                />
              ))
            )}
          </div>
        </SectionWrapper>

        <div className="w-full border-b border-[#212121] relative z-10" />
      </section>
    </main>
  );
}
