import "./style.css";
import Parent from "./Parent";
import React from "react";
export const UserContext = React.createContext();
function App() {
  let username = "dawoud";

  return (
    <UserContext value ={username}>
      <Parent  />
    </UserContext>
  );
}

export default App;
