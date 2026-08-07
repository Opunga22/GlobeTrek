export default function CommunityPrograms() {
  return (
    <section className="py-12 sm:py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.28em] text-red-600 font-bold">Community Programs</p>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-950 leading-tight">Programs that uplift communities</h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We run outreach, emergency relief, and empowerment programs focused on health, livelihoods, and resilience.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">Community Outreach</h3>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Local outreach bringing essential services and connections to vulnerable households.</p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">Emergency Relief</h3>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Rapid response for disasters: food distribution, shelter support, and emergency supplies.</p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md sm:col-span-2 lg:col-span-1 max-w-md mx-auto sm:max-w-none">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">Health & Empowerment</h3>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Health camps, awareness programs, and skills training to strengthen community resilience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
