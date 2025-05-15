import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ todo: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).todo;

  // fetch post information
  const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
    res.json()
  );
  console.log(post);

  return {
    title: post.title,
    description: post.content,
    openGraph: {
      title: post.title,
      description: post.content,
      url: `https://nextjs-dashboard-two-sandy-84.vercel.app/todo/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content,
    },
  };
}

export default function Page({ params, searchParams }: Props) {
  return <div>dsqwd</div>;
}
