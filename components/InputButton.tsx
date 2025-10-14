'use client'

import { useRef, useState } from "react";

type IconInputProps = {
    value: string
    handler: (text: string) => void,
    buttonIcon?: string
};

export default function InputButton(props: IconInputProps) {
    const {value, handler, buttonIcon} = props;
    const [text, setText] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        handler(text);
    }

    return <div className="flex">
        <input
            ref={inputRef}
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Add your task"
            className="bg-white rounded-l-xl p-2 border-0 w-[170px]"
        />
        <button 
            onClick={onButtonClick}
            className="rounded-r-xl p-2 bg-white border-0 hover:bg-stone-100 cursor-pointer"
        >
            <div className={"icon " + (buttonIcon || "icon-plus")}></div>
        </button>
    </div>;
};