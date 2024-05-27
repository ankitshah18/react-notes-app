import React, { useContext, useState } from "react";
import AllContext from "../context/context";

const AddNote = () => {
  const { addNote } = useContext(AllContext);

  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
    // console.log("Event", event.target.value);
  };

  const handleClick = () => {
    addNote(noteText);
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
