import ComponentC from "./ComponentC";
import React from "react";
export const userContext = React.createContext();
export const ageContext = React.createContext();
function App() {
  return (
    <userContext.Provider value="khaled">
      <ageContext.Provider value={20}>
        <ComponentC />
      </ageContext.Provider>
    </userContext.Provider>
  );
}

export default App;

/**
 * file of Component C::
 import React from "react";
import ComponentB from "./ComponentB";

function ComponentC() {
  return <ComponentB  />;
}

export default ComponentC;
 */

/* 
* file of Component B
import React from "react";
import ComponentA from "./ComponentA";
function ComponentB() {
  return <ComponentA />;
}

export default ComponentB;
 */

/**
 * file of component A
 import React, { useContext } from "react";
import { userContext, ageContext } from "./App";
function ComponentA() {
    const name = useContext(userContext);
    const age = useContext(ageContext);
  return (
    // <div>
    //   <userContext.Consumer>
    //     {(user) => {
    //       return <ageContext.Consumer>
    //          {age => {
    //             return <h1>name is {user} and age is {age}</h1>
    //          }}
    //       </ageContext.Consumer>
    //       }
    //     }
    //   </userContext.Consumer>
      
    // </div>
    <h1>Hello {name} and age is {age}</h1>
  );
}

export default ComponentA;

 */
