import { type FC, type ReactNode } from "react";

interface TodoProps {
  id: number;
  title: string;
  children: ReactNode;
  onDeleteTodo: (id: number) => void;
}

const Todo: FC<TodoProps> = ({ id, title, children, onDeleteTodo }) => {
  return (
    <article className="bg-stone-700 p-2 rounded-md">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      {children}
      <button
        onClick={() => onDeleteTodo(id)}
        className="bg-rose-600 px-4 rounded-sm hover:opacity-95">
        Delete
      </button>
    </article>
  );
};

export default Todo;
