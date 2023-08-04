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
  }, []);

  function addNote(note) {
    updateNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
      credentials: "include", // Include credentials if needed for authentication
    })
      .then((response) => response.json())
      .then(() => {
        updateNotes((prevNotes) => {
          return prevNotes.filter((_, index) => {
            return index !== id;
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
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
