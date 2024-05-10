"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import AllPosts from "./AllPosts";
import { createPost } from "../utils/action";
import { toast } from "react-hot-toast";

const Posts = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (text) => await createPost(text),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);
    toast.success("Post created successfully!");
    setText("");
  };

  console.log(text);

  return (
    <div className="grid grid-row-[auto, 1fr]">
      <form onSubmit={handleSubmit} className="pb-12">
        <div className="mt-12 join w-full">
          <input
            type="text"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
            placeholder="Tell me what's on your mind..."
            className="input-bordered join-item w-full"
          />
          <button type="submit" className="btn btn-primary join-item">
            Post
          </button>
        </div>
      </form>
      <AllPosts />
    </div>
  );
};

export default Posts;
