'use client';

export default function ArticleCard({ title, description }) {
  return (
    <article className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </article>
  );
}
