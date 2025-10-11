'use client'

import React from "react";
import IconButton from "./IconButton";
import InputButton from "./InputButton";

type TodoItemProps = {
    value: string,
    checked: boolean
};

export default function TodoItem({value, checked}: TodoItemProps) {
    const [text, setText] = React.useState(value);
    const [completed, setCompleted] = React.useState(checked);
    const [isEditing, setIsEditing] = React.useState(false);

    const onCheckChange = () => {
        setCompleted(!completed);
    };

    const onConfirmEdit = (text: string) => {
        setIsEditing(false);
        setText(text);
    };

    const onEdit = () => {
        setIsEditing(true);
    };

    const onDelete = () => {

    };

    return <tr className="group flex bg-white rounded-xl p-2 pl-6 mt-10 cursor-pointer">
        <td className="flex-1 m-auto mr-3">
            <input
                checked={checked}
                onChange={onCheckChange}
                type="checkbox"
                className="hidden group-hover:block scale-180 cursor-pointer"
            />
        </td>
        <td className="flex-10 m-auto text-left">
            {
                isEditing
                    ? <div>
                        <InputButton
                            value={text}
                            handler={onConfirmEdit}
                        />
                    </div>
                    : checked
                        ? <span className="line-through">text</span>
                        : text
            }
        </td>
        <td className="flex-1 m-auto">
            <IconButton
                handler={onEdit}
                icon="icon-pen"
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