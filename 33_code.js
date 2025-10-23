// import { useState } from "react";

// function App() {
//   const [form, setForm] = useState({ name: "", email: "", age: "" });
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         console.log(form);
//       }}
//     >
//       <h1>Form</h1>
//       <input
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//         type="text"
//         placeholder="Name"
//       />
//       <input
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//         type="text"
//         placeholder="Email"
//       />
//       <input
//         value={form.age}
//         onChange={(e) => setForm({ ...form, age: e.target.value })}
//         type="text"
//         placeholder="Age"
//       />
//       <button type="submit">submit</button>
//     </form>
//   );
// }

// export default App;
