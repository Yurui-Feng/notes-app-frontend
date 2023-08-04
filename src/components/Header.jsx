import React from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

function Header() {
  const handleLogin = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };

  return (
    <header>
      <h1>
        <StickyNote2Icon className="stickyNoteIcon" fontSize="large" /> Notes
        App
      </h1>
      <div className="googleSignIn">
        <button
          className="btn btn-block btn-social btn-google"
          onClick={handleLogin}
        >
          <i className="fab fa-google"></i>
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
