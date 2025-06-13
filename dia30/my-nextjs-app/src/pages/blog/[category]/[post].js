import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { category, post } = router.query;

  return (
    <div>
      <h1>Post del Blog</h1>
      <p>Categoría: {category}</p>
      <p>Post: {post}</p>
    </div>
  );
}
