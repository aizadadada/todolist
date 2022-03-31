import React from "react";
import classes from './todolist.module.css';

const TodoList = ({children}) => {
  return (
    <ul className={classes.list}>
      { children }
    </ul>
  );
};

export default TodoList;
