import { useEffect, useState } from "react";
import { CrossOutline, Search } from "../../assets/Icons";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../../redux/homeSlice";

const SearchBar = () => {
  const [seacrhbar, setSearchbar] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchQuery(seacrhbar));
  }, [seacrhbar, dispatch]);
  
  const handleSearchbar = (e) => {
    setSearchbar(e.target.value);
  };
  
  const handleCrossbtn = () => {
    setSearchbar("");
  };
  
  
  return (
    <div className="flex items-center w-xl min-w-2xs bg-[#f1f3f4] px-3 py-1 rounded focus-within:bg-white focus-within:shadow-md">
      <Search />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 p-2 flex-1 items-stretch outline-none"
        value={seacrhbar}
        onChange={handleSearchbar}
      />
      {seacrhbar?.length ? (
        <button onClick={handleCrossbtn}>
          <CrossOutline className={"hover:rotate-90 duration-200"} />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
