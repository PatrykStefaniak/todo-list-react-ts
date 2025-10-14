'use client'

import InputButton from "@/components/InputButton";
import TodoItem from "@/components/TodoItem";
import { TodoItemModel } from "@/types/todo";
import { useEffect, useRef, useState } from "react";
import { Storage } from "@/lib/storage"

const storage = new Storage('todolist-nextjsts');

export default function Home() {
    const [addInputKey, setAddInputKey] = useState(0);
    const [items, setItems] = useState<TodoItemModel[]>([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        setItems(storage.getObject('todo-items') || []);
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }

        storage.setObject('todo-items', items);
    }, [items]);

    const onAddItem = (text: string) => {
        setItems((prevItems) => [
            ...prevItems,
            {
                id: crypto.randomUUID(),
                text: text,
                completed: false
            }
        ]);

        setAddInputKey((v) => v + 1);
    };

    const onItemDelete = (id: string) => {
        setItems((items) => items.filter(item => item.id !== id));
    }

    const onItemUpdate = (editedItem: TodoItemModel) => {
        setItems((items) => items.map(item => {
            return item.id === editedItem.id ? editedItem : item
        }));
    }

    return <main className='flex flex-col bg-yellow-100 w-1/2 m-auto my-[60px] p-[50px] rounded-4xl text-center font-[system-ui] text-lg'>
        <div className="flex justify-center">
            <h1 className="text-3xl mr-[8px] font-bold">ToDo List</h1>
            <div className="icon icon-pen-to-square !w-[34px] !cursor-default"></div>
        </div>
        <div className="flex justify-center mt-10">
            <InputButton
                handler={onAddItem}
                value={''}
                key={addInputKey}
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
                                id={item.id}
                                value={item.text}
                                checked={item.completed}
                                onDelete={onItemDelete}
                                onUpdate={onItemUpdate}
                            />;
                        })
                    }
                </tbody>
            </table>
        </div>
    </main>
}
