export default function Partners() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-red-600">Partner network</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-950">Organizations working with our community</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {['CommunityCare', 'Hope Foundation', 'Aid Network', 'Health Outreach', 'ShelterNow', 'Local Volunteers'].map((name) => (
            <div key={name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
