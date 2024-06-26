import { useEffect, useState } from "react";
import AllContext from "./context";
import { nanoid } from "nanoid";

const Provider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/04/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "25/04/2024",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "5/04/2024",
    },
  ]);

  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      id: nanoid(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    console.log("id", id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <AllContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        setSearchText,
        searchText,
        setDarkMode,
        darkMode,
        setNotes,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export default Provider;
