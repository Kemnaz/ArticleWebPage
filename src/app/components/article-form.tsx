// src\app\components\article-form.tsx
"use client";

import { useState } from "react";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");

  const add_article = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/Articles/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        text,
      }),
    });
    setTitle("");
    setDescription("");
    setText("");
  };
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={add_article} className="flex flex-col w-3/4">
        <h3 className="text-center mb-4">Write your own Article!</h3>
        <input
          className="border-2 mb-4 p-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border-2 mb-4 p-2"
          rows={2}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          className="border-2 mb-4 p-2"
          rows={10}
          placeholder="Contents of your Article"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="self-center bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Submit Article!
        </button>
      </form>
    </div>
  );
}
