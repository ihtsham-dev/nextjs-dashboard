import { Photo } from "./lib/definitions";
import Image from "next/image";
import Link from "next/link";

async function getTodos() {
  const data = await fetch("https://api.vercel.app/blog");
  return data.json();
}
export default async function Page() {
  const todos: Photo[] = await getTodos();

  return (
    <main className="flex min-h-screen flex-col p-6 text-black">
      {todos?.map((todo: Photo) => (
        <Link href={`/todo/${todo?.id}`}>
          <div className="" key={todo?.id}>
            <p className="text-black" key={todo?.id}>
              {todo?.title}
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
}
