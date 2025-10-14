'use client'

import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import IconButton from "./IconButton";
import { type TodoItemModel } from "@/types/todo";

type TodoItemProps = {
    id: string
    value: string
    checked: boolean
    onDelete: (id: string) => void
    onUpdate: (item: TodoItemModel) => void
};

export default function TodoItem(props: TodoItemProps) {
    const {id, value, checked, onDelete, onUpdate} = props;
    const [text, setText] = useState(value);
    const [completed, setCompleted] = useState(checked);
    const [isEditing, setIsEditing] = useState(false);
    const inputEditRef = useRef<HTMLInputElement>(null);

    const onCheckChange = () => {
        setCompleted((v) => !v);

        onUpdate({
            id: id,
            completed: !completed,
            text: text
        });
    };

    const onEdit = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (isEditing) {
            const newValue = inputEditRef.current?.value || '';

            setIsEditing(false);
            setText(newValue);

            onUpdate({
                id: id,
                completed: completed,
                text: newValue
            });
        } else {
            setIsEditing(true);
        }
    };

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onDelete(id);
    };

    const onRowClick = () => {
        onCheckChange();
    };

    let textColumn;

    if (isEditing) {
        textColumn = <div>
            <input
                autoFocus
                className="bg-white rounded-l-xl p-2 border-0 w-1/1"
                value={text}
                onChange={onTextChange}
                onClick={(e) => e.stopPropagation()}
                ref={inputEditRef}
            />
        </div>
    } else {
        textColumn = <span className={"ml-2 " + (completed ? "line-through" : "")}>{text}</span>;
    }

    return <tr 
            className="group flex bg-white rounded-xl p-2 pl-6 mt-5 cursor-pointer h-15"
            onClick={onRowClick}
        >
        <td className="flex-1 m-auto mr-3 min-w-[20px]">
            <input
                checked={completed}
                onChange={onCheckChange}
                onClick={(e) => e.stopPropagation()}
                type="checkbox"
                className="hidden group-hover:block scale-180 cursor-pointer"
            />
        </td>
        <td className="flex-6 m-auto text-left">
            {textColumn}
        </td>
        <td className="flex-1 m-auto">
            {
                completed
                    ? null
                    : <IconButton
                        handler={onEdit}
                        icon={isEditing ? "icon-check" : "icon-pen"}
                    />
            }
        </td>
        <td className="flex-1 m-auto">
            <IconButton
                handler={handleDelete}
                icon="icon-trash-can"
            />
        </td>
    </tr>;
};