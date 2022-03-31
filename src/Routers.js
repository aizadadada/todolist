import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./components/add/Add";
import TodoPage from "./components/todo/todopage/todopage";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact strict path='/' element={<TodoPage/>}/>
          <Route exact strict path='/add' element={<Add/>}/>
            {/* <Add /> */}
          {/* </Route> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
