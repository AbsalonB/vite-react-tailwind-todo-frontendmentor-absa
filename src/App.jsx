import CrossIcon from "./components/icons/CrossIcon";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import Todolist from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem('todos'))  
|| [
    {id:1,title:'Go to the gym', completed:true,},
    {id:2,title:'Complete course', completed:false,},
    {id:3,title:'Complete task', completed:false,},
];

const App=()=>{
    const [todos,setTodo] = useState(initialStateTodos);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos)); 
    },[todos]);

    const [filter,setFilter] = useState("all");

    const createTodo =(title)=>{
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed:false,
        }
        setTodo([...todos,newTodo]);
    }

    const removeTodo =(id)=>{
        setTodo(todos.filter((todo)=>todo.id!==id));
    }

    const completeTodo = (id) =>{
        setTodo(todos.map((todo)=>{
            if(todo.id===id){
                todo.completed=!todo.completed;
            }
            return todo;
        }))
    }

    const clearCompleted = ()=>{
        setTodo(todos.filter((todo)=>!todo.completed));
    }

    const getLeftItems = todos.filter((todo)=>!todo.completed).length;


    const filteredTodos = ()=>{
        switch(filter){
            case "all":
                return todos;
            case "active":
                return todos.filter((todo)=>!todo.completed);
            case "completed":
                return todos.filter((todo)=>todo.completed);
            default:
                return todos;
        }
    }

    const changeFilter = (filter)=>setFilter(filter);

    return (
        <>
        <div className="dark:bg-gray-800 main-h-screen 
        bg-[url('./assets/images/bg-mobile-light.jpg')] 
        bg-no-repeat bg-contain bg-gray-100 
        transition duration-1000 min-h-screen
        md:bg-[url('./assets/images/bg-desktop-light.jpg')]
        md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
       ">       
            <Header />
            <main className="container mx-auto px-4 mt-4 transition duration-1000 md:max-w-xl">                
                <TodoCreate createTodo={createTodo}/> 
                <Todolist todos={filteredTodos()} removeTodo={removeTodo} completeTodo = {completeTodo}/> 
                <TodoComputed getLeftItems={getLeftItems} clearCompleted={clearCompleted}/> 
                <TodoFilter filteredTodos={filteredTodos} changeFilter={changeFilter} filter={filter}/>
            </main>
            <p className="text-center mt-8 dark:text-gray-200 transition duration-1000">Drag and drog to reorder list</p>
        </div>
        </>)
}

export default App;