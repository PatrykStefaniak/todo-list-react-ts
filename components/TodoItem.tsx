'use client'

import { useState, useRef } from "react";
import IconButton from "./IconButton";
import { TodoItem as TodoItemType } from "@/types/todo";

type TodoItemProps = {
    value: string
    checked: boolean
    onDelete: (id: string) => void
    onUpdate: (item: TodoItemType) => void
};

export default function TodoItem(props: TodoItemProps) {
    const {value, checked, onDelete, onUpdate} = {...props};
    const [text, setText] = useState(value);
    const [completed, setCompleted] = useState(checked);
    const [isEditing, setIsEditing] = useState(false);
    const inputEditRef = useRef<HTMLInputElement>(null);

    const onCheckChange = () => {
        setCompleted(!completed);
    };

    const onEdit = (e: any) => {
        if (isEditing) {
            setIsEditing(false);
            setText(inputEditRef.current?.value || '');
        } else {
            setIsEditing(true);
            inputEditRef.current?.focus();
        }
    };

    const onTextChange = (e: any) => {
        setText(e.target.value);
    };

    const handleDelete = (e: any) => {
        onDelete(e.target.key);
    };

    let textColumn;

    if (isEditing) {
        textColumn = <div>
            <input
                value={text}
                onChange={onTextChange}
                ref={inputEditRef}
            />
        </div>
    } else {
        textColumn = checked
            ? <span className="line-through">text</span>
            : text;
    }

    return <tr className="group flex bg-white rounded-xl p-2 pl-6 mt-5 cursor-pointer h-15">
        <td className="flex-1 m-auto mr-3 min-w-[20px]">
            <input
                checked={checked}
                onChange={onCheckChange}
                type="checkbox"
                className="hidden group-hover:block scale-180 cursor-pointer"
            />
        </td>
        <td className="flex-6 m-auto text-left">
            {textColumn}
        </td>
        <td className="flex-1 m-auto">
            <IconButton
                handler={onEdit}
                icon={isEditing ? "icon-check" : "icon-pen"}
            />
        </td>
        <td className="flex-1 m-auto">
            <IconButton
                handler={handleDelete}
                icon="icon-trash-can"
            />
        </td>
    </tr>;
};