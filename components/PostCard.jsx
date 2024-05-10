import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="card border mt-8 ">
      <div className="card-body">
        <h2 className="card-title">{post.email}</h2>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
