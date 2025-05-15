import { Photo } from "@/app/lib/definitions";
import React, { FC } from "react";
import { Metadata } from "next";

interface Props {
  params: {
    todo: string;
  };
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

// This function must be exported
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.todo);

  return {
    title: post?.title,
    // You can add more metadata properties here
    description: `Details for photo ${post?.title}`,
    openGraph: {
      title: post?.title,
      description: `Details for photo ${post?.title}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: `Details for photo ${post?.title}`,
    },
  };
}

const Todo: FC<Props> = async ({ params }) => {
  const { todo } = params;
  const data: Photo = await getPost(todo);

  return <div>Todo: {data?.title}</div>;
};

export default Todo;
