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
    const [focusEditInput, setFocusEditInput] = React.useState(false);

    const onCheckChange = () => {
        setCompleted(!completed);
    };

    const onConfirmEdit = (text: string) => {
        setIsEditing(false);
        setText(text);
        setFocusEditInput(false);
    };

    const onEdit = () => {
        setIsEditing(true);
        setFocusEditInput(true);
    };

    const onDelete = () => {

    };

    let textColumn;

    if (isEditing) {
        textColumn = <div>
            <InputButton
                value={text}
                handler={onConfirmEdit}
                buttonIcon="icon-check"
                focusInput={focusEditInput}
            />
        </div>
    } else {
        textColumn = checked
            ? <span className="line-through">text</span>
            : text;
    }

    return <tr className="group flex bg-white rounded-xl p-2 pl-6 mt-10 cursor-pointer h-15">
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
            {
                isEditing
                    ? null
                    : <IconButton
                        handler={onEdit}
                        icon="icon-pen"
                    />
            }
        </td>
        <td className="flex-1 m-auto">
            <IconButton
                handler={onDelete}
                icon="icon-trash-can"
            />
        </td>
    </tr>;
};