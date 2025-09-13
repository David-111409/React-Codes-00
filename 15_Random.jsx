import React, { useState } from "react";

function Random() {
  const [nums, setNums] = useState([]);
  const adddNum = () =>
    setNums([
      ...nums,
      { id: nums.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  return (
    <div>
      <button onClick={adddNum}>Add Number</button>
      <ul>
        {nums.map((num) => (
          <li key={num.id}>{num.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Random;
