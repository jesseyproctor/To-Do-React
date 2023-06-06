import React, { useState, useContext, useEffect, useRef } from "react";
import { CheckListItemsContext } from "../Checklist";
import { AddItemButtonContext } from "../../App";
import "./styles.css";

export const AddItem = () => {
  const [itemToAdd, setItemToAdd] = useState("");
  const inputRef = useRef(null);

  const { checkListItems, setCheckListItems } = useContext(
    CheckListItemsContext
  );

  const { showInputField, setShowInputField } = useContext(
    AddItemButtonContext
  );

  useEffect(() => {
    if (showInputField) {
      inputRef.current.focus();
      console.log(inputRef.current);
    }
  }, [showInputField]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setItemToAdd("");
        setShowInputField(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setItemToAdd(e.target.value);
  };

  const addItem = () => {
    if (itemToAdd !== "") {
      setCheckListItems([itemToAdd, ...checkListItems]);
      setItemToAdd("");
      setShowInputField(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div>
      {showInputField ? (
        <div className="input-container">
          <input
            ref={inputRef}
            value={itemToAdd}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : null}
    </div>
  );
};
