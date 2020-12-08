import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryToggle, setLibraryToggle }) {
  return (
    <nav>
      <h1>Waves</h1>
      <button
        onClick={() => {
          setLibraryToggle(!libraryToggle);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
