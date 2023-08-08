import { useState } from "react";

const TodoCreate = ({createTodo}) => {
    const [title, setTitle]=useState('');
    const handleSubmitAddTodo=(e)=>{
        e.preventDefault(); 
        if(!title.trim()){
            return setTitle('');
        }
       createTodo(title);
       return setTitle('');
    }
    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white dark:bg-gray-800 rounded-md overflow-hidden flex gap-4 items-center py-4 px-4 mt-8 transition duration-1000">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input 
            type="text" 
            placeholder="Create a new todo..." 
            className="w-full dark:bg-gray-800 text-gray-400 outline-none transition duration-1000"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
        </form>
    );
}

export default TodoCreate;