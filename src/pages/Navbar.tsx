import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../resources/logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/awards', label: 'Awards' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-4">
        <nav className="glass-card rounded-[28px] px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div className="rounded-2xl bg-white/85 p-2 shadow-sm">
                <img src={logo} alt="MozziQuit" className="h-10 w-auto sm:h-12" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                  MozziQuit
                </p>
                <p className="text-sm text-[var(--muted)]">Mosquito control, redesigned for modern spaces</p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      'rounded-full px-4 py-2 text-sm font-semibold transition',
                      isActive
                        ? 'bg-[var(--brand-strong)] text-white'
                        : 'text-[var(--text)] hover:bg-white/70',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="mailto:orwinnoronha@gmail.com"
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[#3b2b09] transition hover:translate-y-[-1px]"
              >
                Contact
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-strong)] text-white md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M10 17h10" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="mt-4 grid gap-2 border-t border-[var(--line)] pt-4 md:hidden">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl px-4 py-3 text-sm font-semibold transition',
                      isActive
                        ? 'bg-[var(--brand-strong)] text-white'
                        : 'bg-white/60 text-[var(--text)]',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="mailto:orwinnoronha@gmail.com"
                className="rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[#3b2b09]"
              >
                Contact the team
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
