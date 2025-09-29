/*const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((el) => (
  <li style={{ color: el.isFruit ? "red" : "blue" }} key={el.id}>
    {el.title}
  </li>
));
function MyApp() {
  return <ul>{listItems}</ul>;
}

export default MyApp;
*/

/*
function MyButton() {
  function handleClick() {
    alert("Button is clicked");
  }
  return <button onClick={handleClick}>click</button>;
}

function App() {
  return <MyButton />;
}

export default App;
*/

/*import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  function handelClick() {
    return setCount((prev) => prev + 1);
  }
  return <button onClick={handelClick}>cilcked {count} times</button>;
}

function App() {
  return (
    <>
      <MyButton />
      <MyButton />
    </>
  );
}

export default App;*/
