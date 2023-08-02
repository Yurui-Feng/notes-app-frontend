import { useState } from "react";
import React from "react";

function CreateArea(props) {
  const [newNote, updateContent] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    updateContent((prevNote) => {
      return {
        ...prevNote,
        // square brackets are used to access the value of a variable
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={newNote.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onSubmit(newNote);
            updateContent({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
