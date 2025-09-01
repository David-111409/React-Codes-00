import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchDat = async () => {
      try {
        const fetchData = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = fetchData.data;
        setLoading(false);
        setUsers(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDat();
  }, []);

  const fetchUser = async () => {
    try {
      const fetchData = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = fetchData.data;
      setLoading(false);
      setUser(data);
      console.log(user.address?.city);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div>
        <h1>Users: </h1>
        <ul>
          {users.map((el) => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </ul>
        <input
          type="number"
          placeholder="Enter user id 1 - 10:"
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={() => fetchUser()}>Get user by id</button>
        <h3>user details:</h3>
        <h1>Name: {user.name}</h1>
        <h2>email : {user.email}</h2>
        <h3>user name: {user.username}</h3>
        <h3>Phone : {user.phone}</h3>
        <h4>city : {user.address?.city}</h4>
      </div>
    );
  }
};

export default Users;
