// import { useState } from "react";
// import "./style.css";
// let darkStyle = {
//   backgroundColor: "black",
//   color: "white",
//   width: "100vw",
//   height: "100vh",
// };
// let lightStyle = {
//   backgroundColor: "white",
//   color: "black",
//   width: "100%",
//   height: "100vh",

// };

// let buttonText = ["log out", "log in"];
// let pText = ["Welcome, User!", "Please login"];

// function App() {
//   const [dark, setDark] = useState(false);
//   const [toggle, setToggle] = useState(true);

//   function handleClick() {
//     setDark(!dark);
//   }

//   return (
//     <div style={dark ? darkStyle : lightStyle}>
//       <h1>{pText[+toggle]}</h1>
//       <button style={{ fontSize: "2em" }} onClick={() => setToggle(!toggle)}>
//         {buttonText[+toggle]}
//       </button>
//       <h1>{dark ? "Dark" : "Light"} Mode is Enabled</h1>
//       <h2>
//         BackGround:{" "}
//         {dark ? darkStyle.backgroundColor : lightStyle.backgroundColor}
//       </h2>
//       <h2>Text Color: {dark ? darkStyle.color : lightStyle.color} </h2>
//       <button onClick={handleClick} style={{ fontSize: "2em" }}>
//         Switch to {dark ? "Light" : "Dark"} Mode
//       </button>
//     </div>
//   );
// }

// export default App;

// function square(nums) {
//   return nums.map((n) => n ** 2);
// }

// function evens(nums) {
//   return nums.filter((el) => el % 2 === 0);
// }
// console.log(square([1, 2, 3, 4, 5]));
// console.log(evens([1, 2, 3, 4, 5]));

// function mapDawoud(nums, fun) {
//   return nums.map(fun);
// }

// console.log(mapDawoud([1, 2, 3, 4, 5], (n) => n + 1));

// const names = ["dawoud", "hager", "khaled", "sarah"];
// function toUpperCase(names) {
//   return names.map((name) => name.toUpperCase());
// }

// console.log(toUpperCase(names));

// function sumPositivesOnly(nums) {
//   return nums.reduce((acc, cur) => {
//     if (cur > 0) {
//       return acc + cur;
//     }
//     return acc;
//   }, 0);
// }

// console.log(sumPositivesOnly([2, 1, 2, 3, 4, -1, -2]));

// function count(ar) {
//   return ar.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});
// }
// console.log(count(["apple", "apple", "ban", "ban", 1, 1, 2, 3, "orange"]));

// function longestWord(ar) {
//   return ar.reduce((ac, cur) => {
//     if (cur.length > ac.length) {
//       return cur;
//     } else return ac;
//   }, "");
// }
// console.log(longestWord(["ab", "a", "apple", "Hello1234", "apple2"]));

// function flatten(ar) {
//   return ar.reduce((acc, cur) => {
//     if (Array.isArray(cur)) {
//       return acc + flatten(cur);
//     } else {
//       return acc + cur;
//     }
//   }, 0);
// }

// console.log(flatten([[1, 2, [[[5]]], [3, [[[4]]]], [2]], 10, [[1,2]]]));

// function doubleOddSum(nums) {
//   return nums.reduce((ac, cur) => (Math.abs(cur) % 2 ? ac + 2 * cur : ac), 0);
// }
// console.log(doubleOddSum([1, 2, 3, 4, 5, 9, -1, -2, -4, -3]));

// function groupByAge(ar) {
//   return ar.reduce((ac, { name: n, age: a }) => {
//     ac[a] = ac[a] || [];
//     ac[a].push(n);
//     return ac;
//   }, {});
// }

// console.log(
//   groupByAge([
//     { name: "hager", age: 15 },
//     { name: "small khaled", age: 15 },
//     { name: "khaled", age: 25 },
//     { name: "sarah", age: 32 },
//     { name: "Muh", age: 28 },
//     { name: "Zeinab", age: 32 },
//     { name: "Ghada", age: 25 },
//   ])
// );
// let user = new Object({ name: "Dawoud" });
// user.age = 28;
// user["country"] = "Egypt";
// user.sayHello = function () {
//   // return "Hello " + user.name;
//   return "Hello, " + this.name + ".";
// };

