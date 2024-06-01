// src\app\articles\[id]\page.tsx
async function getArticle(articleID: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/Articles/records/${articleID}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Article({ params }: any) {
  const article = await getArticle(params.id);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-between h-full border-4 border-gray-400 bg-gray-300 w-3/6 ">
        <div>
          <h1 className="flex justify-center text-3xl">{article.title}</h1>
          <h4>{article.text}</h4>
        </div>
        <p className="flex justify-start">{article.created}</p>
      </div>
    </div>
  );
}
