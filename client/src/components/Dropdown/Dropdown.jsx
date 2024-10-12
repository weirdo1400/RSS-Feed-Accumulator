import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (dropDownRef.current) {
        if (!dropDownRef.current.contains(e.target)) {
          setDropdownToggled(false);
        }
      }
    }
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const dropdownOptions = [
    {
      id: 1,
      label: "News",
      value: "news",
    },
    {
      id: 2,
      label: "Sport",
      value: "sport",
    },
    {
      id: 3,
      label: "Astronomie",
      value: "astronomie",
    },
    {
      id: 4,
      label: "Technik",
      value: "technik",
    },
    {
      id: 5,
      label: "Spanisch",
      value: "spanisch",
    },
  ];

  return (
    <div className="dropdown" ref={dropDownRef}>
      <button
        className="toggle"
        onClick={() => {
          setDropdownToggled(!dropdownToggled);
        }}
      >
        <span>{selectedOption ? selectedOption.label : "Ausgewählte Kategorie"}</span>
        <span>{dropdownToggled ? '-' : '+'}</span>
      </button>
      <div className={`options ${dropdownToggled ? "visible" : ""}`}>
        {dropdownOptions.map((option, index) => {
          return <button className={`${selectedOption.id === option.id ? "selected" : ""}`} onClick={() =>
          {
            setSelectedOption(option);
            setDropdownToggled(false);
          }
          }>{option.label}</button>;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
