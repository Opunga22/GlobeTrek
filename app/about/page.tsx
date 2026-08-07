import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const values = [
  { title: 'Compassion', description: 'We lead with empathy, treating every individual with dignity and respect.' },
  { title: 'Integrity', description: 'Transparent operations, honest communication, and accountable stewardship of every resource.' },
  { title: 'Community', description: 'We believe the most durable change comes from within communities, not from outside them.' },
  { title: 'Innovation', description: 'We continuously seek smarter, more efficient ways to deliver impact at scale.' },
];

const team = [
  { name: 'Wycliffe', role: 'Executive Director', bio: 'With 15 years in humanitarian work across East Africa, Amara drives GlobeTrek\'s strategic vision and partnerships.' },
  { name: 'Charity Ngunjiri', role: 'Head of Programs', bio: 'Lucia designs and oversees all community programmes, ensuring they are evidence-based and community-led.' },
  { name: 'David', role: 'Community Outreach Lead', bio: 'David builds trust on the ground, coordinating volunteers and ensuring services reach the most vulnerable.' },
  { name: 'Rozary', role: 'Finance & Operations', bio: 'Priya ensures every donation is tracked, reported transparently, and deployed where it creates maximum impact.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="relative bg-slate-900 pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Our Story
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            About GlobeTrek
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Founded in 2012, GlobeTrek Community Support has grown from a small neighbourhood initiative into a trusted organisation reaching over 50 communities.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-10 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-red-400">Mission</p>
            <h2 className="mt-3 text-2xl font-extrabold">Why we exist</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              To uplift communities by connecting people with opportunities, support systems, and resources that promote self-reliance and sustainable development.
            </p>
          </div>
          <div className="rounded-2xl bg-red-600 p-10 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-red-200">Vision</p>
            <h2 className="mt-3 text-2xl font-extrabold">Where we're headed</h2>
            <p className="mt-4 leading-relaxed text-red-100">
              A caring and empowered community where individuals support one another, grow together, and achieve their full potential — leaving no one behind.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Core Values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="h-2 w-10 rounded-full bg-red-600" />
                <h3 className="mt-4 font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-900">Meet the Team</h2>
          <p className="mt-3 text-slate-500">Dedicated professionals united by a single purpose: people.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-lg font-extrabold text-white">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{t.name}</h3>
                <p className="text-xs font-semibold text-red-600">{t.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}