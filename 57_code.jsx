// const App = () => {
//   const [counter, setCouter] = useState(0);
//   const [va, setVa] = useState(false);
//   const calcIncome = function () {
//     console.log("calcIncome");
//     let total = 10;
//     for (let i = 0; i < 10; i++) {
//       total += counter;
//     }
//     return total;
//   };
//   const income = useMemo(() => calcIncome(), [va]);

//   const handleClick = () => {
//     console.log(calcIncome());
//     if (counter === 5) {
//       setVa(!va);
//     }
//     setCouter(counter + 1);
//   };

//   return (
//     <>
//       <h1>count : {counter}</h1>

//       <button onClick={() => handleClick()}>Increment</button>
//       <h2>income: {income}</h2>
//     </>
//   ); 
// }
// export default App;
