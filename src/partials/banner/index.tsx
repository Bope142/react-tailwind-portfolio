import "./style.css";
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import TitleSection from "../../components/titleSection";
const BannerText = () => {
  return (
    <div className=" left__section flex flex-col  gap-4 justify-center items-start font-poppins">
      <TitleSection>Welcome</TitleSection>
      <p className="font-poppins text-black font-semibold text-4xl">
        I have <span className="text-neutral_1">Creative Deign</span> Experience
      </p>
      <p className="text-gray-600 text-sm">
        I'm Norbert, a creative Frontend Developer. I've been helphing
        businesses to solve their problems with my skills.
      </p>
      <div className="content-cta flex gap-5 align-middle items-center">
        <button className="btn bg-neutral_1 px-5 py-3 rounded-2xl text-white">
          Contact Me
        </button>
        <a
          href="#"
          className="flex align-middle items-center gap-2 font-medium"
        >
          View portfolio <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

const BannerImage = () => {
  return (
    <div className="banner__cover relative flex items-center justify-center">
      <div className="cover">
        <img src="/images/profil.png" alt="" className="myprofil" />
      </div>

      <div className="follow__link absolute right-1 flex flex-col font-poppins items-center gap-5 text-neutral_1">
        <p className="vertical-align">Follow me on :</p>
        <span className="barre bg-neutral_1 w-1 h-20"></span>
        <div className="social__links flex flex-col gap-2 ">
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaSquareInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
function BannerHome() {
  return (
    <section className="banner__section px-5 py-7 md:px-20 md:grid md:grid-cols-2 flex flex-col">
      <BannerText />
      <BannerImage />
    </section>
  );
}

export default BannerHome;
