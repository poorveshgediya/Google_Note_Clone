import { useCallback, useState } from "react";
import {
  Archive,
  ArchiveOut,
  DeleteFilled,
  PinnedFilled,
  PinnedSmall,
  Trash,
  TrashRestore,
} from "../../assets/Icons";
import { useDispatch, useSelector } from "react-redux";
import { deletenote, updatednote } from "../../redux/homeSlice";

const NoteComponent = ({ data, source }) => {
  const { notes = [] } = useSelector((state) => state.notesaver);
  const dispatch = useDispatch();

  const HandleLableChangeAction = useCallback(
    (type, value) => {
      const { id } = value;
      let index = -1;
      for (let i = 0; i < notes.length; i++) {
        if (notes?.[i]?.id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        return;
      }
      const UpdateNoteObj = {
        ...value,
      };
      if (type === "Archive") {
        UpdateNoteObj.lable = "Archive";
      }
      if (type === "UnArchive") {
        UpdateNoteObj.lable = "Notes";
      }
      if (type === "Trash") {
        UpdateNoteObj.lable = "Trash";
      }
      if (type === "ReStore") {
        UpdateNoteObj.lable = "Notes";
      }
      if (type === "Pin") {
        UpdateNoteObj.pinned = !UpdateNoteObj.pinned;
      }
      if (type === "DeleteForever") {
        return dispatch(deletenote({ index }));
      }

      dispatch(updatednote({ index, payload: UpdateNoteObj }));
      console.log("value", value);
    },
    [notes],
  );

  const handleFootericons = () => {
    if (source === "Notes") {
      return (
        <>
          <Archive onClick={() => HandleLableChangeAction("Archive", data)} />
          <Trash onClick={() => HandleLableChangeAction("Trash", data)} />
        </>
      );
    }
    if (source === "Archive") {
      return (
        <>
          <ArchiveOut
            onClick={() => HandleLableChangeAction("UnArchive", data)}
          />
          <Trash onClick={() => HandleLableChangeAction("Trash", data)} />
        </>
      );
    }
    if (source === "Trash") {
      return (
        <>
          <TrashRestore
            onClick={() => HandleLableChangeAction("ReStore", data)}
          />
          <DeleteFilled
            onClick={() => HandleLableChangeAction("DeleteForever", data)}
          />
        </>
      );
    }
  };

  return (
    <>
      <div
        className="group min-h-38 w-full p-5 relative flex flex-col gap-2 border rounded border-[#e0e0e0]  break-inside-avoid hover:shadow-xl transition-shadow cursor-pointer whitespace-pre-wrap"
        style={{
          backgroundImage: `url('${data.backgroundimg}')`,
          backgroundColor: `${data.backgroundclr}`,
        }}
      >
        {source === "Notes" && (
          <div
            onClick={() => HandleLableChangeAction("Pin", data)}
            className={`absolute top-1 right-1 opacity-0 transition-opacity duration-500  cursor-pointer
          ${data.pinned ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
          >
            {data.pinned ? <PinnedFilled /> : <PinnedSmall />}
          </div>
        )}
        <div className="">{data.title}</div>
        <div className="text-justify pb-5">{data.discription}</div>
        <div
          className="absolute flex items-center gap-4 bottom-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          {handleFootericons(source)}
        </div>
      </div>
    </>
  );
};

export default NoteComponent;
