import React, { useState } from 'react'
import axios from 'axios';

//todo ile ilgili fonksiyonları custom hooksta topladık
const useAxios = () => {
    const [todos, setTodos] = useState<TodoType[]>([])//TodoType array olarak kabul ediyor
    const getTodos = async () => {
        const { data } = await axios.get<TodoType[]>("https://634ac3fc5df952851418480f.mockapi.io/api/todos")//gelen response a göre belirledik bu ne işe yarıyor gelen datanın fieldlarına erişebiliyoruz
        // console.log(data)
        setTodos(data)
    }
    const addTodo: AddFn = async (text) => {
        const newTodo = {
            task: text,
            isDone: false
        }
        const { data } = await axios.post<TodoType>("https://634ac3fc5df952851418480f.mockapi.io/api/todos", newTodo)
        if (data) {
            getTodos()
        }
    };

    const toggleTodo: ToggleFn = async (item) => {
        const updateTodo = {
            id: item.id,
            task: item.task,
            isDone: !item.isDone
        }
        const { data } = await axios.put<TodoType>(`https://634ac3fc5df952851418480f.mockapi.io/api/todos/${item.id}`, updateTodo)
        if (data) {
            getTodos()
        }
    }
    const deleteTodo: DeleteFn = async (id) => {
        try {
            const res = await axios.delete<TodoType>(`https://634ac3fc5df952851418480f.mockapi.io/api/todos/${id}`)
            console.log(res)
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }
    return { todos, getTodos, addTodo, deleteTodo, toggleTodo }
}

export default useAxios