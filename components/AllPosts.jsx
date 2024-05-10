import React, { useEffect } from "react";
import { getAllPosts } from "../utils/action";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import { formatRevalidate } from "next/dist/server/lib/revalidate";

const AllPosts = () => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
    refetchInterval: 1000,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [refetch]);
  //console.log(data);
  return (
    <>
      {isPending ? (
        <span className=" loading"></span>
      ) : (
        <div className="mt-12">
          {data.map((post) => {
            return (
              <PostCard
                key={post.id}
                post={{ ...post, createdAt: formatRevalidate(post.createdAt) }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default AllPosts;
