import Todo from "./Todo";
import { type TodoType } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

interface TodosListProps {
  todos: TodoType[];
  onDeleteTodo: (id: number) => void;
}

const TodosList = ({ todos, onDeleteTodo }: TodosListProps) => {
  if (todos.length === 0) {
    return (
      <InfoBox mode="HINT">
        <p className="border-2 border-emerald-500 px-6 py-4 mt-4 rounded-md text-center">
          You have no course goals yet. Start adding one!
        </p>
      </InfoBox>
    );
  }

  let waringBox: ReactNode;
  if (todos.length >= 5) {
    waringBox = (
      <InfoBox mode="WARNING">
        <p className="border-4 border-amber-500 px-6 py-4 rounded-md text-center">
          You are collecting too many todos. Please don't put too many todos on
          your plate!
        </p>
      </InfoBox>
    );
  }

  return (
    <>
      {waringBox}
      <ul className="flex gap-2 flex-col mt-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              id={todo.id}
              title={todo.title}
              key={todo.id}
              onDeleteTodo={onDeleteTodo}>
              <p className="mb-2">{todo.description}</p>
            </Todo>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodosList;
