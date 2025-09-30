import { useState } from "react";

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>cilcked {count} times</button>;
}

function App() {
  const [count, setCount] = useState(0);
  function handle() {
    setCount(count + 1);
  }
  return (
    <>
      <MyButton count={count} onClick={handle} />
      <MyButton count={count} onClick={handle} />
    </>
  );
}

export default App;

/*
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      style={{ marginRight: "20px", borderRadius: "50%" }}
    />
  );
}

function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default App;
*/
/*
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

*/
