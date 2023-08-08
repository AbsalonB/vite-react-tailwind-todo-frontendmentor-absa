import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
const TodoItem = ({todo, removeTodo,completeTodo}) => {
    const {id,title,completed} = todo; 
    const gradient ='bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center';
    const blank='inline-block';
    return (
        <article className="flex gap-4 border-b-gray-400 border-b dark:bg-gray-800 transition duration-1000"> 
            <button className={`flex-none rounded-full border-2 w-5 h-5 ${completed?gradient:blank}`}
             onClick={e=>completeTodo(id)} >
               { completed && <CheckIcon/>}
            </button>
            <p className={`text-gray-600 dark:text-gray-200 grow ${completed && 'line-through'}`}>{title}</p>
            <button className="flex-noe" onClick={e=>removeTodo(id)}><CrossIcon/></button>
        </article> 
    );
}

export default TodoItem;