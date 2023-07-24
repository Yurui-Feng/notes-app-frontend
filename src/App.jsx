import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((singleNote) => (
        <Note
          key={singleNote.key}
          title={singleNote.title}
          content={singleNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
