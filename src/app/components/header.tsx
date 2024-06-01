import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Science Articles</div>
          <nav className="flex gap-2">
            <Link href="/">
              <span className="text-white hover:text-gray-300">Home</span>
            </Link>
            <Link href="/articles">
              <span className="text-white hover:text-gray-300">Articles</span>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
