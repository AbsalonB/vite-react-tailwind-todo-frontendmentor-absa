
const TodoFilter = ({changeFilter,filter}) => {  
    return (
        <section className="container mx-auto bg-white mt-4 rounded-md">
            <div className="bg-white p-4 rounded-md flex justify-center gap-4 font-bold text-gray-400">
                <button className={filter==="all"? "hover:text-blue-600":undefined} onClick={()=>{changeFilter("all");}}>All</button>
                <button className={filter==="active"?"hover:text-blue-600":undefined} onClick={()=>{changeFilter("active");}}>Active</button>
                <button className={filter==="completed"?"hover:text-blue-600":undefined} onClick={()=>changeFilter("completed")}>Completed</button>
            </div> 
        </section>
    );
}

export default TodoFilter;