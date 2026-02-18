import HomeCoponent from "./components/HomeCoponent";
import AllNotes from "./components/AllNotes";

const Notes = () => {
  return (
    <>
      <div className="w-full">
        <HomeCoponent />
        <AllNotes />
      </div>
    </>
  );
};

export default Notes;
