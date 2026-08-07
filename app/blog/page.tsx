import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const posts = [
  {
    category: 'Impact Story',
    date: 'July 28, 2026',
    title: 'How One Village Transformed Its Food Security in 90 Days',
    excerpt:
      'When flooding destroyed the Mwea harvest, GlobeTrek mobilised volunteers, supplies, and a new community-garden model that now feeds 340 families year-round.',
    readTime: '5 min read',
  },
  {
    category: 'Community',
    date: 'July 14, 2026',
    title: 'Youth Leaders Graduate from Our 12-Week Empowerment Cohort',
    excerpt:
      'Thirty young people from five neighbourhoods completed our flagship programme — here are their stories, projects, and plans for the future.',
    readTime: '4 min read',
  },
  {
    category: 'Health',
    date: 'June 30, 2026',
    title: 'Free Medical Camp Reaches 1,200 Residents in Kisumu',
    excerpt:
      'In partnership with county health officers and volunteer doctors, our two-day camp provided screenings, vaccinations, and referrals to underserved households.',
    readTime: '3 min read',
  },
  {
    category: 'Women',
    date: 'June 12, 2026',
    title: "Women in Leadership: Meet This Cycle's Graduates",
    excerpt:
      'Seventeen women completed our eight-week mentorship programme. Three have already launched businesses; two are standing for local council seats.',
    readTime: '6 min read',
  },
  {
    category: 'Digital',
    date: 'May 25, 2026',
    title: 'Digital Literacy Opens New Doors for Rural Entrepreneurs',
    excerpt:
      'Participants from our latest digital-skills cohort share how online tools have expanded their customer base and income — sometimes tripling earnings.',
    readTime: '4 min read',
  },
  {
    category: 'Announcement',
    date: 'May 10, 2026',
    title: 'GlobeTrek Launches Senior Care Helpline — 24/7 Support Now Available',
    excerpt:
      'Our new round-the-clock helpline gives elderly community members and their families direct access to care coordinators, emergency contacts, and friendly conversation.',
    readTime: '2 min read',
  },
];

const categoryColor: Record<string, string> = {
  'Impact Story': 'bg-red-600 text-white',
  Community: 'bg-slate-700 text-white',
  Health: 'bg-slate-600 text-white',
  Women: 'bg-red-700 text-white',
  Digital: 'bg-slate-800 text-white',
  Announcement: 'bg-red-800 text-white',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="relative bg-slate-900 pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Latest News
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Blog & Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Real stories of impact, programme updates, and insights from the communities we serve.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-2 w-full bg-red-600" />
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${categoryColor[p.category]}`}>
                    {p.category}
                  </span>
                  <span className="text-xs text-slate-400">{p.date}</span>
                </div>
                <h2 className="mt-4 text-base font-bold leading-snug text-slate-900 group-hover:text-red-600 transition-colors duration-200">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-400">{p.readTime}</span>
                  <a
                    href="#"
                    className="text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}