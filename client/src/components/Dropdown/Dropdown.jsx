import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({setSelectedCategory}) => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDropdownToggled(false);
      }
    }
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []); // Add an empty dependency array to only add/remove the event listener on mount/unmount

  const dropdownOptions = [
    { id: 1, label: "News", value: "News" },
    { id: 2, label: "Sport", value: "Sport" },
    { id: 3, label: "Astronomie", value: "Astronomie" },
    { id: 4, label: "Technik", value: "Technik" },
    { id: 5, label: "Spanisch", value: "Spanisch" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSelectedCategory(option.value); // Pass the selected category to parent component
    setDropdownToggled(false);
  };

  return (
    <div className="dropdown" ref={dropDownRef}>
      <button
        className="toggle"
        onClick={() => setDropdownToggled(!dropdownToggled)}
        type="button"
      >
        <span>{selectedOption ? selectedOption.label : "Ausgewählte Kategorie"}</span>
        <span>{dropdownToggled ? '-' : '+'}</span>
      </button>
      <div className={`options ${dropdownToggled ? "visible" : ""}`}>
        {dropdownOptions.map((option) => {
          if (!option) return null;
          return (
            <button
              key={option.id}
              className={`${selectedOption && selectedOption.id === option.id ? "selected" : ""}`}
              onClick={() => 
                handleSelect(option)}
                type="button"
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
