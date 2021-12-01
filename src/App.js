import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/notesList";
import "./index.css";
import Search from "./components/searchbar";
import Header from "./components/header";

function App() {
  // Just boilerplate stuff. nevermind it
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my notes app",
      date: "12/1/2021",
    },
    {
      id: nanoid(),
      text: "You can Add, Edit, remove and search notes",
      date: "12/1/2021",
    },
    {
      id: nanoid(),
      text: "Also they are saved within your browser, so you can close and open the browser without losing data",
      date: "12/1/2021",
    },
  ]);

  //implementing search as a state
  const [searchText, setSearchText] = useState("");

  // the useEffect saves the noets to local storage and retrieve em
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // Adds the new note with id,text and generate a new date based on the note entered date
  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  // Delete note corresponding to it's ID
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  // Edits the note by preserving it's text and moving to to editable note component
  const editNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container max-w-6xl mr-auto ml-auto pl-4 pr-4">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        // Use filter to not change the original notes
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}

        handleAddNote={AddNote}
        handleDeleteNote={deleteNote}
        handleEditNote={editNote}
      />
    </div>
  );
}

export default App;
