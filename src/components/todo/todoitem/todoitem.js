import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import classes from "./todoitem.module.css";
import BasicModal from "../../modal/editModal";

const TodoItem = ({ todo, deleteTask, onEditClick }) => {
  return (
    <>
      <li className={classes.item}>
        {todo.title}
        <div className={classes.buttons}>
        <IconButton onClick={() => onEditClick(todo)}>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => deleteTask(todo.id)}>
          <DeleteOutlineIcon />
        </IconButton>
        </div>
      </li>{" "}
    </>
  );
};

export default TodoItem;
