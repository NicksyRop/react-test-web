import React from "react";
import Post from "./components/Post.js";
import useFecth from "./useFetch";

const Posts = () => {
  const { data, isPending, error } = useFecth(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      {error && <h3>{error}</h3>}
      {isPending && <div>Loading.....</div>}
      {data && <Post posts={data} />}
    </div>
  );
};

export default Posts;
