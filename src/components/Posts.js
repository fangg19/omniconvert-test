import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <>
          <h2 key={post.title}>{post.title}</h2>
          <p key={post.details}>{post.details}</p>
        </>
      ))}
    </div>
  );
};

export default Posts;
