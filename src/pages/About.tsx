import location from '../resources/location.jpg';
import founderOne from '../resources/partner2.png';
import founderTwo from '../resources/partner.png';

const pillars = [
  {
    title: 'What MozziQuit is',
    text: 'MozziQuit Solutions LLP is a mosquito control startup focused on patented trapping technology that avoids dependence on harmful chemicals and radiation-heavy approaches.',
  },
  {
    title: 'What drives the company',
    text: 'The company is built around disease prevention, environmental responsibility, and practical deployment in homes, hospitality settings, and community spaces.',
  },
  {
    title: 'Where it fits',
    text: 'MozziQuit products are designed for users who need continuous protection strategies that are cleaner and more sustainable than repetitive spray-based control.',
  },
];

const people = [
  { name: 'Velagaleti Janaki Venkata Ramana', image: founderOne },
  { name: 'Ignatius Orwin Noronha', image: founderTwo },
];

const About = () => {
  return (
    <div className="shell space-y-20 pb-4">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <div className="section-label">
            <span className="eyebrow-dot" />
            Company profile
          </div>
          <h1 className="section-title max-w-3xl text-5xl sm:text-6xl">A public health product company with a clearer point of view.</h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            MozziQuit exists to reduce mosquito-borne disease risk using engineered traps that are safe, practical, and
            easier to deploy in real living environments.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card rounded-[28px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Vision</p>
              <p className="mt-3 text-xl leading-8">A world where mosquito control is effective without harming people or ecosystems.</p>
            </div>
            <div className="rounded-[28px] bg-[var(--accent-soft)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7d5d18]">Mission</p>
              <p className="mt-3 text-xl leading-8 text-[#4a3a10]">Scale sustainable mosquito management through patented product design.</p>
            </div>
          </div>
        </div>

        <div className="glass-card overflow-hidden rounded-[36px] p-4">
          <img src={location} alt="MozziQuit location" className="h-[520px] w-full rounded-[28px] object-cover" />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-card rounded-[32px] p-8">
          <div className="section-label">
            <span className="eyebrow-dot" />
            Core story
          </div>
          <div className="grid gap-4">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-[var(--line)] bg-white/70 p-6">
                <h2 className="text-2xl text-[var(--brand-strong)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] bg-[#123329] p-8 text-white">
            <div className="section-label bg-white/10 text-white">
              <span className="eyebrow-dot" />
              Contact
            </div>
            <p className="text-lg leading-8 text-white/80">
              Hotel Prithvi Regency Building
              <br />
              Door No 1-N-2-183, Ground Floor
              <br />
              Opp. Infosys and Dakshina Kannada Panchayat Board
              <br />
              Kottara, Ashoknagar Post, Mangalore - 575006
              <br />
              Karnataka, India
            </p>
            <div className="mt-6 space-y-2 text-base text-white/80">
              <a href="mailto:orwinnoronha@gmail.com" className="block hover:text-[#f5d28c]">
                orwinnoronha@gmail.com
              </a>
              <a href="tel:+919886675656" className="block hover:text-[#f5d28c]">
                +91 9886675656
              </a>
            </div>
          </div>

          <div className="glass-card rounded-[32px] p-8">
            <div className="section-label">
              <span className="eyebrow-dot" />
              Team
            </div>
            <div className="grid gap-4">
              {people.map((person) => (
                <div key={person.name} className="flex items-center gap-4 rounded-[24px] bg-white/80 p-4">
                  <img src={person.image} alt={person.name} className="h-20 w-20 rounded-[20px] object-cover" />
                  <div>
                    <h3 className="text-xl text-[var(--brand-strong)]">{person.name}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">Leadership and product development</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
=======
          <div className="bg-[#ffffff] p-4 mb-0">
        <div className="flex-row justify-around ">
          <Card
            className="max-w-sm mb-4"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={partner1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            Ignatius Orwin Noronha
            </h5>
            
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={partner}
          >
            <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            Velagaleti Janaki Venkata Ramana 
            </h5>
            
          </Card>
>>>>>>> 8fb4dcd3cda702292f7ee29be682452d13cc2ca0
        </div>
      </section>
    </div>
  );
};

export default About;
