import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import classes from "./add.module.css";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const Add = ({ addTodo }) => {
  const [task, setTask] = useState("");

  function createTask(e) {
    e.preventDefault();
    const obj = { title: task, id: Math.random() };
    addTodo(obj);
    setTask("");
  }

  return (
    <>
      <form className={classes.addForm}>
        <input
          placeholder="Write your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {/* <button onClick={createTask}>ADD</button> */}
        <IconButton onClick={createTask}>
          <AddIcon />
        </IconButton>
      </form>
    </>
  );
};

export default Add;
