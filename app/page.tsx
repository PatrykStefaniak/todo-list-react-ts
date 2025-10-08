export default function Home() {
    return <main className='flex flex-col bg-yellow-100 w-1/2 m-auto my-[60px] p-50 rounded-4xl '>
        <div className="flex justify-center">
            <h1>ToDo List</h1>
            <div className="icon icon-pen-to-square"></div>
        </div>
        <div>
            <input type="text" placeholder="Add your task" />
            <button>
                <div className="icon icon-plus"></div>
            </button>
        </div>
        <div>
            <div></div>
        </div>
        <div>
            <table>
            </table>
        </div>
    </main>
}
