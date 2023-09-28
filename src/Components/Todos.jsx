import React from "react";
import { useEffect, useState } from "react";
import "./Todos.css";
import { MdDeleteForever } from "react-icons/md";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }

    const newTodoItem = {
      userId: 1,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(newTodoItem),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo("");
      });
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTodos.find((todo) => todo.id === id)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => setTodos(updatedTodos));
  };

  const deleteTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    });
  };

  return (
    <div className="container con1 bg">
      
      <div className="container">
        
          <div className="row">
            <div className="col">
              <input type="text" id="input" placeholder="Type Here" />
            </div>
            <div className="col">
              <button
                type="button"
                onClick={addTodo}
                className="btn btn-primary mt-5"
                id="add"
              >
                Add
              </button>
            </div>
          </div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`pt-3 container ${todo.completed ? "completed" : ""}`}
            >
              <div className="row">
                <div className="col">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                </div>
                <div className="col">
                  <span
                    className="todo-title p-1"
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.title}
                  </span>
                </div>
                <div className="col">
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    <MdDeleteForever/>
                  </button>
                </div>
              </div>
            </div>
          ))}
          ;{/* <div className="p-1 dis"></div> */}
        
      </div>
    </div>
  );
}

export default Todos;
