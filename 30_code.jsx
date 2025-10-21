// import { useState } from "react";
// function App() {
//   const [isChecked, setIsChecked] = useState(false);
// //   console.log(isChecked);
//   return (
//     <>
//       <label htmlFor="name">Name:</label>
//       <input
//         checked={isChecked}
//         onChange={(e) => setIsChecked(e.target.checked)}
//         type="checkbox"
//         id="name"
//         name="name"
//       />
//     </>
//   );
// }

// export default App;

export default function UserCard() {
  const user = {
    name: "Muhammad Dawoud",
    email: "dawoud.dev@gmail.com",
    age: 24,
    country: "Egypt",
    profession: "Frontend Developer",
    skills: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "React" },
      { id: 5, name: "TypeScript" },
    ],
  };

  return (
    <div
      style={{
        maxWidth: "320px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9fafc",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Country:</strong> {user.country}
      </p>
      <p>
        <strong>Profession:</strong> {user.profession}
      </p>

      <h4>Skills:</h4>
      <ul>
        {user.skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}
