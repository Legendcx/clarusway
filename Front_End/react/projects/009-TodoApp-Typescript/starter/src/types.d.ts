//! todos state inin type ını belirledik.
interface TodoType {
  id: string | number;
  task: string;
  isDone: Boolean;
}

interface ITodoList{
  todos: TodoType[];
  toggleTodo:ToggleFn;
  deleteTodo:DeleteFn;
}

type AddFn = (text:string) => void;

type ToggleFn = (item:TodoType) => void;

type DeleteFn = (id:string | number) => void;