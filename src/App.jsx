import "./App.css";
import { Route, Routes } from "react-router";
import Notes from "./views/Notes";
import Archive from "./views/Archive";
import Trash from "./views/Trash";
import Wrapper from "./views/layouts/Wrapper";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Notes />
            </Wrapper>
          }
        />
        <Route
          path="/archive"
          element={
            <Wrapper>
              <Archive />
            </Wrapper>
          }
        />
        <Route
          path="/trash"
          element={
            <Wrapper>
              <Trash />
            </Wrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
