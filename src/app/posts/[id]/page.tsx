"use client"; // Ensures this component is only rendered on the client side
import LoadingComp from "@/components/LoadingComponent";
import SinglePost from "@/components/SinglePost";
import { TPost } from "@/type";
import React, { Usable, useEffect, useState } from "react";

type Props = {
  params: Usable<unknown>;
};

function ViewPost({ params }: Props) {
  const [post, setPost] = useState<TPost>({} as TPost);
  const [loading, setLoading] = useState<boolean>(true);

  // Unwrapping the params using React.use
  const { id }: any = React.use(params); // React.use() is used to unwrap async params

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch post");
          }
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  return <div>{loading ? <LoadingComp /> : <SinglePost post={post} />}</div>;
}

export default ViewPost;