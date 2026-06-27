import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bgLight">
      <div className="text-center px-6">
        <h1 className="text-7xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-textDark mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-accent-500 text-bgDark font-bold rounded-lg hover:bg-accent-400 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