// console.log(user);
// console.log(user.sayHello());
// console.log(user.age, user.country);

// myVar = 20;
// console.log(global.myVar);
// var x = 30;
// console.log(global.x);
// console.log(delete global.x);
// console.log(delete global.myVar);
// console.log(global.myVar, global.x);

// let user = {
//   name: "Dawoud",
//   age: 28,
//   doubleAge: function () {
//     return `Dear, ${this.name} ${this.age * 2} is your double age.`;
//   },
// };

// let copyObj = Object.create(user);
// console.log(user.doubleAge());
// console.log(copyObj.name, copyObj.age, copyObj.doubleAge());

// copyObj.name = "Hager";
// copyObj.age = 30;
// console.log(user.age, copyObj.age, copyObj.doubleAge());
// console.log(copyObj.__proto__, copyObj);

// let obj = { ...user };
// let obj = user;
// obj.age = 20;
// console.log(obj.age, user.age);

// let obj1 = { name: "Khaled", age: 20 };
// let obj2 = { country: "Germany" };

// let allObj = Object.assign(obj1, obj2, { say: "Hello" });
// console.log(allObj);

// let newObj = { ...obj1, name: "Gehad" };
// console.log(newObj);
// let obj3 = Object.assign(obj1, { name: "Good", say: "Hello, Good" });
// let obj3 = { name: "Good", age: 30 };
// console.log(Object.assign(obj3, obj1));

// function multiplyBy(num1) {
//   return function (num2) {
//     return num1 * num2;
//   };
// }
// let triple = multiplyBy(3);
// let double = multiplyBy(2);
// console.log(triple(10));
// console.log(triple(20));
// console.log(triple(4));
// console.log(double(33), double(1), double(3), double(22), double(13));

// const menu = [
//   { id: 1, name: "Margherita Pizza", category: "Main Course", price: 12 },
//   { id: 2, name: "Caesar Salad", category: "Starters", price: 8 },
//   { id: 3, name: "Chocolate Lava Cake", category: "Desserts", price: 7 },
//   { id: 4, name: "Grilled Salmon", category: "Main Course", price: 15 },
//   { id: 5, name: "Bruschetta", category: "Starters", price: 10 },
//   { id: 6, name: "Bbe hello", category: "Starters", price: 10 },
//   { id: 7, name: "Egg", category: "Main Course", price: 10 },
//   { id: 9, name: "Cola", category: "Drinks", price: 11 },
// ];

// let categories = [
//   { id: 0, category: "All", active: true, backColor: "red" },
//   { id: 1, category: "Main Course", active: false },
//   { id: 2, category: "Starters", active: false },
//   { id: 3, category: "Desserts", active: false },
//   { id: 4, category: "Drinks", active: false },
// ];

// function App() {
//   const [selected, setSelected] = useState(categories[0].category);
//   const [navCategories, setNavCategories] = useState(categories);

//   function handleButtonCategoryClick(id) {
//     setNavCategories(
//       navCategories.map((obj) => {
//         if (obj.id === id) {
//           setSelected(obj.category);

//           return { ...obj, active: true, backColor: "red" };
//         } else {
//           return { ...obj, active: false, backColor: "" };
//         }
//       })
//     );
//   }
//   function ListRender() {
//     let filtered;
//     if (selected === "All") {
//       filtered = menu.map((food) => (
//         <h3 key={food.id}>
//           name: {food.name} & category: {food.category} & price : {food.price}$
//         </h3>
//       ));
//     } else {
//       filtered = menu
//         .filter((food) => food.category === selected)
//         .map((food) => (
//           <h3 key={food.id}>
//             name: {food.name} & category: {food.category} & price : {food.price}
//             $
//           </h3>
//         ));
//     }
//     return filtered.length > 0 ? (
//       filtered
//     ) : (
//       <h1>Not matched filter for this category</h1>
//     );
//   }
//   return (
//     <div>
//       <h1>The list of the menu</h1>
//       {navCategories.map((cat) => (
//         <button
//           style={{
//             marginRight: "8px",
//             color: "darkblue",
//             fontSize: "1.5em",
//             background: cat.backColor,
//           }}
//           onClick={() => handleButtonCategoryClick(cat.id)}
//           key={cat.id}
//         >
//           {cat.category}
//         </button>
//       ))}
//       <ListRender />
//     </div>
//   );
// }

