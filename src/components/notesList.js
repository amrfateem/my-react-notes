// The note list in which notes are housed
import AddNote from "./addnote";
import Note from "./note";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className="notes-list grid gap-4 grid-cols-250">
      {/* Dynamically adds the notes that were stored  */}
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}

      {/* Will add a new note when entered */}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
