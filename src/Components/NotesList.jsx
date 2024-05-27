import React, { useContext } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import AllContext from "../context/context";

const NotesList = () => {
  const { notes } = useContext(AllContext);

  return (
    <div className="notes-list">
      <AddNote />
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}

      {/* <Note />
      <Note />
      <Note />
      <Note /> */}
    </div>
  );
};

export default NotesList;
