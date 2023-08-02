import React from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
function Header() {
  return (
    <header>
      <h1>
        <StickyNote2Icon className="stickyNoteIcon" fontSize="large" /> Notes
        App
      </h1>
    </header>
  );
}

export default Header;
