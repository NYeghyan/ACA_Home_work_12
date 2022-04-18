import Home from "./pages/Home";
import { useReducer } from "react";
import { reducer, defaultState, Context } from "./hooks/useReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <Context.Provider value={{state, dispatch}}>
      <Home/>
    </Context.Provider>
  );
}

export default App;
