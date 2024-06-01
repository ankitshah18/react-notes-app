import React, { useContext, useState } from "react";
import AllContext from "../context/context";

const AddNote = () => {
  const { addNote } = useContext(AllContext);

  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;
  console.log("Length", noteText.length);

  const handleChange = (event) => {
    const text = event.target.value;
    if (text.length < characterLimit) {
      setNoteText(text);
    } else {
      alert("Character Limit Reached!");
    }
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
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
