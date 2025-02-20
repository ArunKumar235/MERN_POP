import axios from "axios";
import { useState, useEffect } from "react";

const UseEffectAPI = () => {
  var [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log("Couldn't read data " + err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Use Effect API</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button
        onClick={() => {
          fetchPosts();
          console.log("Button Clicked");
        }}
      >
        Hello
      </button>
    </div>
  );
};

export default UseEffectAPI;
