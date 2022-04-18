import React, { useContext } from "react";
import { actions, Context } from "../hooks/useReducer";
import style from './Todo.module.css'

export default function Todo({ todo }) {
  const { dispatch } = useContext(Context);
  const handleListItemClick = () => {
    dispatch({ type: actions.TOGGLE_STATUS, payload: { id: todo.id } });
  };
  const handleDeleteTodo = () => {
    dispatch({ type: actions.REMOVE_TODO_ITEM, payload: { id: todo.id } });
  };
  return (
    <li key={todo.id} style={{ color: todo.status ? "#AAA" : "#000" }}>
     <div className={style.p10}> {todo.label}</div>
      <div>
        {todo.status ? (
          <div className={style.btn}>
            <div> 
            <button type="button" onClick={handleListItemClick}>
              Not Completed
            </button>
            </div>

            <div>
            <button type="button" onClick={handleDeleteTodo}>
              Delete
            </button>{" "}
               </div>
          </div>
        ) : (
          <button type="button" onClick={handleListItemClick}>
            Completed
          </button>
        )}
      </div>
    </li>
  );
}
