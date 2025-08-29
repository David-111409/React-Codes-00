import { useState } from "react";

let user = {
  name: "Hager",
  age: 15,
  address: {
    country: "EGY",
    city: "Nassr",
  },
};

const UpdateName = () => {
  const [obj, setObj] = useState(user);
  const editName = () => setObj((prev) => ({ ...prev, name: "Khaled" }));
  const editage = () => setObj((prev) => ({ ...prev, age: prev.age + 1 }));
  const editBoth = () =>
    setObj((prev) => ({ ...prev, name: "Khaled", age: 25 }));
  const editCity = () =>
    setObj((prev) => ({
      ...prev,
      address: { ...prev.address, city: "Macca" },
    }));

  const editCountry = () => setObj((prev) => ({ ...prev , address: {...prev.address, country: "KSA"}}));
  return (
    <>
      <p>Name : {obj.name}</p>
      <p>Age : {obj.age}</p>
      <p>Country : {obj.address.country}</p>
      <p>City : {obj.address.city}</p>

      <button onClick={() => editName()}>Edit name</button>
      <button onClick={editage}>Edit age</button>
      <button onClick={editBoth}>Edit both</button>
      <button onClick={editCity}>Edit city</button>
      <button onClick={editCountry}>Edit country</button>
    </>
  );
};

export default UpdateName;
