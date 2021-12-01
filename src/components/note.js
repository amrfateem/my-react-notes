// The note itself
import { MdDeleteForever } from "react-icons/md"; //Material UI delete icon

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note bg-green-400 rounded-xl p-4 min-h-150 justify-between flex flex-col gao whitespace-pre-wrap ">
      <span>{text}</span>
      <div className="footer flex items-center justify-between">
        <button
          className="save bg-indigo-50 border-none rounded-xl px-3 py-1 hover:bg-indigo-400 justify-between transition-all cursor-pointer whitespace-pre-wrap"
          // Upon clicking it will delete and recreate with preserved text
          onClick={() => {
            handleEditNote(id);
            document.getElementById("textarea").focus();
            const textbox = document.getElementById("textarea");
            textbox.value = "";
            textbox.value = text;
          }}
        >
          Edit
        </button>
        <small>{date}</small>
        <MdDeleteForever
          // delete note with coreesponding ID
          onClick={() => handleDeleteNote(id)}
          className="delete-icon text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Note;
