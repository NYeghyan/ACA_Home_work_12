import React, { useState, useContext, useEffect } from "react";
import { actions, Context } from "../hooks/useReducer";
import style from './Home.module.css'

import Todo from "../components/Todo";

function Home() {
  const [input, setInput] = useState("");
  
  const {
    state: { todoList },
    dispatch,
  } = useContext(Context);
  
  const handleinputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
      localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodoItem = (e) => {
    e.preventDefault();
    dispatch({ type: actions.ADD_TODO_ITEM, payload: input });
  };
  return (
    <>
      <div>
        <h1>Reducer To Du list</h1>
        <form>
          <label htmlFor="myinput">To Do list</label>
          <input
            name="myinput"
            type="text"
            onChange={handleinputChange}
            value={input}
          />
          <button type="submit" onClick={handleAddTodoItem}>
            Add to List
          </button>
        </form>
      </div>
      <ul className={style.list}>
        {todoList &&
          todoList.map((listItem) => {
            return <Todo key={listItem.id} todo={listItem} />;
          })}
      </ul>
    </>
  );
}

export default Home;
