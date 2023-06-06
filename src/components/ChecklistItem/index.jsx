import { useState } from "react";
import { DeleteButton } from "../DeleteButton";
import "./styles.css";

export const ChecklistItem = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState, label);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // allow mouse to travel from list item to trash can
    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  return (
    <div className="checklist-item-container">
      <label
        className={`label ${isChecked ? "checked" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="label-text">{label}</span>
        <input type="checkbox" className="star-checkbox" />
        {/* <TrashCanIcon isHovered={isHovered} label={label} /> */}
      </label>
      <div className="trash-icon-container">
        <DeleteButton isHovered={isHovered} label={label} />
      </div>
    </div>
  );
};
