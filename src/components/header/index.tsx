import "./style.css";
import { FaCode } from "react-icons/fa";
const HeaderLogo = () => {
  return <FaCode className="ico-logo" />;
};

const HeaderNav = () => {
  return (
    <nav
      className="header__nav  align-middle gap-5 font-poppins hidden
    sm:visible sm:flex
    font-medium text-sm"
    >
      <a href="#">About</a>
      <a href="#">Skills</a>
      <a href="#">Portfolio</a>
      <a href="#">Testimonial</a>
    </nav>
  );
};

const HeaderRightSection = () => {
  return (
    <div className="header__right_section flex items-center">
      <button className="btn-download-cv font-poppins border-2 border-neutral_1 px-5 py-3 rounded-2xl font-medium text-sm">
        Download CV
      </button>
    </div>
  );
};
function Header() {
  return (
    <header className="header bg-white px-5 py-7 md:px-20  flex justify-between items-center">
      <HeaderLogo />
      <HeaderNav />
      <HeaderRightSection />
    </header>
  );
}

export default Header;
