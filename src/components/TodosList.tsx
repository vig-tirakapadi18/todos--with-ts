import Todo from "./Todo";
import { type TodoType } from "../App";

interface TodosListProps {
  todos: TodoType[];
  onDeleteTodo: (id: number) => void;
}

const TodosList = ({ todos, onDeleteTodo }: TodosListProps) => {
  return (
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
  );
};

export default TodosList;
