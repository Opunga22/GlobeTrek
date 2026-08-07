import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const programs = [
  {
    badge: 'Youth',
    title: 'Youth Empowerment Program',
    duration: '12 weeks',
    seats: '30 participants per cohort',
    description:
      'A structured leadership curriculum that equips young people aged 16–25 with communication, problem-solving, and civic-engagement skills. Graduates run community projects of their own design.',
  },
  {
    badge: 'Women',
    title: 'Women in Leadership',
    duration: '8 weeks',
    seats: '25 participants per cohort',
    description:
      'Mentorship circles, business-planning workshops, and networking sessions designed to help women step into leadership roles within their families, workplaces, and communities.',
  },
  {
    badge: 'Food',
    title: 'Food Security Initiative',
    duration: 'Ongoing',
    seats: 'Open enrolment',
    description:
      'Community gardens, weekly food-bank distributions, and cooking workshops ensure that no household in our network goes to bed hungry. Surplus produce supports local markets.',
  },
  {
    badge: 'Housing',
    title: 'Housing Support',
    duration: 'Case-by-case',
    seats: 'As capacity allows',
    description:
      'Transitional housing placement, home-repair grants for vulnerable families, and tenancy-rights education to keep communities housed, stable, and safe.',
  },
  {
    badge: 'Digital',
    title: 'Digital Literacy',
    duration: '6 weeks',
    seats: '20 participants per cohort',
    description:
      'Hands-on computer training, internet safety, and introductory coding sessions that open doors to remote work, online education, and digital entrepreneurship.',
  },
  {
    badge: 'Seniors',
    title: 'Senior Care Program',
    duration: 'Ongoing',
    seats: 'Open enrolment',
    description:
      'Regular home visits, assisted transport to medical appointments, social gatherings, and a 24/7 helpline ensuring our elders live with dignity and connection.',
  },
];

const badgeColors: Record<string, string> = {
  Youth: 'bg-slate-700 text-white',
  Women: 'bg-red-600 text-white',
  Food: 'bg-slate-600 text-white',
  Housing: 'bg-red-700 text-white',
  Digital: 'bg-slate-800 text-white',
  Seniors: 'bg-red-800 text-white',
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="relative bg-slate-900 pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Get Involved
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Structured, impactful programmes built around real community needs — join one that fits your journey.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${badgeColors[p.badge]}`}>
                {p.badge}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
              
        
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}