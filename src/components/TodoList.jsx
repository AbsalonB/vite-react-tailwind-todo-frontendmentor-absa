import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo,completeTodo}) => { 
    return (
        <div className="bg-white rounded-md [&>article]:p-4 mt-8">
            {
               todos.map((todo)=>(<TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>))  
            }
    </div>  
    );
}

export default TodoList;