import React, { useContext } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import AllContext from "../context/context";

const NotesList = () => {
  const { notes, searchText } = useContext(AllContext);

  const Search = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );

  return (
    <div className="notes-list">
      <AddNote />
      {Search.map((note) => (
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
