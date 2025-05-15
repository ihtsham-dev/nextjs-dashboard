import { Photo } from "./lib/definitions";
import Image from "next/image";
import Link from "next/link";

async function getTodos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/photos/");
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
            <Image
              src={"/hero-mobile.png"}
              width={200}
              height={200}
              alt={todo?.title}
            />
          </div>
        </Link>
      ))}
    </main>
  );
}
