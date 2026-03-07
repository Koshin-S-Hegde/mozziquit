import { Link } from 'react-router-dom';
import logo from '../resources/logo.png';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[#123329] text-white">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <img src={logo} alt="MozziQuit" className="h-12 w-auto" />
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.3em] text-[#f5d28c]">MozziQuit</p>
                <p className="text-sm text-white/70">Patented mosquito control for safer homes and communities.</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/75">
              MozziQuit Solutions LLP builds non-chemical mosquito trapping systems designed to reduce disease risk
              without compromising environmental safety.
            </p>
          </div>

          <div className="space-y-3 text-sm text-white/75">
            <h3 className="text-lg text-white">Visit</h3>
            <p>
              Hotel Prithvi Regency Building
              <br />
              Door No 1-N-2-183, Ground Floor
              <br />
              Opp. Infosys and Dakshina Kannada Panchayat Board
              <br />
              Kottara, Ashoknagar Post, Mangalore 575006
              <br />
              Karnataka, India
            </p>
          </div>

          <div className="space-y-3 text-sm text-white/75">
            <h3 className="text-lg text-white">Connect</h3>
            <a href="mailto:orwinnoronha@gmail.com" className="block transition hover:text-[#f5d28c]">
              orwinnoronha@gmail.com
            </a>
            <a href="tel:+919886675656" className="block transition hover:text-[#f5d28c]">
              +91 9886675656
            </a>
            <div className="flex flex-wrap gap-4 pt-2 text-white">
              <Link to="/" className="transition hover:text-[#f5d28c]">
                Home
              </Link>
              <Link to="/about" className="transition hover:text-[#f5d28c]">
                About
              </Link>
              <Link to="/awards" className="transition hover:text-[#f5d28c]">
                Awards
              </Link>
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="font-bold mb-3">Information</h3>
          <ul>
            <li>
              <Link to="/about" className="cursor-pointer hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/awards" className="cursor-pointer hover:underline">Awards</Link>
            </li>
            <li>
              <Link to="/product" className="cursor-pointer hover:underline">Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
