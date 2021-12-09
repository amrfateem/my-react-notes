import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  // character limit
  const characterLimit = 200;

  // Checks if there text or not in Add note area
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  //   Add the note when clicked
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      // Checks  if note has any text in it. if not, it won't save
      handleAddNote(noteText);

      // Empties the text area after adding the new note
      setNoteText("");
    }
  };

  return (
    <div className="note bg-blue-500 rounded-xl p-4 min-h-150 flex flex-col justify-between">
      <textarea
        id="textarea"
        className="text-yellow-50 border-none resize-none bg-blue-500 outline-none placeholder-white"
        cols="10"
        rows="10"
        maxLength={200}
        placeholder="Add a note..."
        onChange={handleChange}
      ></textarea>
      <div className="footer flex items-center justify-between">
        <small>{characterLimit - noteText.length} remaining</small>
        <button
          onClick={() => {
            const textbox = document.querySelector("textarea");
            textbox.value = "";
            handleSaveClick();
          }}
          className="save bg-indigo-50 border-none rounded-xl px-3 py-1 hover:bg-indigo-400 transition-all cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
