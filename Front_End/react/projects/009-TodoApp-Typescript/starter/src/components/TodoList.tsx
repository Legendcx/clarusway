import React, {FC} from 'react'
import TodoListItem from './TodoListItem'



const TodoList:React.FC<ITodoList>= ({todos, toggleTodo, deleteTodo}) => {

  return (
    <ul>
     {
      todos.map((item)=> <TodoListItem key={item.id} item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)
     }
    </ul>
  )
}

export default TodoList