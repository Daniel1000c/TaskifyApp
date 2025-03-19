import React from "react"
import {AiFillEdit} from "react-icons/ai" //Import edit icon
import {BsFillTrashFill} from "react-icons/bs" //Import Trash Icon

const Todo = ({task}) => {
    return (
        <div className="flex justify-between items-center bg-[#1b263b] text-white py-3 px-4 rounded-md
        mb-1 cursor-pointer">
            <p className="font-serif text-lg">{task.task}</p>
            <div className="flex items-center gap-x-4">
                <AiFillEdit className="text-xl"/>
                <BsFillTrashFill className="text-xl"/>
            </div>
        </div>
    )
}

export default Todo