import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}
const PostDetail = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="flex flex-col ">
      <div>{data.title}</div>
      <div>{data.body}</div>
    </div>
  );
};

export default PostDetail;
