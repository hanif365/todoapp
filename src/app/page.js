import TaskForm from "@/components/TodoComponents/TaskForm";
import TaskList from "@/components/TodoComponents/TaskList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5 md:p-20 bg-[#edede9] min-h-screen">
      <section className="bg-white p-10 w-full md:w-[75%] rounded-lg m-auto">
        <div className="flex flex-col justify-center items-center pb-5">
          <Image src="/todo_logo.png" alt="todo_logo" width={150} height={150} />
          <h1 className="text-4xl font-bold mb-4">Todo List</h1>
        </div>
        <TaskForm />
        <TaskList />
      </section>
    </main>
  );
}
