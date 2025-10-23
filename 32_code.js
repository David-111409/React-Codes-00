// file 1
// import { useState } from "react";
// function Bulb() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <div
//         style={{
//           backgroundColor: isOn ? "#FFD700" : "#2F2F2F",
//           margin: "0 auto",
//           width: "100px",
//           height: "100px",
//           borderRadius: "50%",
//           boxShadow: isOn
//             ? "0px 0px 10px 5px #FFD700"
//             : "0px 0px 10px 5px #2F2F2F",
//           transition: "all 0.5s ease-in-out",
//         }}
//       ></div>
//       <p
//         style={{
//           border: "1px solid black",
//           padding: "10px",
//           width: "100px",
//           borderRadius: "5px",
//           margin: "20px auto",
//         }}
//       >
//         {isOn ? "Bulb is ON" : "Bulb is OFF"}
//       </p>
//       <button style={{marginRight: "10px"}} onClick={() => setIsOn(!isOn)}>
//         {isOn ? "Turn OFF" : "Turn ON"}
//       </button>
//       <button onClick={() => setIsOn(false)}>reset</button>
//     </div>
//   );
// }
// export default Bulb;
