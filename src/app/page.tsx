import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 ">
      <Link href="/posts" className="text-blue-500 hover:underline">
        View All Posts
      </Link>
    </main>
  );
}
