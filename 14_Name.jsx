import React, { useState } from "react";

function Name() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <input placeholder="first name..." value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})}/>
      <br />
      <input placeholder="last name..."  value={name.lastname} onChange={e => setName({...name, lastname: e.target.value})}/>
      <h1>The first name is : {name.firstname}</h1>
      <h1>The last name is : {name.lastname}</h1>
    </div>
  );
}

export default Name;
