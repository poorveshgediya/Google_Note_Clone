import { useSelector } from 'react-redux';
import NoteComponent from './components/NoteComponent';
import { useMemo } from 'react';

const Test = () => {
  const { notes = [], SearchNote } = useSelector((state) => state.notesaver);

  const TrashNotes = useMemo(
      () => notes.filter((ele) => ele.lable === "Trash" && ele.title.toLowerCase().includes(SearchNote.toLowerCase())),
      [notes,SearchNote],
    );
  
    return (
    <div className="w-full columns-3xs p-10">
      {TrashNotes.map((ele, id) => (
          <div key={id} className="mb-5">
            <NoteComponent data={ele} source={'Trash'}/>
          </div>
        ))}
    </div>
  )
}

export default Test
