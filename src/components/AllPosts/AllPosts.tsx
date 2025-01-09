"use client";

import { useEffect, useState } from "react";
import LoadingComp from "../LoadingComponent";
import SinglePost from "../SinglePost";

function AllPosts() {
  const [posts, setPosts] = useState<
    { id: number; title: string; userId: number; body: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <div className="min-h-screen h-full flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Blog Posts: </h1>
          <div className="grid grid-cols-3 gap-3">
            {posts.map((post) => (
              <SinglePost key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AllPosts;
