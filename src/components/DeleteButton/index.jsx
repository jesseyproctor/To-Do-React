import { useContext } from "react";
import { CheckListItemsContext } from "../Checklist";
import trashCanIcon from "../../assets/TrashCanIcon.svg";
import "./styles.css";

export const DeleteButton = ({ isHovered, label }) => {
  const { checkListItems, setCheckListItems } = useContext(
    CheckListItemsContext
  );
  const handleTrashIconClick = () => {
    const updatedListItems = checkListItems.filter((item) => item !== label);
    setCheckListItems(updatedListItems);
  };

  return (
    <>
      {isHovered && (
        <button className="delete-button" onClick={handleTrashIconClick}>
          {" "}
          <img src={trashCanIcon} alt="Trash Can Icon" />
        </button>
      )}
    </>
  );
};
