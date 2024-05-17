import "./assets/css/main.css";
import Button from "./components/button";
import CardBox, { CardProject, CardService } from "./components/card";
import Header from "./components/header";
import TitleSection from "./components/titleSection";
import BannerHome from "./partials/banner";
import { MdDesignServices } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./components/footer";
const SectionOverview = () => {
  return (
    <section className="section__overview px-5 py-7 md:px-20 md:grid md:grid-cols-3 flex flex-col gap-5">
      <CardBox count={80} label="Satisfied clients" />
      <CardBox count={200} label="Projects completed" />
      <CardBox count={99} label="Reviews  given" />
    </section>
  );
};

const SectionSkills = () => {
  return (
    <section className="section__project flex flex-col md:flex md:flex-row gap-4">
      <main className="section__left flex flex-col  gap-4 items-start">
        <TitleSection>My Skills</TitleSection>
        <p className="font-poppins text-black font-semibold text-3xl">
          Why Hire Me For Your Next
          <span className="text-neutral_1"> Project ?</span>
        </p>
        <p className="font-poppins text-sm text-gray-600">
          I'm specialist in Web Developpement. My passion is designing & solving
          problems trough user experience and research
        </p>
        <Button>Hire Me</Button>
      </main>
      <main className="section__right flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5">
        <CardService
          icons={<MdDesignServices />}
          Title="UI/UX Design"
          Overview="Creation of user-friendly and visually appealing interfaces for an enhanced user experience."
        />
        <CardService
          icons={<MdWeb />}
          Title="Design and Development"
          Overview="Custom web and mobile app solutions tailored to user needs."
        />
        <CardService
          icons={<FaTools />}
          Title="Maintenance and Support"
          Overview="Ongoing software updates and maintenance to ensure optimal performance and client satisfaction."
        />
        <CardService
          icons={<BiSupport />}
          Title="Consulting"
          Overview="Expert technical guidance and advice for software development and implementation."
        />
      </main>
    </section>
  );
};

const SectionProject = () => {
  return (
    <section className="section__project flex flex-col md:flex md:flex-row gap-4">
      <main className="section__left flex flex-col  gap-4 items-start lg:flex-none">
        <TitleSection>Portfolio</TitleSection>
        <p className="font-poppins text-black font-semibold text-3xl">
          My Creative Works Latest
          <span className="text-neutral_1"> Project </span>
        </p>
        <p className="font-poppins text-sm text-gray-600">
          I have selected and mentioned here some of my latest projects to share
          with you
        </p>
        <Button>Show More</Button>
      </main>
      <main className="section__right flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5 overflow-hidden">
        <CardProject Title="UI/UX Design" src="/images/projects/project1.jpg" />
        <CardProject Title="UI/UX Design" src="/images/projects/project2.jpg" />
        <CardProject Title="UI/UX Design" src="/images/projects/project3.jpg" />
        <CardProject Title="UI/UX Design" src="/images/projects/project1.jpg" />
      </main>
    </section>
  );
};

const SectionContacts = () => {
  return (
    <section className="section__contacts flex flex-col gap-5">
      <div className="content__title flex items-center flex-col gap-3">
        <TitleSection>Contact</TitleSection>
        <p className="font-poppins text-black font-semibold text-3xl text-center">
          Let's Discuss Your
          <span className="text-neutral_1"> Project </span>
        </p>
        <p className="font-poppins text-sm text-gray-600 text-center">
          Let's make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <main className="container__form grid gap-4 grid-cols-1 md:flex">
        <div className="form__detail flex flex-col gap-3 md:pr-50 pr-60">
          <div className="box-item flex gap-4 items-start">
            <div className="item-icons bg-neutral_1 text-white flex items-center justify-center p-4 rounded-lg">
              <FaPhoneAlt />
            </div>
            <div className="item-detail font-poppins flex flex-col gap-2">
              <p className="text-gray-500 text-sm">Call me</p>
              <p className="text-black font-semibold text-sm">+855555555555</p>
            </div>
          </div>
          <div className="box-item flex gap-4 items-start">
            <div className="item-icons bg-neutral_1 text-white flex items-center justify-center p-4 rounded-lg">
              <MdEmail />
            </div>
            <div className="item-detail font-poppins flex flex-col gap-2">
              <p className="text-gray-500 text-sm">Email me</p>
              <p className="text-black font-semibold text-sm">
                norbert@gmail.com
              </p>
            </div>
          </div>
          <div className="box-item flex gap-4 items-start">
            <div className="item-icons bg-neutral_1 text-white flex items-center justify-center p-4 rounded-lg">
              <FaLocationDot />
            </div>
            <div className="item-detail font-poppins flex flex-col gap-2">
              <p className="text-gray-500 text-sm">Adress</p>
              <p className="text-black font-semibold text-sm">Kinshasa,DRC</p>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col gap-3 w-full">
          <div className="container grid grid-cols-1 md:flex md:flex-wrap gap-3 md:overflow-hidden">
            <input
              type="text"
              placeholder="Full name"
              className="font-poppins px-3 py-4 border-gray-200 border transition-all ease-linear rounded-lg flex-grow focus:border-neutral_1"
            />
            <input
              type="email"
              placeholder="Your email"
              className="font-poppins px-3 py-4 border-gray-200 border transition-all ease-linear rounded-lg flex-grow focus:border-neutral_1"
            />
            <input
              type="number"
              placeholder="Your Budget"
              className="font-poppins px-3 py-4 border-gray-200 border transition-all ease-linear rounded-lg flex-grow focus:border-neutral_1"
            />
          </div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className="font-poppins px-3 py-4 border-gray-200 border transition-all ease-linear rounded-lg flex-grow focus:border-neutral_1"
          ></textarea>
          <button className="btn font-poppins bg-neutral_1 px-5 py-3 rounded-2xl text-white self-end">
            Submit Message
          </button>
        </form>
      </main>
    </section>
  );
};
export default function App() {
  return (
    <div className="container-main">
      <Header />
      <BannerHome />
      <SectionOverview />
      <SectionSkills />
      <SectionProject />
      <SectionContacts />
      <Footer />
    </div>
  );
}
