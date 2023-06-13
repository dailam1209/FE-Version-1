import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import ShowResultSearch from "../Pulog/ShowResultSearch";
import { NavLink } from "react-router-dom";



function InputSearchHearder()  {


  const data = ['aaa', 'bbb', 'ccc'];
  
  // input search
  const inputCurrent = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  // modal

  const handleClose = () => {
    setShowResult(true);
    setSearchValue("");
    inputCurrent.current.focus();
  };

  const handerHideResult = () => {
    setShowResult(false);
}
     return (
      <div>
        <Tippy
          placement = 'bottom'
          interactive
          visible = {showResult && searchValue.length > 0 }
          render={attrs => (
          <div className="box" tabIndex="-1" {...attrs}>
            <ShowResultSearch>
              {
                data.map((text, index) => (
                  <NavLink to={`/${text}`} className="show-text">
                    <span>{text}</span>
                  </NavLink>
                ))
              }
            </ShowResultSearch>
          </div>
          )}
          onClickOutside ={handerHideResult}
          >
          <div className="input">
                <input
                  className="input-text"
                  ref={inputCurrent}
                  placeholder="Search..."
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                ></input>

                <div className="icon-search">
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
        </Tippy>
      </div>
     )
};

export default InputSearchHearder;