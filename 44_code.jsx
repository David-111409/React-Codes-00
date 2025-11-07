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
/*
import { useState } from "react";
function App() {
  // const [word, setWord] = useState("");
  // const [words, setWords] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [choosen, setChoosen] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <>
      <h1>The Form part 1</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <select value = {choosen} onChange={(e) => setChoosen(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        <button>Submit</button>
      </form>
      <h2>Name : {name}</h2>
      <h3>Text area : {text} and the <br/> choosen : {choosen}</h3>
    </>
  );

  /* <div className="App">
      { <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://api.datamuse.com/words?rel_syn=fast")
            .then((res) => res.json())
            .then(setWords)
            .catch((err) => console.error(err));
        }}
      >
        <label htmlFor="word">Your Word</label>
        <input
          onChange={(e) => setWord(e.target.value)}
          value={word}
          id="word"
        />
        <button>Submit</button>
        <ul>
          {words.map((word) => (
            <li onClick={(e) => setWord(word.word)} key={crypto.randomUUID()}>
              {word.word}
            </li>
          ))}
        </ul>
      </form>
    </div> }

}

export default App;

*/
    */
