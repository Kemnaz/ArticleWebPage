// src\app\articles\page.tsx
import Link from "next/link";
import CreateArticle from "../components/article-form";
async function getArticles() {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/Articles/records`,
    { cache: "no-cache" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <div>
      <div className=" grid grid-cols-3">
        {articles.map((article) => {
          return (
            <div className="border-4 border-gray-600 m-5 h-64 bg-gray-300">
              <Article key={article.id} article={article}></Article>
            </div>
          );
        })}
      </div>
      <CreateArticle></CreateArticle>
    </div>
  );
}

function Article({ article }: any) {
  const { id, title, description, created } = article || {};
  const formattedDate = new Date(created).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Link href={`/articles/${id}`}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="flex justify-center text-2xl">{title}</h2>
          <h4>Description: {description}</h4>
        </div>
        <p className="flex justify-start">Creation date: {formattedDate}</p>
      </div>
    </Link>
  );
}
