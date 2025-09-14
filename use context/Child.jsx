import React, { useContext } from "react";
import { UserContext } from "./App";
function Child() {
    const user = useContext(UserContext);
  return <div>Child {user}</div>;
}

export default Child;
