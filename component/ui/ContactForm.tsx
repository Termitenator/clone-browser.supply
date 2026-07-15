export default function ContactForm() {
  return (
    <form className="w-full flex flex-col border-t border-[#212121]">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#212121] border-b border-[#212121]">
        <div className="flex flex-col p-6 md:p-8 hover:bg-white/[0.02] transition-colors group">
          <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-4 group-focus-within:text-white transition-colors">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Bruce"
            required
            className="bg-transparent text-white outline-none placeholder-gray-600 text-[15px] w-full"
          />
        </div>

        <div className="flex flex-col p-6 md:p-8 hover:bg-white/[0.02] transition-colors group">
          <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-4 group-focus-within:text-white transition-colors">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Wayne"
            required
            className="bg-transparent text-white outline-none placeholder-gray-600 text-[15px] w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#212121] border-b border-[#212121]">
        <div className="flex flex-col p-6 md:p-8 hover:bg-white/[0.02] transition-colors group">
          <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-4 group-focus-within:text-white transition-colors">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="bruce@wayneenterprise.com"
            required
            className="bg-transparent text-white outline-none placeholder-gray-600 text-[15px] w-full"
          />
        </div>

        <div className="flex flex-col p-6 md:p-8 hover:bg-white/[0.02] transition-colors group relative">
          <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-4 group-focus-within:text-white transition-colors">
            Which template are you using?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <select
              required
              className="bg-transparent text-gray-500 focus:text-white outline-none appearance-none text-[15px] w-full cursor-pointer pr-8"
              defaultValue="">
              <option value="" disabled>
                Select...
              </option>
              <option value="zenna">Zenna</option>
              <option value="social">Social</option>
              <option value="saas">SaaS</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-6 md:p-8 border-b border-[#212121] hover:bg-white/[0.02] transition-colors group">
        <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-4 group-focus-within:text-white transition-colors">
          Provide a detailed explanation of your problem/question{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Gotham needs me..."
          required
          className="bg-transparent text-white outline-none placeholder-gray-600 text-[15px] w-full resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white hover:bg-gray-200 text-black font-semibold text-[15px] py-6 text-center transition-colors focus:outline-none">
        Submit
      </button>
    </form>
  );
}
