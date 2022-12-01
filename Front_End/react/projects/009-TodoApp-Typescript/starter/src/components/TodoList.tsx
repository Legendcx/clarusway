import React, {FC} from 'react'
import TodoListItem from './TodoListItem'



const TodoList:React.FC<ITodoList>= ({todos}) => {
  return (
    <ul>
     {
      todos.map((item)=> <TodoListItem key={item.id} item={item}/>)
     }
    </ul>
  )
}

export default TodoList