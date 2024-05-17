import "./style.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer mt-auto bg-gray-100 px-5 py-5 md:px-20  flex items-center justify-between font-poppins flex-wrap gap-4 text-sm">
      <p>@2023. All Rights Reserved</p>
      <p>Designed by Norbert Yemuang</p>
      <div className="social__links flex flex-row gap-2 ">
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
    </footer>
  );
}

export default Footer;
