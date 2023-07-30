import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App=()=>{
    return (
        <>
        <div className="main-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-100">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>    
                    <button><MoonIcon className="fill-orange-700"/></button>
                </div>                
                <form className="bg-white rounded-md overflow-hidden flex gap-4 items-center py-4 px-4 mt-8">
                    <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
                    <input 
                    type="text" 
                    placeholder="Create a new todo..." 
                    className="w-full text-gray-400 outline-none"/>
                </form>
            </header>
            <main className="container mx-auto px-4 mt-4">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4 border-b-gray-400 border-b">
                        <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
                        <button className="flex-noe"><CrossIcon/></button>
                    </article> 
                    <article className="flex gap-4 border-b-gray-400 border-b">
                        <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
                        <button className="flex-noe"><CrossIcon/></button>
                    </article> 
                    <article className="flex gap-4 border-b-gray-400 border-b">
                        <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
                        <button className="flex-noe"><CrossIcon/></button>
                    </article>  
                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>    
                        <button className="text-gray-400">Clear Completed</button>
                    </section>
                </div>  
          
            </main>
            <section className="container mx-auto px-4 bg-white mt-4">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4 font-bold text-gray-400">
                    <button className="hover:text-blue-600">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div> 
            </section>
            <p className="text-center mt-8">Drag and drog to reorder list</p>
        </div>
        </>)
}

export default App;