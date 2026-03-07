import { Link } from 'react-router-dom';
import banner from '../resources/banner.png';
import product from '../resources/product.png';
import traction from '../resources/traction.jpg';
import productAlt from '../resources/product2.png';

const metrics = [
  { value: '0', label: 'chemical sprays required' },
  { value: '24/7', label: 'passive trapping coverage' },
  { value: '2010+', label: 'recognized innovation track record' },
];

<<<<<<< HEAD
const problems = [
  'Mosquito-borne disease still drives major health and economic loss.',
  'Common repellents rely on repeat purchase cycles and chemical exposure.',
  'Many solutions protect the moment, but not the breeding cycle.',
];

const differentiators = [
  {
    title: 'Patented trap architecture',
    text: 'Built to attract and eliminate mosquitoes before breeding continues indoors or around property edges.',
  },
  {
    title: 'Designed for daily life',
    text: 'Quiet, low-maintenance systems intended for homes, hospitality spaces, clinics, and community environments.',
  },
  {
    title: 'Environmental responsibility',
    text: 'No UV-heavy lure strategy, no aerosol dependency, and a cleaner operating profile for shared spaces.',
  },
];

const applications = [
  'Homes and apartments',
  'Hotels and serviced stays',
  'Schools and campuses',
  'Clinics and public spaces',
];

const Home = () => {
  return (
    <div className="pb-8">
      <section className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="space-y-8">
            <div className="section-label">
              <span className="eyebrow-dot" />
              Modern mosquito control
            </div>
            <div className="space-y-5">
              <h1 className="section-title max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
                A cleaner defense against the mosquito menace.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                MozziQuit builds patented mosquito trapping systems that focus on disease prevention, environmental
                safety, and real-world usability for modern homes and institutions.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/about"
                className="rounded-full bg-[var(--brand-strong)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                Explore the company
              </Link>
              <Link
                to="/awards"
                className="rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[var(--text)] transition hover:bg-white"
              >
                View recognitions
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass-card rounded-[26px] p-5">
                  <p className="text-3xl font-bold text-[var(--brand-strong)]">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[var(--accent)]/35 blur-3xl" />
            <div className="absolute -left-4 bottom-10 h-40 w-40 rounded-full bg-[var(--brand)]/20 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[36px] p-3">
              <img src={banner} alt="MozziQuit hero" className="h-[520px] w-full rounded-[28px] object-cover" />
              <div className="absolute inset-x-7 bottom-7 rounded-[28px] bg-[#10261e]/84 p-5 text-white backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5d28c]">Why it matters</p>
                <p className="mt-3 text-lg leading-7">
                  Reduce dependence on reactive mosquito sprays with a product strategy centered on prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] bg-[#123329] p-8 text-white shadow-[var(--shadow)]">
          <div className="section-label bg-white/10 text-white">
            <span className="eyebrow-dot" />
            The challenge
          </div>
          <h2 className="section-title max-w-xl text-white">Conventional mosquito protection still leaves critical gaps.</h2>
          <div className="mt-8 grid gap-4">
            {problems.map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[32px] p-8">
          <div className="section-label">
            <span className="eyebrow-dot" />
            What MozziQuit does
          </div>
          <h2 className="section-title max-w-2xl">A more thoughtful product system for homes, campuses, and hospitality spaces.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-[26px] bg-white/70 p-5">
                <h3 className="text-xl text-[var(--brand-strong)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell mt-20 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="glass-card rounded-[32px] p-4 sm:p-5">
          <img src={traction} alt="MozziQuit traction" className="h-full min-h-[360px] w-full rounded-[28px] object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="glass-card rounded-[32px] p-8">
            <div className="section-label">
              <span className="eyebrow-dot" />
              Application fit
            </div>
            <h2 className="section-title">Built to look at home in modern spaces, not just industrial contexts.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {applications.map((item) => (
                <div key={item} className="rounded-[22px] border border-[var(--line)] bg-white/80 px-4 py-4 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] bg-[var(--accent-soft)] p-8 text-[#4a3a10]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">Mission</p>
              <p className="mt-4 text-2xl leading-9">Make mosquito control safer, quieter, and more sustainable.</p>
            </div>
            <div className="glass-card rounded-[32px] p-4">
              <img src={product} alt="MozziQuit product" className="h-full min-h-[220px] w-full rounded-[24px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="grid gap-6 overflow-hidden rounded-[36px] bg-[#fffdf7] p-8 shadow-[var(--shadow)] lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div className="space-y-5">
            <div className="section-label">
              <span className="eyebrow-dot" />
              Product story
            </div>
            <h2 className="section-title">Recognition-backed innovation with a sharper digital presence.</h2>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
              MozziQuit already has the credentials. This refresh brings the brand presentation closer to the quality of
              the underlying work by using clearer messaging, stronger hierarchy, and a more current visual language.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:orwinnoronha@gmail.com"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Start a conversation
              </a>
              <Link
                to="/awards"
                className="rounded-full border border-[var(--line)] px-6 py-3 text-center text-sm font-semibold text-[var(--text)]"
              >
                See awards and certificates
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--brand)]/10 blur-3xl lg:block" />
            <img src={productAlt} alt="MozziQuit showcase" className="h-full min-h-[340px] w-full rounded-[30px] object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};
=======
class Home extends React.Component {
  render = () => {
   return (
      <>
        <div className="h-fit mt-0 mb-0">
          <div className="h-fit sm:h-[50em]">
              <img src={banner} alt="Award 1" className="block w-full h-full  object-cover" />
          </div>
        </div>
        <div className="text-center text-4xl my-5 font-bold underline hover:text-[#511]">
          Our product
        </div>
        <div className="flex justify-evenly">
          <img className="w-1/6" src="/product-left.png" />
          <img className="w-1/6" src="/product-center.jpg" />
          <img className="w-1/6" src="/product-right.png" />
        </div>
        <InspiringChange />	
        <Impacts />
        <Solutions />
      </>
   );
  };
}

>>>>>>> 8fb4dcd3cda702292f7ee29be682452d13cc2ca0

export default Home;
