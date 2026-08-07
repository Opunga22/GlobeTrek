export default function Statistics() {
  return (
    <section className="bg-white py-12 sm:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <p className="text-3xl sm:text-5xl font-black text-red-600">25k+</p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-slate-700 uppercase tracking-wider">People supported</p>
        </div>
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <p className="text-3xl sm:text-5xl font-black text-red-600">480+</p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-slate-700 uppercase tracking-wider">Community projects</p>
        </div>
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <p className="text-3xl sm:text-5xl font-black text-red-600">3.5k+</p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-slate-700 uppercase tracking-wider">Volunteers engaged</p>
        </div>
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <p className="text-3xl sm:text-5xl font-black text-red-600">1.1k+</p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-slate-700 uppercase tracking-wider">Emergency responses</p>
        </div>
      </div>
    </section>
  );
}
