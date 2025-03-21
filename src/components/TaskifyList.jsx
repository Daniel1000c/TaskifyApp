import React , { useState } from 'react'
import ListForm from './ListForm'
import { v4 as uuidv4 } from 'uuid' //Import uuid identifier to create unique ids for each task
import Todo from './Todo'
import EditTask from './EditTask'
uuidv4()

const TaskifyList = () => {

    {/*Add use state*/}
    const [toDoValue, setTodo] = useState([])

    {/*Create "createTodo" function*/}
    const createTodo = todo => {
        setTodo([...toDoValue, {id: uuidv4(), task: todo, isEditing: false}])
    }
    
    {/*Create "deleteTask" function */}
    const deleteTask = id => {
        setTodo(toDoValue.filter(todo => todo.id !== id))
    }

    {/*Create "editTask" function */}
    const editTask = id => {
        setTodo(
            toDoValue.map((todo) =>
                todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
            )
        )
    }

    {/*Create  update "editTodo" function */}
    const editTodo = (task, id) => {
       setTodo(
        toDoValue.map((todo) =>
            todo.id === id ? {...todo, task, isEditing: false} : todo
        )
       )
    }
    
    return (
        
        <div className=' bg-[#266dd3] mt-20 p-8 rounded-md sm:p-6 md:p-8 lg:p-10 xl:p-12'>
            
            {/*Add taskify title */}
            <h1 className='text-white font-bold font-mono tracking-wider text-4xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Taskify</h1>

            {/*Add list form input component */}
            <ListForm createTodo = {createTodo}/>

            {/*Add todo map*/}
            {toDoValue.map((todo, index) => (
                todo.isEditing ? (
                    <EditTask editTodo={editTodo} task={todo} key={index}/>
                ) : (
                    <Todo task={todo} key={index} deleteTask={deleteTask} editTask={editTask}/>
                )
            ))}
        </div>
    )
} 

export default TaskifyList