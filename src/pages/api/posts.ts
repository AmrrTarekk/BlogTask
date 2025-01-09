import { NextApiRequest, NextApiResponse } from "next";

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch posts" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
