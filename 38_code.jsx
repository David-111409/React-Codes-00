import "./style.css";
import { useState } from "react";

let buttons = ["Home", "Profile", "Settings", "Logout"];

buttons = buttons.map((el, index) => {
  return { id: index + 1, name: el, isActive: false };
});

function App() {
  
  const [navbar, setNavbar] = useState(buttons);
  function handleClick(id) {
    let newNavbar = navbar.map((el) => {
      if (el.id === id) {
        return { ...el, isActive: true };
      } else {
        return { ...el, isActive: false };
      }
    });
    
    setNavbar(newNavbar);
  }

  return (
    <>
      {navbar.map((but) => (
        <button
          onClick={() => handleClick(but.id)}
          className={but.isActive ? "active btn" : "btn"}
          key={but.id}
        >
          {but.name}
        </button>
      ))}
      <p>
        Current Selection: {navbar.find((el) => el.isActive)?.name || "----"}
      </p>
    </>
  );
}

export default App;
