// src/App.tsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello.js";
import Ref from "./useRef.js";
import Memo from "./useMemo.js";
import Reducer from "./useReducer.js";
import LayoutEffect from "./useLayoutEffect.js";
import { ThemeProvider, useTheme } from './ThemeContext.tsx';

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div style={{ 
      background: dark ? "#333" : "#fff", 
      color: dark ? "#fff" : "#000", 
      padding: "1rem" 
    }}>
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <ThemeSwitcher />
          <img src={logo} className="App-logo" alt="logo" />
          <Hello />
          <Ref />
          <Memo />
          <Reducer />
          <LayoutEffect />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
