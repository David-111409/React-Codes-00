const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((el) => (
  <li style={{ color: el.isFruit ? "red" : "blue" }} key={el.id}>
    {el.title}
  </li>
));
function MyApp() {
  return <ul>{listItems}</ul>;
}

export default MyApp;
