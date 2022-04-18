import React from "react";
import FunctionComponents from "./hooks/FunctionComponents";
import { ThemeProvider } from "./hooks/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <FunctionComponents />
    </ThemeProvider>
  );
}

export default App;
