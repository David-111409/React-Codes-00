import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Content />
    </ThemeContext.Provider>
  );
}

function Content() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>This is the first paragraph</h1>
      <h1>This is the second paragraph</h1>
      <button
        style={{ color: theme === "light" ? "black" : "white", backgroundColor: theme === "light" ? "white" : "black"}}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        toggle mode
      </button>
    </div>
  );
}
export default App;
