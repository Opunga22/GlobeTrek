import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PAYPAL_EMAIL = process.env.NEXT_PUBLIC_PAYPAL_EMAIL!;
const PAYPAL_ITEM_NAME = process.env.NEXT_PUBLIC_PAYPAL_ITEM_NAME!;
const PAYPAL_DONATE_URL = `https://www.paypal.com/donate?business=${encodeURIComponent(PAYPAL_EMAIL)}&item_name=${encodeURIComponent(PAYPAL_ITEM_NAME)}&currency_code=USD&no_recurring=0`;

const impacts = [
  { amount: '$10', description: 'Feeds a family of four for a week through our Food Security Initiative.' },
  { amount: '$25', description: 'Provides school supplies for one child for an entire term.' },
  { amount: '$50', description: 'Funds one health screening session at a community medical camp.' },
  { amount: '$100', description: 'Sponsors a youth through two weeks of our Empowerment Programme.' },
  { amount: '$250', description: 'Covers emergency housing support for one vulnerable household.' },
  { amount: '$500', description: 'Funds a full Digital Literacy cohort seat including device access.' },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page header */}
      <div className="relative bg-slate-900 pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Make a Difference
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Donate
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Every contribution — no matter how small — directly funds relief, education, and empowerment programmes that transform lives.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left — impact amounts */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Your impact</h2>
            <p className="mt-2 text-slate-500">Here is what different donation amounts achieve on the ground.</p>
            <div className="mt-8 space-y-4">
              {impacts.map((item) => (
                <div
                  key={item.amount}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-red-600 text-base font-extrabold text-white">
                    {item.amount}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — PayPal donate card */}
          <div className="flex flex-col">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-10 shadow-lg">
              <h2 className="text-2xl font-extrabold text-slate-900">Donate securely</h2>
              <p className="mt-2 text-sm text-slate-500">
                Payments are processed through PayPal — you don't need a PayPal account to donate by card.
              </p>

              {/* Recipient info */}
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Recipient</p>
                <p className="mt-1 font-semibold text-slate-800">GlobeTrek Community Support</p>
                <p className="text-xs text-slate-500">{PAYPAL_EMAIL}</p>
              </div>

              {/* PayPal donate button */}
              <a
                href={PAYPAL_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#0070ba] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005ea6] active:translate-y-0"
              >
                {/* PayPal logo SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 124.1 33.5"
                  className="h-5 w-auto fill-white"
                  aria-hidden="true"
                >
                  <path d="M46.4 4.2h-8.6c-.6 0-1.1.4-1.2 1l-3.5 22.1c-.1.4.2.8.7.8h4.1c.6 0 1.1-.4 1.2-1l.9-5.9c.1-.6.6-1 1.2-1h2.7c5.6 0 8.8-2.7 9.7-8.1.4-2.3 0-4.2-1-5.5-1.3-1.5-3.4-2.4-6.2-2.4zm1 8c-.5 3-2.7 3-4.9 3h-1.3l.9-5.6c0-.4.4-.6.7-.6h.6c1.5 0 2.9 0 3.6.8.5.6.6 1.4.4 3.4zM69.3 12h-4.1c-.4 0-.7.3-.7.6l-.2 1.1-.3-.4c-.8-1.2-2.7-1.6-4.5-1.6-4.2 0-7.8 3.2-8.5 7.6-.4 2.2.2 4.3 1.4 5.8 1.2 1.3 2.9 1.9 4.9 1.9 3.4 0 5.3-2.2 5.3-2.2l-.2 1.1c-.1.4.2.8.7.8h3.7c.6 0 1.1-.4 1.2-1l2.2-13.9c0-.5-.4-.8-.9-.8zm-5.7 7.4c-.4 2.1-2 3.5-4.2 3.5-1.1 0-1.9-.3-2.5-1-.6-.7-.8-1.6-.6-2.7.3-2.1 2.1-3.5 4.1-3.5 1 0 1.9.4 2.5 1 .6.7.9 1.7.7 2.7zM90.1 12h-4.1c-.4 0-.9.2-1.1.6l-6.4 9.4-2.7-9c-.2-.6-.7-1-1.3-1h-4c-.5 0-.8.4-.7.9l5.1 15-4.8 6.8c-.3.5 0 1.1.6 1.1h4.1c.4 0 .9-.2 1.1-.6l15.4-22.2c.2-.5-.1-1-.2-1z" />
                  <path d="M103.5 4.2h-8.6c-.6 0-1.1.4-1.2 1l-3.5 22.1c-.1.4.2.8.7.8h4.4c.4 0 .8-.3.8-.7l1-6.2c.1-.6.6-1 1.2-1h2.7c5.6 0 8.8-2.7 9.7-8.1.4-2.3 0-4.2-1-5.5-1.3-1.5-3.4-2.4-6.2-2.4zm1 8c-.5 3-2.7 3-4.9 3h-1.2l.9-5.6c0-.4.4-.6.7-.6h.6c1.5 0 2.9 0 3.6.8.4.6.5 1.4.3 3.4zM126.4 12h-4.1c-.4 0-.7.3-.7.6l-.2 1.1-.3-.4c-.8-1.2-2.7-1.6-4.5-1.6-4.2 0-7.8 3.2-8.5 7.6-.4 2.2.2 4.3 1.4 5.8 1.2 1.3 2.9 1.9 4.9 1.9 3.4 0 5.3-2.2 5.3-2.2l-.2 1.1c-.1.4.2.8.7.8h3.7c.6 0 1.1-.4 1.2-1l2.2-13.9c0-.5-.4-.8-.9-.8zm-5.7 7.4c-.4 2.1-2 3.5-4.2 3.5-1.1 0-1.9-.3-2.5-1-.6-.7-.8-1.6-.6-2.7.3-2.1 2.1-3.5 4.1-3.5 1 0 1.9.4 2.5 1 .7.7.9 1.7.7 2.7z" />
                  <path d="M9.6 4.2H1c-.6 0-1.1.4-1.2 1L-.7 27.3c-.1.4.2.8.7.8h4.1c.6 0 1.1-.4 1.2-1l.9-5.9c.1-.6.6-1 1.2-1h2.7c5.6 0 8.8-2.7 9.7-8.1.4-2.3 0-4.2-1-5.5C17.5 5.1 15.4 4.2 12.6 4.2h-3zm1 8c-.5 3-2.7 3-4.9 3H4.5l.9-5.6c0-.4.4-.6.7-.6h.6c1.5 0 2.9 0 3.6.8.4.6.5 1.4.3 3.4zM32.4 12h-4.1c-.4 0-.7.3-.7.6l-.2 1.1-.3-.4c-.8-1.2-2.7-1.6-4.5-1.6-4.2 0-7.8 3.2-8.5 7.6-.4 2.2.2 4.3 1.4 5.8 1.2 1.3 2.9 1.9 4.9 1.9 3.4 0 5.3-2.2 5.3-2.2l-.2 1.1c-.1.4.2.8.7.8h3.7c.6 0 1.1-.4 1.2-1l2.2-13.9c0-.5-.4-.8-.9-.8zm-5.6 7.4c-.4 2.1-2 3.5-4.2 3.5-1.1 0-1.9-.3-2.5-1-.6-.7-.8-1.6-.6-2.7.3-2.1 2.1-3.5 4.1-3.5 1 0 1.9.4 2.5 1 .6.7.8 1.7.7 2.7z" />
                </svg>
                Donate with PayPal
              </a>

              {/* Card note */}
              <p className="mt-4 text-center text-xs text-slate-400">
                You can also pay by debit or credit card via PayPal — no account required.
              </p>

              <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                <p className="text-xs text-slate-400">
                  Prefer to donate another way?{' '}
                  <a href="/contact" className="font-semibold text-red-600 hover:text-red-700">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
