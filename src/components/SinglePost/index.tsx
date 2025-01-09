import { TPost } from "@/type";
import React from "react";
type props = {
  post: TPost;
};

function SinglePost({ post }: props) {
  return (
    <div className="flex flex-col border rounded-xl p-3 bg-white" key={post.id}>
      <h3 className="text-xl font-bold text-gray-900 capitalize">
        <a href={`/posts/${post.id}`}>{post.title}</a>
      </h3>
      <p>
        {post.body.charAt(0).toUpperCase() + post.body.slice(1).toLowerCase()}
      </p>
    </div>
  );
}

export default SinglePost;
