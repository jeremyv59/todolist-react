import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/app.css";
import Form from "./components/form/Form";
import ListItems from "./components/listitems/ListItems";

function App() {
  const [taskList, setTaskList] = useState([
    "Coder en React",
    "Ecrire un bot en python",
    "Effectuer une veille techno",
  ]);

  return (
    <div className="main_container">
      <h1 style={{ color: "#546A7B" }} className="text-center mt-3">
        Liste de tâches
      </h1>
      <Form taskList={taskList} setTaskList={setTaskList}></Form>
      <h2 style={{ color: "#546A7B" }} className="list_title">
        Liste des tâches à réaliser
      </h2>
      <ListItems data={taskList} setTaskList={setTaskList}></ListItems>
    </div>
  );
}

export default App;
