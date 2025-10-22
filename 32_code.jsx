import { useState } from "react";
// let i = 0;
// function Button() {
  //   console.log("render", i);
  //   let names = ["Hager", "Khaled"];
  //   const [name, setName] = useState(names[i]);
  //   const [count, setCount] = useState(0);
  //   const [like, setLike] = useState(false);
  //   const [name, setName] = useState("khaled");
  // function Click() {
    // i++;
    // setName(names[i % 2]);
    // setName("ali");
    // setCount((prev) => prev + 1);
    // setLike((prev) => !prev);
  // }
  //   const [name, setName] = useState("");
  //   const [show, setShow] = useState(false);
  //   function nameChange(e) {
  //     setName(e.target.value);
  //   }
  //   function clearInput(){
  //     setName("");
  //   }
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
const [form, setForm] = useState({ name: "", email: "" });
  return (
    <>
      {/* <h1>{name}</h1> */}
      {/* <button onClick={Click}>{count > 0 ? count + " liked" : "like"}</button>
      <button onClick={() => setCount(0)}>reset</button> */}
      {/* <button onClick={Click}>{like ? "unlike": "like"}</button> */}
      {/* <label>name : </label>
      <input value={name} onChange={nameChange} />
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      { <button onClick={clearInput}>clear the input</button>}
      {show && name && <h1>Hello, {name}</h1>} */}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form);
        }}
      >
        <label htmlFor="name">Name : </label>
        <input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button>submit</button>
      </form>
    </>
  );
}
export default Button;
