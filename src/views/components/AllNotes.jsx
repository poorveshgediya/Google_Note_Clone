import { useSelector } from "react-redux";
import NoteComponent from "./NoteComponent";
import { useMemo } from "react";

const AllNotes = () => {
  const { notes = [], SearchNote } = useSelector((state) => state.notesaver);
  console.log(SearchNote)

  const pinnedlist = useMemo(
    () => notes.filter((ele) => ele.lable === "Notes" && ele.pinned && ele.title.toLowerCase().includes(SearchNote.toLowerCase())),
    [notes, SearchNote],
  );
  const otherlist = useMemo(
    () => notes.filter((ele) => ele.lable === "Notes" && !ele.pinned && ele.title.toLowerCase().includes(SearchNote.toLowerCase())),
    [notes, SearchNote],
  );

  return (
    <>
        {pinnedlist.length > 0 ? (
          <>
            <span className="ml-10 uppercase">Pinned</span>
            <div className="columns-3xs p-10">
              {pinnedlist.map((ele, id) => (
                <div key={id} className="mb-5">
                  <NoteComponent data={ele} source={"Notes"} />
                </div>
              ))}
            </div>
          </>
        ) : (
          ""
        )}

        {otherlist.length > 0 && (
          <>
            {pinnedlist.length > 0 && (
              <span className="ml-10 uppercase">Others</span>
            )}
            <div className="columns-3xs p-10">
              {otherlist.map((ele, id) => (
                <div key={id} className="mb-5">
                  <NoteComponent data={ele} source={"Notes"} />
                </div>
              ))}
            </div>
          </>
        )}
    </>
  );
};

export default AllNotes;
