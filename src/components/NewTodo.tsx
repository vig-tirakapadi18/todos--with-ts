import { useRef, type FormEvent } from "react";

interface INewGoalProps {
  onAddTodo: (title: string, summary: string) => void;
}

const NewTodo = ({ onAddTodo }: INewGoalProps) => {
  const todoTitleRef = useRef<HTMLInputElement>(null);
  const todoSummaryRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputTodoTitle = todoTitleRef.current!.value;
    const inputTodoSummary = todoSummaryRef.current!.value;

    event.currentTarget.reset();
    onAddTodo(inputTodoTitle, inputTodoSummary);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">TODO TITLE</label>
        <input
          id="title"
          type="text"
          className="block w-full rounded-sm bg-emerald-100 text-black px-2"
          ref={todoTitleRef}
        />
      </div>
      <div className="my-2">
        <label htmlFor="summary">SHORT SUMMARY</label>
        <input
          id="summary"
          type="text"
          className="block w-full rounded-sm bg-emerald-100 text-black px-2"
          ref={todoSummaryRef}
        />
      </div>
      <div>
        <button className="bg-emerald-500 px-8 py-1 mt-2 rounded-full hover:opacity-95">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
