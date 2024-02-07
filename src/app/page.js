import TaskForm from "@/components/TodoComponents/TaskForm";
import TaskList from "@/components/TodoComponents/TaskList";

export default function Home() {
  return (
    <main className="p-20 bg-red-400 min-h-screen">
      <section className="bg-white p-10 w-full md:w-[75%] rounded-lg m-auto">
        <div>
          <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        </div>
        <TaskForm />
        <TaskList />
      </section>
    </main>
  );
}
