import AutoPlayVideo from "@/component/reusable/AutoPlayVideo";

export default function CardNoCode() {
  return (
    <div className="flex flex-col h-full overflow-hidden group pt-5 gap-[36px]">
      <div className="flex flex-col px-[20px] pt-0 gap-3">
        <h3 className="text-3xl font-serif text-white">
          No coding or design experience required
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Easily make edits, customize colors, and swap content so you don't
          have to start from scratch.
        </p>
      </div>

      <AutoPlayVideo
        src="https://framerusercontent.com/assets/jAEFGrxvDEsNVix8CRAWNtNslGc.mp4"
        className="mt-auto relative w-full aspect-[4/3] bg-[#111] border-t border-white/10 overflow-hidden group-hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
}
