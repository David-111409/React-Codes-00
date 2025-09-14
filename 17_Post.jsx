import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <input
        placeholder="Enter your id:"
        value={id}
        type="text"
        onChange={(e) => setId(e.target.value)}
      />
      <h1>{post.title || "not yet"}</h1>
      {/* <ol>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol> */}
    </div>
  );
}

export default App;
