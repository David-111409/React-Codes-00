import React, { useContext } from "react";
import Child from "./Child";
import { UserContext } from "./App";


function Parent() {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>Parent {user}</h1>
      <Child  />
    </div>
  );
}

export default Parent;
