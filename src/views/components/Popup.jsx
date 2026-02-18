import { useState } from "react";
import { DropletSlash, ImageOff } from "../../assets/Icons";
import { colordata, imagedata } from "../../object/Object";

const Color = ({ backcolor }) => {
  return (
    <div
      className="w-full h-full rounded-full"
      style={{ backgroundColor: `${backcolor}` }}
    ></div>
  );
};

const Image = ({ backimage }) => {
  return (
    <div
      className="w-full h-full rounded-full"
      style={{ backgroundImage: `url('${backimage}')` }}
    ></div>
  );
};

const Popup = ({
  open,
  handlebackfroundchanges,
  activecolor,
  activeimage,
}) => {
  const [fillback, setFillbck] = useState({
    fillbackcolor: null,
    fillbackimg: null,
  });

  const clickfilltobackcolor = (item) => {
    setFillbck((prev) => ({ ...prev, fillbackcolor: item.color }));
    handlebackfroundchanges("fillbackgroundcolor", item.color);
  };

  const clickfilltobackimage = (item) => {
    setFillbck((prev) => ({ ...prev, fillbackimg: item.url }));
    handlebackfroundchanges("fillbackgroundimage", item.url);
  };

  return (
    open && (
      <>
        <div className="flex flex-col items-center justify-center gap-1 absolute -bottom-20 left-10 w-110 rounded shadow-xl bg-white">
          <div className="w-full flex items-center justify-between px-4 py-2 border-b">
            <div
              className={`h-7 w-7 flex items-center justify-center rounded-full cursor-pointer ${activecolor === "" ? "border-2" : ""}`}
              onClick={() => handlebackfroundchanges("fillbackgroundcolor", "")}
            >
              <DropletSlash className={`text-gray-600`} />
            </div>
            {colordata.map((ele, idx) => (
              <div
                key={idx}
                className={`h-7 w-7 hover:border-2 rounded-full cursor-pointer ${activecolor === ele.color ? "border-2" : ""}`}
                onClick={() => clickfilltobackcolor(ele)}
              >
                <Color backcolor={ele.color} />
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-between px-4 py-2">
            <div
              className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer ${activeimage === "" ? "border-2" : ""}`}
              onClick={() => handlebackfroundchanges("fillbackgroundimage", "")}
            >
              <ImageOff className="text-gray-600" />
            </div>
            {imagedata.map((ele, idx) => (
              <div
                key={idx}
                className={`h-8 w-8 hover:border-2 rounded-full cursor-pointer" ${activeimage === ele.url ? "border-2" : ""}`}
                onClick={() => clickfilltobackimage(ele)}
              >
                <Image backimage={ele.url} />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Popup;
