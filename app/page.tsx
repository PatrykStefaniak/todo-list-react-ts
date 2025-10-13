'use client'

import InputButton from "@/components/InputButton";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

type ItemModel = {
    id: string
    text: string
    completed: boolean
}

export default function Home() {
    const [items, setItems] = useState<ItemModel[]>([]);

    const onAddItem = (text: string) => {
        setItems((prevItems) => {
            return [
                ...prevItems,
                {
                    id: crypto.randomUUID(),
                    text: text,
                    completed: false
                }
            ]
        });
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
        <div className="flex justify-center mt-10">
            <table className="w-[340px]">
                <tbody>
                    {
                        items.map((item) => {
                            return <TodoItem
                                key={item.id}
                                value={item.text}
                                checked={item.completed}
                            />;
                        })
                    }
                </tbody>
            </table>
        </div>
    </main>
}
