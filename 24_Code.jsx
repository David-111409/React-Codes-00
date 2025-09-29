const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function MyApp() {
  let logged = true;
  // if (logged) {
  //   return (
  //     <>
  //       <h1>{user.name}</h1>
  //       <img
  //         src={user.imageUrl}
  //         alt={"Photo of " + user.name}
  //         style={{
  //           height: user.imageSize,
  //           width: user.imageSize,
  //           borderRadius: "50%",
  //         }}
  //       />
  //     </>
  //   );
  // } else return <h1>Please Log in with Acccount</h1>;
//   return logged ? (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         src={user.imageUrl}
//         alt={"Photo of " + user.name}
//         style={{
//           height: user.imageSize,
//           width: user.imageSize,
//           borderRadius: "50%",
//         }}
//       />
//     </>
//   ) : (
//     <h1>hello guest</h1>
//   );
 return logged && <h1>Your are an old user.</h1>
}

export default MyApp;

// another file to use map with list rendering
// const products = [
//   { title: "Cabbage", id: 1 },
//   { title: "Garlic", id: 2 },
//   { title: "Apple", id: 3 },
// ];

// let listItems = products.map((el) => <li key={el.id}>{el.title}</li>);
// function MyApp() {
//   return <ul>{listItems}</ul>;
// }

// export default MyApp;

