import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const inputCurrent = useRef();

  const handleClose = () => {
    setSearchValue("");
    inputCurrent.current.focus();
  };

  return (
    <div className="search">
      <input
        className="search-input"
        ref={inputCurrent}
        placeholder="Search..."
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>

      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      {searchValue.length > 0 ? (
        <div className="close" onClick={handleClose}>
          <FontAwesomeIcon icon={faClose} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Search;
