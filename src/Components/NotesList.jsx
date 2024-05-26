import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes }) => {
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
