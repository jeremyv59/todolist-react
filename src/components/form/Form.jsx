import React, { useState } from "react";
import "../form/form.css";

const Form = ({ taskList, setTaskList }) => {
  const [newTask, setNewTask] = useState();
  const onChangeTaskValue = (e) => setNewTask(e);

  const addInList = (e) => {
    e.preventDefault();
    const newArray = [...taskList, newTask];

    setTaskList(newArray);
  };

  return (
    <div className="container_form">
      <form onSubmit={(e) => addInList(e)} className="form_item">
        <label htmlFor="todo" className="form_label">
          Tâches à réaliser
        </label>
        <input
          onInput={(e) => onChangeTaskValue(e.target.value)}
          type="text"
          className="form-control"
          id="todo"
        />
        <button type="submit" className="btn">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Form;
