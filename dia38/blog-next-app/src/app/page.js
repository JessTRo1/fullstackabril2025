import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Blog</h1>
      <p className="mt-4 text-lg">This is a simple blog application built with Next.js.</p>
    </main>
  );
}