// export default App;

// const tasks = [
//   { id: 1, task: "Learn React", done: true },
//   { id: 2, task: "Build a project", done: false },
//   { id: 3, task: "Build a Game", done: false },
//   { id: 4, task: "Build a Marrige", done: true },
//   { id: 5, task: "Build a House", done: false },
//   { id: 6, task: "Buy a Car", done: true },
// ];
// const cat = [
//   { id: 0, name: "Done", active: false },
//   { id: 2, name: "Active", active: false },
//   { id: 1, name: "All", active: true },
// ];

// function App() {
//   const [chosen, setChosen] = useState(cat[0].name);
//   const [buttons, setButtons] = useState(cat);

//   function handleButtonClick(id) {
//     let newCat = cat.map((c) => {
//       if (c.id === id) {
//         setChosen(c.name);
//         return { ...c, active: true };
//       } else {
//         return { ...c, active: false };
//       }
//     });
//     setButtons(newCat);
//   }

//   function ListRender() {
//     let newTasks;

//     if (chosen === "All") {
//       newTasks = tasks;
//     } else if (chosen === "Done") {
//       newTasks = tasks.filter((el) => el.done);
//     } else if (chosen === "Active") {
//       newTasks = tasks.filter((el) => !el.done);
//     }

//     return newTasks.map((el) => (
//       <h1 key={el.id}>
//         {el.task} : {el.done ? "done" : "active"}
//       </h1>
//     ));
//   }

//   return (
//     <div>
//       <h1>Our Tasks To Do</h1>
//       {buttons.map((el) => (
//         <button
//           style={{
//             background: el.active ? "red" : "",
//             fontSize: "1.4em",
//             marginRight: "5px",
//             borderRadius: "5px",
//           }}
//           key={el.id}
//           onClick={() => handleButtonClick(el.id)}
//         >
//           {el.name}
//         </button>
//       ))}
//       <ListRender />
//     </div>
//   );
// }

// export default App;

// function getScoresAbove80(students) {
//   return students
//     .filter(({ score }) => score > 80)
//     .sort((a, b) => b.score - a.score)
//     .map(({ name }) => name);
// }

// const students = [
//   { name: "Alice", score: 75 },
//   { name: "Bob", score: 90 },
//   { name: "Charlie1", score: 85 },
//   { name: "Charlie2", score: 91 },
//   { name: "Charlie3", score: 89 },
//   { name: "David", score: 60 },
// ];

// console.log(getScoresAbove80(students));

// let User = {
//   id: 1,
//   name: "David",
//   age: 30
// };

// let newUser = Object.create(User);
// newUser.a = 100;
// console.log(newUser.id, newUser.name, newUser.__proto__);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 5));

// function checkEvenOrOdd(a) {
//   return a % 2 ? "Odd" : "Even";
// }
// let n = checkEvenOrOdd(7);
// let k = checkEvenOrOdd(8);
// console.log(n, k);

// function reverseString(str) {
//   let ar = str.split("");
//   let i = 0;
//   let k = ar.length - 1;

//   while (i < k) {
//     [ar[i], ar[k]] = [ar[k], ar[i]];
//     i++;
//     k--;
//   }
//   return ar.join("");
// }

// console.log(reverseString("Hello"), reverseString("Good234"));

// function maxOfThreeNumbers(a, b, c) {
//   return Math.max(a, b, c);
// }

// console.log(maxOfThreeNumbers(1, 2, 3));
// console.log(maxOfThreeNumbers(1, -1, -5));
// console.log(maxOfThreeNumbers(1, 10, 5));
// function toSeconds(minutes) {
//   if (isNaN(minutes)) {
//     return "invalid input for the function";
//   }
//   return minutes * 60;
// }
// console.log(toSeconds(5));
// console.log(toSeconds("5"));
// console.log(toSeconds("Hello"));
// console.log(isNaN("5"), isNaN("Good for logevity"));

