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
