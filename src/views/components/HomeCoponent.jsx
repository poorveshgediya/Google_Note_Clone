import { useCallback, useRef, useState } from "react";
import { ColorPaletteOutline } from "../../assets/Icons";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { createnote } from "../../redux/homeSlice";

const initialstates = {
  focused: false,
  backgroundpopup: false,
  fillbackgroundcolor: "",
  fillbackgroundimage: "",
};

const HomeCoponent = () => {
  const [info, setInfo] = useState(initialstates);
  const editablediscription = useRef(null);
  const editabletitle = useRef(null);
  const dispatch = useDispatch();

  const handlereset = useCallback(() => {
    const titleText = editabletitle.current?.innerText.trim() || "";
    const descriptionText = editablediscription.current?.innerText.trim() || "";

    if (!titleText && !descriptionText) {
      setInfo(initialstates);
      return;
    }

    const payload = {
      title: editabletitle.current.innerText,
      discription: editablediscription.current.innerText,
      backgroundclr: info.fillbackgroundcolor || "",
      backgroundimg: info.fillbackgroundimage || "",
      lable: "Notes",
      pinned: false,
      id: crypto.randomUUID(),
    };
    dispatch(createnote(payload));

    editablediscription.current.innerText = "";
    editabletitle.current.innerText = "";
    setInfo(initialstates);
  }, [dispatch, info]);

  const toggalbackgroundpopup = (val) => {
    setInfo((prev) => ({
      ...prev,
      backgroundpopup: typeof val === "boolean" ? val : !prev.backgroundpopup,
    }));
  };

  const handlebackfroundchanges = (type, value) => {
    setInfo((prev) => ({ ...prev, [type]: value }));
  };

  const handleinputforcheckplaceholder = (e) => {
    if (e.target.textContent.trim() === "") {
      e.target.innerHTML = "";
    }
  };

  return (
    <div
      className="flex flex-col justify-center relative w-150 mt-8 mb-4 ml-auto mr-auto shadow-xl border rounded border-[#e0e0e0] "
      style={{ backgroundColor: info.fillbackgroundcolor }}
    >
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${info.fillbackgroundimage}')` }}
      >
        <div className="flex flex-col overflow-y-auto max-h-150 ">
          {info.focused && (
            <div
              className="text-xl p-4 pb-0 max-h-150 outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:cursor-text"
              contentEditable="true"
              spellCheck="false"
              role="textbox"
              aria-multiline="true"
              data-placeholder="Title"
              onInput={handleinputforcheckplaceholder}
              ref={editabletitle}
            ></div>
          )}
          <div
            className="px-4 py-3 outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:cursor-text whitespace-pre-wrap"
            contentEditable="true"
            spellCheck="false"
            role="textbox"
            aria-multiline="true"
            data-placeholder="Take a Note..."
            aria-autocomplete="list"
            onFocus={() => setInfo((prev) => ({ ...prev, focused: true }))}
            onInput={handleinputforcheckplaceholder}
            ref={editablediscription}
          ></div>
        </div>
      </div>
      {info.focused && (
        <div className="m-1 px-4 pb-2 cursor-pointer flex items-center justify-between">
          <div>
            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <ColorPaletteOutline onClick={toggalbackgroundpopup} />
            </div>
          </div>
          <button
            className="cursor-pointer px-4 py-2 rounded hover:bg-[#f3f3f3]"
            onClick={handlereset}
          >
            Close
          </button>
        </div>
      )}

      <Popup
        open={info.backgroundpopup}
        activecolor={info.fillbackgroundcolor}
        activeimage={info.fillbackgroundimage}
        handlebackfroundchanges={handlebackfroundchanges}
      />
    </div>
  );
};

export default HomeCoponent;
