//! todos state inin type ını belirledik.
interface TodoType {
  id: string | number;
  task: string;
  isDone: Boolean;
}

interface ITodoList{
  todos: TodoType[];
}