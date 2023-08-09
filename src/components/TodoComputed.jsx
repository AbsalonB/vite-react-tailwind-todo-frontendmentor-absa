const TodoComputed = ({computedItemsLeft,clearCompleted}) => {
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition duration-1000">
        <span className="text-gray-400 dark:text-gray-200 transition duration-1000">{computedItemsLeft} items left</span>    
        <button className="text-gray-400 dark:text-gray-200 transition duration-1000" onClick={e=>clearCompleted()}>Clear Completed</button>
    </section>
    );
}

export default TodoComputed;