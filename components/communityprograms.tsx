export default function CommunityPrograms() {
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-red-600">Community Programs</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">Programs that uplift communities</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We run outreach, emergency relief, and empowerment programs focused on health, livelihoods, and resilience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Community Outreach</h3>
            <p className="mt-4 text-slate-600">Local outreach bringing essential services and connections to vulnerable households.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Emergency Relief</h3>
            <p className="mt-4 text-slate-600">Rapid response for disasters: food distribution, shelter support, and emergency supplies.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Health & Empowerment</h3>
            <p className="mt-4 text-slate-600">Health camps, awareness programs, and skills training to strengthen community resilience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
