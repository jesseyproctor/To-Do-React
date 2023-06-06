import React, { useState } from "react";
import { ChecklistItem } from "../ChecklistItem";
import { AddItem } from "../AddItem";
import "./styles.css";

export const CheckListItemsContext = React.createContext();

export const Checklist = () => {
  const [checkListItems, setCheckListItems] = useState([
    // state not initiated to empty array for demo purposes
    "Make Bed",
    "Do Laundry",
    "Pack Lunch",
    "Shower"
  ]);

  const handleCheckboxChange = (newCheckedState, label) => {
    const index = checkListItems.findIndex((item) => item === label);

    if (index >= 0) {
      const updatedListItems = [...checkListItems];
      const item = updatedListItems.splice(index, 1)[0];

      if (newCheckedState) {
        updatedListItems.push(item);
      } else {
        updatedListItems.unshift(item);
      }

      setCheckListItems(updatedListItems);
    }
  };

  return (
    <CheckListItemsContext.Provider
      value={{ checkListItems, setCheckListItems }}
    >
      <div className="check-list">
        {checkListItems.map((item) => (
          <React.Fragment key={item}>
            <ChecklistItem label={item} onChange={handleCheckboxChange} />
            {item === checkListItems[checkListItems.length - 1] && <AddItem />}
          </React.Fragment>
        ))}
        {checkListItems.length === 0 && <AddItem />}
      </div>
    </CheckListItemsContext.Provider>
  );
};
