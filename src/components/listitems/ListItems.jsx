import React, { useState, useEffect } from "react";
import "../listitems/listitems.css";
import Item from "../listitems/Item";

const ListItems = ({ data, setTaskList }) => {
  const deleteTask = (indexTask) => {
    setTaskList(
      data.filter((item, index) => {
        return index !== indexTask;
      })
    );
  };

  return (
    <ul className="list_container">
      {data.length > 0
        ? data.map((task, index) => {
            return (
              <Item
                key={index}
                id={index}
                onDeleteTask={() => deleteTask(index)}
                taskTitle={task}
              ></Item>
            );
          })
        : null}
    </ul>
  );
};

export default ListItems;
