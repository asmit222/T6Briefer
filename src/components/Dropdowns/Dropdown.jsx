import React from "react";

function Dropdown(props) {
  return (
    <div className="dropdownContainer">
      <div
        onClick={props.handleClick}
        className={`dropdown width100 ${props.dropdown}`}
      >
        <div className="dropdown-trigger width100">
          <button
            className="width100 syllabusDropdownButton button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>{props.selected}</span>
            <span className="icon is-small">
              <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <button
              type="button"
              data-id="C4100"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4100
            </button>
            <button
              type="button"
              data-id="C4200"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4200
            </button>
            <button
              type="button"
              data-id="C4300"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4300
            </button>
            <button
              type="button"
              data-id="C4490"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4490
            </button>
            <button
              type="button"
              data-id="C4501"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4501
            </button>
            <button
              type="button"
              data-id="C4600"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4600
            </button>
            <button
              type="button"
              data-id="C4790"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4790
            </button>
            <button
              type="button"
              data-id="C4801"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4801
            </button>
            <button
              type="button"
              data-id="C4901"
              onClick={props.handleUpdateContactSelected}
              className="dropdown-item button"
            >
              C4901
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
