import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-slate-600 px-6 py-2 rounded-lg hover:bg-slate-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
