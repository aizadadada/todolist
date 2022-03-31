import React, { useState, useEffect } from "react";
import Add from "../../add/Add";
import EditModal from "../../modal/editModal";
import TodoItem from "../todoitem/todoitem";
import TodoList from "../todolist/todolist";

const todosInLocalStorage = localStorage.getItem("todos"); // у LocalStorage существуют несколько методов. Здесь мы с помощью метода getItem получаем данные из LocalStorage

const parsedTodos = todosInLocalStorage ? JSON.parse(todosInLocalStorage) : []; //создаем переменную: если в ней есть наши данные, то с помощью метода JSON.parse, который разбирает строку JSON и переводит в наш формат; если данных нет, то там будет пустой массив. Всё это будет находится в переменной parsedTodos.

const TodoPage = () => {
  const [todos, setTodos] = useState(parsedTodos); // создаем хук useState, начальное состояние которого будет наша переменная "parsedTodos".

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  //функция добавления таска
  function addTodo(newTodo) {
    let arr = [...todos, newTodo];
    setTodos(arr);
    // setTodos((todos) => [...todos, newTodo]) => упрощенный вариант вышестоящего кода
  }

  //функция для редактирования
  const onEditClick = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  //функция для закрытия модального окна
  const onCloseModal = () => {
    setSelectedTodo(null);
    setIsModalOpen(false);
  };

  //функция для удаления выбранного таска
  function deleteTask(id) {
    let arr = todos.filter((todo) => todo.id !== id);
    setTodos(arr);
  }

  //функция сохранения после редактирования
  const onSave = (todoId, title) => {
    const index = todos.findIndex((todo) => todo.id === todoId);
    const before = todos.filter((_, i) => i < index);
    const after = todos.filter((_, i) => i > index);
    console.log("index:", index);
    console.log("todoId:", todoId);
    const newTodo = { id: todoId, title };
    setTodos([...before, newTodo, ...after]);
    onCloseModal();
  };

  //useEffect - хук, который будет вызван после рендера(React вызовет функцию после того, как все изменения будут внесены).
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //Метод JSON.stringify позволяет преобразовать наши данные в формат JSON
  }, [todos]);

  return (
    <>
      <Add addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTask={deleteTask}
              onEditClick={onEditClick}
            />
          );
        })}
      </TodoList>
      {selectedTodo && (
        <EditModal
          isOpen={isModalOpen}
          selectedTodo={selectedTodo}
          onCloseModal={onCloseModal}
          onSave={onSave}
        />
      )}
    </>
  );
};

export default TodoPage;
