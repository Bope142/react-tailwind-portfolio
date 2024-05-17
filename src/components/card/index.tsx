import React from "react";
import "./style.css";

type propsCard = {
  count: number;
  label: string;
};
function CardBox({ count, label }: propsCard) {
  return (
    <div className="card py-8  px-10 flex flex-col gap-2 font-poppins items-center bg-neutral_1 rounded-md">
      <span className="text-white font-bold text-2xl">{count}+</span>
      <p className="font-meduim text-white text-center">{label}</p>
    </div>
  );
}

type propsCardService = {
  icons: React.ReactNode;
  Title: string;
  Overview: string;
};

export const CardService = ({ icons, Title, Overview }: propsCardService) => {
  return (
    <div className="card__service px-4 py-5 bg-white rounded-sm flex flex-col gap-4 font-poppins">
      <div className="icons flex items-start justify-center flex-none self-start p-4 bg-neutral_1 rounded-sm fill-white text-white">
        {icons}
      </div>
      <p className="font-bold">{Title}</p>
      <p className="text-sm text-gray-600">{Overview}</p>
    </div>
  );
};

type propsCardProject = {
  Title: string;
  src: string;
};

export const CardProject = ({ Title, src }: propsCardProject) => {
  return (
    <div className="card__project overflow-hidden flex flex-col relative rounded-md">
      <div className="cover__project overflow-hidden flex justify-center items-center ">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="font-meduim p-5 bg-neutral_1 font-poppins text-white">
        {Title}
      </p>
    </div>
  );
};
export default CardBox;
