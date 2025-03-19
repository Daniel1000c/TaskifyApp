import React, { useState } from 'react'

const ListForm = ({createTodo}) => {
    const [value, setValue] = useState('')

    {/*Create form submit function */}
    const formSubmit = e => {
        //Prevent form default form submission
        e.preventDefault()

        createTodo(value)

        setValue('')
    }

    return (
        <form className='mb-4  font-primary w-full' onSubmit={formSubmit}>

            {/*Add text form input */}
            <input type="text" className='outline-none bg-transparent border border-white-500 p-4 w-[300px]
            text-white mb-8 rounded placeholder:text-gray-300'
            placeholder='What task do you want to add?' onChange={(e) => setValue(e.target.value)} value={value} name='task' id='task'/>


            {/*Create add button */}
            <button className='bg-[#D38027] inline-block border-none font-bold font-mono text-lg tracking-wide text-white cursor-pointer rounded-full ml-2 w-[100px] p-3'>Add</button>
        </form>
    )
}

export default ListForm