import { ReactNode } from "react";
import "./style.css";

type props = {
  children: ReactNode;
};
function TitleSection({ children }: props) {
  return (
    <p
      className="text-neutral_1 font-poppins rounded-xl border
      border-neutral_1 py-3 px-5 border-solid font-medium"
    >
      {children}
    </p>
  );
}

export default TitleSection;
