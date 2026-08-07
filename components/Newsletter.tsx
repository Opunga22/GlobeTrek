export default function Newsletter() {
  return (
    <section className="py-12 sm:py-20 px-4 md:px-12">
      <div className="mx-auto max-w-5xl rounded-3xl sm:rounded-[2.5rem] border border-slate-200 bg-red-600 px-6 sm:px-12 py-12 sm:py-16 text-white shadow-2xl shadow-red-600/20">
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.28em] text-red-100 font-bold">Stay connected</p>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold leading-tight">Get the latest news and community updates</h2>
          <p className="mt-4 text-red-50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Subscribe for updates on relief efforts, volunteer opportunities, community events, and ways to support our programs.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center max-w-md mx-auto sm:max-w-none">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-white placeholder:text-red-100 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all"
          />
          <button className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-sm font-bold text-red-600 transition-all hover:bg-red-50 hover:scale-105 active:scale-95 shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
