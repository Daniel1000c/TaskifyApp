import React , { useState } from 'react'
import ListForm from './ListForm'
import { v4 as uuidv4 } from 'uuid' //Import uuid identifier to create unique ids for each task
import Todo from './Todo'
uuidv4()

const TaskifyList = () => {

    {/*Add use state*/}
    const [toDoValue, setTodo] = useState([])

    {/*Create "createTodo" function*/}
    const createTodo = todo => {
        setTodo([...toDoValue, {id: uuidv4(), task: todo, isEditing: false}])
    }
    return (
        <div className='container bg-[#266dd3] mt-20 p-8 rounded-md'>
            
            {/*Add taskify title */}
            <h1 className='text-white font-bold font-mono tracking-wider text-4xl mb-4'>Taskify</h1>

            {/*Add list form input component */}
            <ListForm createTodo = {createTodo}/>

            {/*Add todo map*/}
            {toDoValue.map((todo, index) => (
                <Todo task={todo} key={index} />
            ))}
        </div>
    )
} 

export default TaskifyList