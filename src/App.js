import { useState } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";

const App = () => {
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
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
