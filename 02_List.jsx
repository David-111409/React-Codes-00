import { useState } from "react";

let nums = [0];

const ListFun = () => {
  const [list, setList] = useState(nums);
  const deletItem = (i) => {
    setList((prev) => prev.filter((_, index) => index !== i));
  };
  return (
    <>
      <div style={{ fontSize: "40px", margin: "30px" }}>
        {list.map((num, ind) => (
          <li key={ind}>
            {num}{" "}
            <button
              style={{ cursor: "pointer" }}
              onClick={() => deletItem(ind)}
            >
              delete
            </button>
          </li>
        ))}
      </div>
      <button
        style={{
          border: "none",
          padding: "10px",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={() =>
          setList((prev) => [...prev, prev[prev.length - 1] + 1 || 0])
        }
      >
        Add number{" "}
      </button>
      <button
        style={{
          border: "none",
          padding: "10px",
          cursor: "pointer",
          fontSize: "20px",
          margin: "10px"
        }}
        onClick={() => setList([])}
      >
        Clear
      </button>
    </>
  );
};

export default ListFun;
