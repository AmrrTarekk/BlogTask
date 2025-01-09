import type { Metadata } from "next";
import "../styles/global.scss";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Blog homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-4">
            Welcome to My Blog
          </h1>
        </header>
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
