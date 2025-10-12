'use client'

import IconButton from "@/components/IconButton";
import InputButton from "@/components/InputButton";
import TodoItem from "@/components/TodoItem";

export default function Home() {
    function onAddItem(text: string) {
        
    };

    return <main className='flex flex-col bg-yellow-100 w-1/2 m-auto my-[60px] p-[50px] rounded-4xl text-center font-[system-ui] text-lg'>
        <div className="flex justify-center">
            <h1 className="text-3xl mr-[8px] font-bold">ToDo List</h1>
            <div className="icon icon-pen-to-square !w-[34px] !cursor-default"></div>
        </div>
        <div className="flex justify-center mt-10">
            <InputButton
                handler={onAddItem}
                value={""}
            />
        </div>
        <div>
            <div></div>
        </div>
        <div className="flex justify-center">
            <table className="w-[340px]">
                <tbody>
                    <TodoItem
                        value={"testing"}
                        checked={false}
                    />
                </tbody>
            </table>
        </div>
    </main>
}
