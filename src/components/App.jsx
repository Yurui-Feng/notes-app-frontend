import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState, useEffect } from "react";

function App() {
  const [notes, updateNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/notes", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        updateNotes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  function addNote(note) {
    updateNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    updateNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
