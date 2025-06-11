import ArticleCard from '@/components/ArticleCard';
import { articles as allArticles } from '@/data/data';

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog (App Router)</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleCard
              title={article.title}
              description={article.description}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

async function getArticles() {
  return allArticles;
}
