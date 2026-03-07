import award1 from '../resources/award1.jpg';
import award2 from '../resources/award2.jpg';
import award3 from '../resources/award3.jpg';
import award4 from '../resources/award4.jpg';
import award5 from '../resources/award5.jpg';
import award6 from '../resources/award6.jpg';
import award7 from '../resources/award7.jpg';
import cert1 from '../resources/cert1.jpg';
import cert2 from '../resources/cert2.jpg';
import cert3 from '../resources/cert3.jpg';

const recognitions = [
  {
    title: 'National Agripreneurs Award 2017',
    image: cert1,
    text: 'Recognized for innovation in agriculture-linked problem solving and sustainable technology application, reinforcing MozziQuit’s ability to turn R&D into practical impact.',
  },
  {
    title: 'DST-Lockheed Martin India Innovation Competition Gold Medal 2010',
    image: cert2,
    text: 'An early milestone that highlighted the company’s mosquito control technology as a strong innovation candidate with international visibility and public-health relevance.',
  },
  {
    title: 'Best Electronic Product of the Year, ISA 2010',
    image: cert3,
    text: 'This recognition positioned MozziQuit as a product company capable of translating electronics and engineering into meaningful health-focused outcomes.',
  },
];

const gallery = [award1, award2, award3, award4, award5, award6, award7];

const Awards = () => {
  return (
    <div className="shell space-y-16 pb-6">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="space-y-6">
          <div className="section-label">
            <span className="eyebrow-dot" />
            Recognition
          </div>
          <h1 className="section-title max-w-3xl text-5xl sm:text-6xl">Awards that validate the innovation behind the product.</h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            MozziQuit’s credibility is not hypothetical. The company has been recognized across innovation, electronics,
            and entrepreneurship contexts over multiple years.
          </p>
        </div>
        <div className="rounded-[32px] bg-[#123329] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5d28c]">Snapshot</p>
          <p className="mt-4 text-3xl leading-10">From early technical validation to later entrepreneurial recognition, the work has a consistent record.</p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {gallery.map((image, index) => (
          <div
            key={image}
            className={`glass-card overflow-hidden rounded-[28px] p-3 ${index === 0 ? 'sm:col-span-2 xl:col-span-2 xl:row-span-2' : ''}`}
          >
            <img
              src={image}
              alt={`MozziQuit award ${index + 1}`}
              className={`w-full rounded-[22px] object-cover ${index === 0 ? 'h-full min-h-[420px]' : 'h-[240px]'}`}
            />
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="section-label">
          <span className="eyebrow-dot" />
          Highlights
        </div>
        <div className="grid gap-6">
          {recognitions.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-6 overflow-hidden rounded-[32px] bg-white/80 p-5 shadow-[var(--shadow)] lg:grid-cols-[0.42fr_0.58fr] lg:p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full rounded-[26px] object-cover ${index === 1 ? 'h-[320px]' : 'h-[320px]'}`}
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Recognition {index + 1}</p>
                <h2 className="mt-3 text-3xl text-[var(--brand-strong)]">{item.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Awards;
