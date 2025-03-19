import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">BERA TECH API BASE</h1>
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
      </div>
    </nav>
  );
}