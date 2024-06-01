import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import AllContext from "../context/context";

const Note = ({ note }) => {
  // console.log("note", note);
  const { deleteNote } = useContext(AllContext);

  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
