import AutoPlayVideo from "@/component/reusable/AutoPlayVideo";

export default function CardVideoTutorial() {
  return (
    <div className="relative flex flex-col justify-end p-10 h-full overflow-hidden group">
      <AutoPlayVideo
        src="https://framerusercontent.com/assets/giZNSxxsU70FwAyC41BzhRuSKU.mp4"
        className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

      <div className="relative z-20">
        <h3 className="text-3xl font-serif text-white mb-4">
          Step-by-step video tutorials included
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Each template comes with guided tutorials to help you from
          customization to launch.
        </p>
      </div>
    </div>
  );
}
