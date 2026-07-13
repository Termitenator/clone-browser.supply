import SectionWrapper from "@/component/reusable/SectionWrapper";
import Scroll3DTilt from "@/component/reusable/scroll/Scroll3DTilt";
import AutoPlayVideo from "@/component/reusable/AutoPlayVideo";

export default function ProductShowcase() {
  return (
    <>
      <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121] bg-transparent p-10">
        <Scroll3DTilt>
          <AutoPlayVideo
            src="https://framerusercontent.com/assets/UOBfe4Boy73eQInj7CPl91CALSQ.mp4"
            className="w-full"
            videoClassName="w-full h-auto object-cover"
          />
        </Scroll3DTilt>
      </SectionWrapper>
      <div className="w-full border-b border-[#212121] relative z-10" />
    </>
  );
}
