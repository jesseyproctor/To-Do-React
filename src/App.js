import React, { useState } from "react";
import { Checklist } from "./components/Checklist";
import "./styles.css";

export const AddItemButtonContext = React.createContext();

export default function App() {
  const [editable, setEditable] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  React.useEffect(() => {
    // disable the add-item-button when input field is open to keep button from recieving focus
    if (showInputField) {
      setIsDisabled(true);
    } else setIsDisabled(false);
  }, [showInputField]);

  const handleHover = () => {
    setEditable(true);
  };

  const handleBlur = () => {
    setEditable(false);
  };

  const handleAddButtonClicked = () => {
    setShowInputField(true);
  };

  return (
    <AddItemButtonContext.Provider
      value={{ showInputField, setShowInputField }}
    >
      <div className="App">
        <h1
          contentEditable={editable}
          onMouseEnter={handleHover}
          onMouseLeave={handleBlur}
        >
          To Do
        </h1>
        <Checklist />
        <button
          className="add-item-button"
          onClick={handleAddButtonClicked}
          disabled={isDisabled}
        >
          <span className="plus-sign">+</span>
        </button>
      </div>
    </AddItemButtonContext.Provider>
  );
}
