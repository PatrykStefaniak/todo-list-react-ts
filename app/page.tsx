export default function Home() {
    return <main className='flex flex-col bg-yellow-100 w-1/2 m-auto my-[60px] p-50 rounded-4xl text-center font-[system-ui] text-lg'>
        <div className="flex justify-center">
            <h1 className="text-3xl mr-[8px]">ToDo List</h1>
            <div className="icon icon-pen-to-square !w-[34px]"></div>
        </div>
        <div className="flex justify-center mt-10">
            <input type="text" placeholder="Add your task" className="bg-white rounded-l-xl p-2 border-0" />
            <button className="rounded-r-xl p-2 bg-white border-0 hover:bg-stone-100 hover:border-1 hover:border-l-0">
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
