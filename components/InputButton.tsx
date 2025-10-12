'use client'

import React from "react";

type IconInputProps = {
    value: string
    handler: (text: string) => void,
    buttonIcon?: string
    focusInput?: boolean
};

export default function InputButton(props: IconInputProps) {
    const {value, handler, buttonIcon, focusInput} = {...props};
    const [text, setText] = React.useState(value);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        handler(text);
    }

    const onInputChange = (e: any) => {
        setText(e.target.value);
    };

    React.useEffect(() => {
        focusInput && inputRef.current?.focus();
    }, [focusInput]);

    return <div className="flex">
        <input
            ref={inputRef}
            onChange={onInputChange}
            value={text}
            type="text"
            placeholder="Add your task"
            className="bg-white rounded-l-xl p-2 border-0"
        />
        <button 
            onClick={onButtonClick}
            className="rounded-r-xl p-2 bg-white border-0 hover:bg-stone-100 cursor-pointer"
        >
            <div className={"icon " + (buttonIcon || "icon-plus")}></div>
        </button>
    </div>;
};