import { useContext, useEffect } from "react";
import Header from "./Components/Header";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import AllContext from "./context/context";

const App = () => {
  const { darkMode, notes, setNotes } = useContext(AllContext);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header />
        <Search />
        <NotesList />
      </div>
    </div>
  );
};

export default App;
