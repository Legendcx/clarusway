import React,{FC} from 'react'
import TodoListItem from './TodoListItem'


//React.FC<IToDoList> yani diyoruz ki bu bir reactFunctional componenttir props oalrak da TodoList interfaceine uygun olarak props gönderebilir hale getirdik.Props alan componentlerde React.FC yi belirtmemiz zorunlu



const TodoList:React.FC<ITodoList>= ({todos,toggleTodo,deleteTodo}) => {

  return (
    <ul>
      {
        todos.map((item)=> <TodoListItem key={item.id} item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)
      }
    </ul>
  )
}

export default TodoList