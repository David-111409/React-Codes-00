import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);
  const [show, setShow] = useState(false);
  // https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    // const fet = fetch("https://jsonplaceholder.typicode.com/users");
    // fet.then((res) => res.json()).then((data) => setUsers(data));

    const fetchDat = async () => {
      try {
        const fetchData = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = fetchData.data;
        setLoading(false);
        setUser(data);
        console.log(user);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDat();
  }, [id]);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div>
        <h1>choose the id for the user to get it:</h1>
        <input
          type="text"
          placeholder="write id:"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    );
    // return <ul>
    // {users.map((el) => {
    //   return (
    //     <ul key={el.id}>
    //       <li>id : {el.id}</li>
    //       <ul>
    //         <li>name : {el.name}</li>
    //         <li>username : {el.username}</li>
    //         <li>address : {el.address.city}</li>
    //       </ul>
    //     </ul>
    //   );
    // })}
    //   </ul>
  }
};

export default Users;
