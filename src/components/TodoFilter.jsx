
const TodoFilter = ({changeFilter,filter}) => {  
    return (
        <section className="container mx-auto bg-white mt-4 rounded-md dark:bg-gray-800 transition duration-1000">
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 p-4 rounded-md flex justify-center gap-4 font-bold text-gray-400 transition duration-1000">
                <button className={filter==="all"? "text-blue-600":undefined} onClick={()=>{changeFilter("all");}}>All</button>
                <button className={filter==="active"?"text-blue-600":undefined} onClick={()=>{changeFilter("active");}}>Active</button>
                <button className={filter==="completed"?"text-blue-600":undefined} onClick={()=>changeFilter("completed")}>Completed</button>
            </div> 
        </section>
    );
}

export default TodoFilter;