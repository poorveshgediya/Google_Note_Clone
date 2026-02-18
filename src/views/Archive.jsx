import { useSelector } from "react-redux";
import NoteComponent from "./components/NoteComponent";
import { useMemo } from "react";

const Contacts = () => {
  const { notes = [], SearchNote } = useSelector((state) => state.notesaver);

  const ArchiveNotes = useMemo(
    () => notes.filter((ele) => ele.lable === "Archive" && ele.title.toLowerCase().includes(SearchNote.toLowerCase())),
    [notes,SearchNote],
  );
  return (
    <div className="w-full columns-3xs p-10">
      {ArchiveNotes.map((ele, id) => (
          <div key={id} className="mb-5">
            <NoteComponent data={ele} source={"Archive"} />
          </div>
        ))}
    </div>
  );
};

export default Contacts;
