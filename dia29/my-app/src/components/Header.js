'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full p-4 bg-gray-800 text-white flex flex-col items-center gap-2">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <p className="text-sm text-gray-300">Ruta actual: <strong>{pathname}</strong></p>
    </header>
  );
}
