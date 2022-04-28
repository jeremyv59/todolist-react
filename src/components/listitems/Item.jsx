import React from "react";
import "../listitems/item.css";

const Item = ({ id, onDeleteTask, taskTitle }) => {
  return (
    <li className="item_container">
      <span className="task_title">{taskTitle}</span>
      <button onClick={() => onDeleteTask(id)} className="delete_btn">
        Supprimer
      </button>
    </li>
  );
};

export default Item;
