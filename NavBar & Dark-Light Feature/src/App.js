import NavBar from "./components/NavBar";
import { createContext, useEffect, useState } from "react";
export const darkContext = createContext();
function App() {
  const [dark, setDark] = useState(false);
  const handleDark = () => {
    setDark(!dark);
  };
  useEffect(() => {
    const localDark = localStorage.getItem("dark");
    if (localDark === "true") {
      setDark(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);
  return (
    <darkContext.Provider value={{ dark, handleDark }}>
      <div className={"container" + (dark ? " dark" : "")}>
        <NavBar />
      </div>
    </darkContext.Provider>
  );
}

export default App;