// function countVowels(str) {
//   let vowels = new Set("aeiouAEIOU");
//   let count = 0;
//   for (let letter of str) {
//     if (vowels.has(letter)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("javascript Hello Good"));

// function removeDuplicates(ar) {
//   // return Array.from(new Set(ar));
//   return [...new Set(ar)];
// }
// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6]));

// function isPalindrome(str) {
//   let i = 0;
//   let k = str.length - 1;
//   while (i < k) {
//     if (str[i] !== str[k]) {
//       return false;
//     }
//     i++;
//     k--;
//   }
//   return true;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("12321"));
// console.log(isPalindrome("2madam"));

// function sum(ar) {
//   return ar.reduce((a, b) => a + b, 0);
// }

// console.log(sum([2, 4, 6, 3]));

// function factorial(n) {
//   if (n < 2) {
//     return n;
//   }
//   return factorial(n - 1) * n;
// }
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(2));
// console.log(factorial(1));

// let n = 10.97081;
// // console.log(Math.trunc(n), n % 1);
// let [int, decimal] = `${n}`.split(".");

// console.log(
//   "The integer part is:",
//   int,
//   `And the decimal part is : .${decimal}`
// );

// function missingNumber(ar) {
//   // let { min, max } = Math;

//   let sum = ar.reduce((a, b) => a + b, 0);

//   // let mn = min(...ar),
//   //   mx = max(...ar);
//   let mn = ar[0],
//     mx = ar[ar.length - 1];
//   let realSum = ((mn + mx) * mx) / 2;
//   return realSum - sum;
// }

// console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]));

// console.log(missingNumber([1, 2, 4, 5]));

// function fibonacciSeries(n, ar = [0, 1]) {
//   if (n < 3) {
//     return ar;
//   }
//   return fibonacciSeries(
//     n - 1,
//     ar.concat(ar[ar.length - 1] + ar[ar.length - 2])
//   );
// }

// console.log(fibonacciSeries(6));

// function fibonacci(n) {
//   let ar = [0, 1];
//   for (let i = 2; i < n; i++) {
//     let l = ar.length;
//     ar.push(ar[l - 1] + ar[l - 2]);
//   }
//   return ar;
// }
// console.log(fibonacci(7));

// function Card({ employee: { nam, age, job }, children }) {
//   //   let { nam, age, job } = employee;
//   return (
//     <>
//       <h1>Hello, {nam ? nam : "Stranger"}</h1>
//       <h1>age : {age}</h1>
//       <h1>job: {job}</h1>
//       {children}
//     </>
//   );
// }

// const tasks = ["learn React", "Solving some js problems"];
// function App() {
//   const [show, setShow] = useState(false);
//   function handeleClick() {
//     setShow(!show);
//   }
//   return (
//     <div>
//       <button onClick={handeleClick}>
//         {show ? "Hide Employee's Details" : "Show Employee's Details"}
//       </button>
//       {show ? (
//         <Card employee={{ nam: "Sam", age: 28, job: "Programmer" }}>
//           <ul>
//             {tasks.map((el) => (
//               <li>{el}</li>
//             ))}
//           </ul>
//         </Card>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default App;

// function flatten(ar) {
//   return ar.reduce((acc, cur) => {
//     // if (Array.isArray(cur)) {
//     //   return acc + flatten(cur);
//     // } else {
//     //   return acc + cur;
//     // }
//     return Array.isArray(cur) ? acc + flatten(cur) : acc + cur;
//   }, 0);
// }

// console.log(flatten([1, 2, [[[[9]]]], [3, 4], [[[5, 2, 10]]]]));

// function Card({ products }) {
//   return (
//     <>
//       <h1>Products</h1>
//       <ul>
//         {products.map((prod) => (
//           <li key={prod.id}>
//             {prod.name} - {prod.price + "$"}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// // function isAnagram(first, second) {
// //   return first.split("").sort().join("") === second.split("").sort().join("");
// // }
// function longestWord(sent) {
//   let words = sent.split(" ");
//   return words.reduce((acc, cur) => {
//     return cur.length > acc.length ? cur : acc;
//   }, "");
// }
// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <>
//       <h1>Likes: {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>like us</button>
//       <Card
//         products={[
//           { id: 1, name: "Laptop", price: 800 },
//           { id: 2, name: "Mac", price: 1000 },
//           { id: 3, name: "Car", price: 3000 },
//         ]}
//       />
//       <h1>
//         {
//           /* {String(isAnagram("silent", "listen"))} */
//           longestWord("i love programming and the jjjjjjjjjjjh")
//         }
//       </h1>
//     </>
//   );
// }

