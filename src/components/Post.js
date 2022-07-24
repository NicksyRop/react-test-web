import React from "react";

const Post = ({ posts }) => {
  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
