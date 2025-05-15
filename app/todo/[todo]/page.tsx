import { Photo } from "@/app/lib/definitions";
import React, { FC } from "react";

interface Props {
  params: Promise<{
    todo: string;
  }>;
}

async function getPost(slug: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${slug}`,
    {
      cache: "no-store", // or { next: { revalidate: 60 } }
    }
  );
  return res.json();
}
async function generateMetadata({ params }: Props) {
  const post = await getPost((await params).todo);
  return {
    title: post?.title,
  };
}
const Todo: FC<Props> = async ({ params }) => {
  const { todo } = await params;
  const data: Photo = await getPost(todo);

  return <div>Todo:{data?.title}</div>;
};

export default Todo;