// export default App;

// const answers = [
//   {
//     id: 1,
//     question: "What is JS?",
//     answer_state: false,
//     answer:
//       "It is the language of the web for the front and back end application.",
//   },
//   {
//     id: 2,
//     question: "What is Java?",
//     answer_state: false,
//     answer:
//       "It is the language of the web for the front and back end application.",
//   },
//   {
//     id: 3,
//     question: "What is Python?",
//     answer_state: false,
//     answer:
//       "It is the language of the web for the front and back end application.",
//   },
// ];

// function App() {
//   const [lines, setLines] = useState(answers);
//   function handleClickAnswer(id) {
//     let newLines = lines.map((el) => {
//       if (el.id === id) {
//         console.log(id);
//         return { ...el, answer_state: !el.answer_state };
//       }
//       return { ...el, answer_state: false };
//     });
//     setLines(newLines);
//   }
//   return (
//     <ul>
//       {lines.map((el) => (
//         <li
//           onClick={() => handleClickAnswer(el.id)}
//           style={{
//             fontSize: "32px",
//             cursor: "pointer",
//             marginBottom: "8px",
//             background: "lightblue",
//           }}
//           key={el.id}
//         >
//           {!el.answer_state ? (
//             <p>{el.question}</p>
//           ) : (
//             <>
//               <p>{el.question}</p>
//               <p>{el.answer}</p>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default App;

// function sum(ar) {
//   return ar.reduce(
//     (acc, cur) => acc + (Array.isArray(cur) ? sum(cur) : cur),
//     // (acc, cur) => (Array.isArray(cur) ? acc + sum(cur) : acc + cur),
//     // if (Array.isArray(cur)) {
//     //   return acc + sum(cur);
//     // }
//     // return acc + cur;
//     0
//   );
// }

// console.log(
//   sum([
//     [1, 2],
//     [3, 4],
//     [-1, -2],
//     [5, 6, -1],
//   ])
// );

// function ShowNames({ ar , children}) {
//   return (
//     <>
//     {children}
//       <ol>
//         {ar.map((mem) => (
//           <li style={{"fontSize" : "32px"}} key={mem.id}>{mem.name}</li>
//         ))}
//       </ol>
//     </>
//   );
// }
// function App() {
//   return (
//     <ShowNames
//       ar={[
//         { id: 1, name: "Hager" },
//         { id: 2, name: "Dawoud" },
//         { id: 3, name: "Sarah" },
//         { id: 4, name: "Khaled" },
//         { id: 5, name: "Khoolod" },
//       ]}
//     >{<h1>Students:</h1>}</ShowNames>
//   );
// }

// export default App;

// function App() {
//   const [form, setForm] = useState({ name: "", password: "", show: false });
//   return (
//     <form
//       onSubmit={function (e) {
//         e.preventDefault();
//         if (form.password && form.name) {
//           setForm({ ...form, show: true });
//         }
//         // console.log(form);
//       }}
//     >
//       <label htmlFor="name">Name:</label>
//       <input
//         id="name"
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <label htmlFor="password">Password:</label>
//       <input
//         id="password"
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />
//       <button>Login</button>
//       {form.show && form.name && form.password && <h1>Welcome, {form.name}</h1>}
//     </form>
//   );
// }

// export default App;

// export default function App() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   function handleBuy() {
//     setPending((prev) => prev + 1);
//     setTimeout(() => {
//       setPending((prev) => prev - 1);
//       setCompleted((prev) => prev + 1);
//     }, 3000);
//   }
//   return (
//     <>
//       <h3>Pending: {pending}</h3>
//       <h3>Completed: {completed}</h3>
//       <button onClick={() => handleBuy()}>Buy</button>
//     </>
//   );
// }
