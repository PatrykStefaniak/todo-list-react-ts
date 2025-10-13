'use client'

import React from "react";
import IconButton from "./IconButton";

type TodoItemProps = {
    value: string,
    checked: boolean
};

export default function TodoItem({value, checked}: TodoItemProps) {
    const [text, setText] = React.useState(value);
    const [completed, setCompleted] = React.useState(checked);
    const [isEditing, setIsEditing] = React.useState(false);
    const inputEditRef = React.useRef<HTMLInputElement>(null);

    const onCheckChange = () => {
        setCompleted(!completed);
    };

    const onEdit = () => {
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

    const onDelete = () => {

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
                handler={onDelete}
                icon="icon-trash-can"
            />
        </td>
    </tr>;
};