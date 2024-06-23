import Header from "./components/Header";
import image from "./assets/image.svg";
import { useState } from "react";
import TodosList from "./components/TodosList";
import NewTodo from "./components/NewTodo";

export type TodoType = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodoHandler = (title: string, summary: string) => {
    setTodos((prevTodos) => {
      const newTodo: TodoType = {
        id: Math.random(),
        title: title,
        description: summary,
      };
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="bg-stone-900 w-[40%] mx-auto mt-[5%] text-white p-6 rounded-lg shadow-2xl overflow-auto max-h-[90vh]">
      <Header image={{ src: image, alt: "Illustration" }}>
        <h1 className="text-3xl font-bold text-emerald-500">YOUR TODOS</h1>
      </Header>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodosList
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
      />
    </main>
  );
};

export default App;
