const TodoComputed = ({getLeftItems,clearCompleted}) => {
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
        <span className="text-gray-400">{getLeftItems} items left</span>    
        <button className="text-gray-400" onClick={e=>clearCompleted()}>Clear Completed</button>
    </section>
    );
}

export default TodoComputed;