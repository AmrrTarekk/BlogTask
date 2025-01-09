"use client";
import { useEffect, useState } from "react";
import LoadingComp from "../LoadingComponent";
import SinglePost from "../SinglePost";
import { TPost } from "@/type";

function AllPosts() {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <div className="min-h-screen h-full flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Blog Posts: </h1>

          <input
            type="text"
            placeholder="Search posts..."
            className="p-2 border rounded-md mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <SinglePost key={post.id} post={post} />
              ))
            ) : (
              <p>No posts found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AllPosts;
