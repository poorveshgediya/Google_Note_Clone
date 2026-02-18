import { useLocation, useNavigate } from "react-router";
import { BulbOutlined, ArchiveIn, Delete } from "../../assets/Icons";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tracklocation, setTracklocation] = useState("notes");

  const sidebararray = [
    {
      lable: <BulbOutlined />,
      text: "Notes",
      idx: "notes",
    },
    {
      lable: <ArchiveIn />,
      text: "Archive",
      idx: "archive",
    },
    {
      lable: <Delete />,
      text: "Bin",
      idx: "bin",
    },
  ];

  const mapper = {
    "/": "notes",
    "/archive": "archive",
    "/trash": "bin",
  };

  useEffect(() => {
    setTracklocation(mapper[location.pathname]);
  }, [location.pathname]);

  const handleNavigation = (type) => {
    if (type === "notes") {
      navigate("/");
    }
    if (type === "archive") {
      navigate("/archive");
    }
    if (type === "bin") {
      navigate("/trash");
    }
  };

  return (
    <div className="w-18 flex overflow-hidden hover:w-65 duration-200 hover:bg-white shadow-xl">
      <div className="flex flex-col gap-2 mt-4 w-7xl">
        {sidebararray.map((list, index) => {
          const isActive = tracklocation === list.idx;
          return (
            <div
              className={`flex items-center px-3 gap-5 rounded-r-full ${
                isActive
                  ? "bg-amber-200 hover"
                  : "hover:bg-[#f1f3f4]"
              }`}
              key={index}
              onClick={() => handleNavigation(list.text.toLowerCase())}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  isActive
                    ? "bg-amber-200"
                    : "hover:bg-[#f1f3f4]"
                }`}
              >
                {list.lable}
              </div>
              <span>{list.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
