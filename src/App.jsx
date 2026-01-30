import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todolist from "./Todolist";
import EditableTodo from "./EditableTodo";

function App() {
  return (
    <>
      <Todolist />
      <br></br>
      <EditableTodo/>
    </>
  );
}

export default App;
