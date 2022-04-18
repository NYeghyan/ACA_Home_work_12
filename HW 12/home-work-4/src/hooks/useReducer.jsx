import { createContext } from "react";

const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_STATUS: "TOGGLE_STATUS",
};
const test = JSON.parse(localStorage.getItem("todoList"))


const defaultState = {
  todoList: test ? test : []
} 


const Context = createContext(defaultState);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM:
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().valueOf(),
            label: action.payload,
            status: false,
          },
        ],
      };
    case actions.REMOVE_TODO_ITEM: {
      const filteredTodoItem = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload.id
      );
      return { todoList: filteredTodoItem };
    }
    case actions.TOGGLE_STATUS: {
      const editedList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      return { todoList: editedList };
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export { actions, defaultState, reducer, Context };
