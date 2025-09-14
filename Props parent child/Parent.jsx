import React from "react";
import Child from "./Child";



function Parent({ username }) {
  return (
    <div>
      <h1>Parent {username}</h1>
      <Child username={username} />
    </div>
  );
}

export default Parent;
