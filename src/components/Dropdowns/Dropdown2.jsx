import React from "react";

function Dropdown2(props) {
  return (
    <div className="dropdownContainer">
      <div
        onClick={props.handleClick}
        className={`width100 dropdown ${props.dropdown}`}
      >
        <div className="width100 dropdown-trigger">
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
              data-id="I4100"
              onClick={props.handleUpdateInstrumentSelected}
              className="dropdown-item"
            >
              I4100
            </button>
            <button
              type="button"
              data-id="I4200"
              onClick={props.handleUpdateInstrumentSelected}
              className="dropdown-item"
            >
              I4200
            </button>
            <button
              type="button"
              data-id="I4300"
              onClick={props.handleUpdateInstrumentSelected}
              className="dropdown-item"
            >
              I4300
            </button>
            <button
              type="button"
              data-id="I4490"
              onClick={props.handleUpdateInstrumentSelected}
              className="dropdown-item"
            >
              I4490
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown2;
