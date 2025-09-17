import React from "react";
import ComponentB from "./ComponentB";

function ComponentC({ name }) {
  return <ComponentB name={name} />;
}

export default ComponentC;

/** component B
import React from "react";
import ComponentA from "./ComponentA";
function ComponentB({name}) {
  return <ComponentA name={name}/>;
}

export default ComponentB;
 */

/** component A
import React from "react";

function ComponentA({ name }) {
  return <h1>hello {name}</h1>;
}

export default ComponentA;
 */
