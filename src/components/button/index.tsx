import "./style.css";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
};
function Button({ children }: props) {
  return (
    <button className="btn font-poppins bg-neutral_1 px-5 py-3 rounded-2xl text-white">
      {children}
    </button>
  );
}

export default Button;
