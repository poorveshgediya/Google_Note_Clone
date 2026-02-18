import { useContext } from "react";
import Header from "../components/Header";
import Popup from "../components/Popup";
import Sidebar from "../components/Sidebar";

const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 justify-center">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
