'use client'

import React from "react";

type IconInputProps = {
    handler: Function
};

export default function InputButton({handler}: IconInputProps) {
    const [text, setText] = React.useState('');

    const onButtonClick = () => {
        handler(text);
    }

    const onInputChange = (e: any) => {
        setText(e.target.value);
    };

    return <>
        <input
            onChange={onInputChange}
            type="text"
            placeholder="Add your task"
            className="bg-white rounded-l-xl p-2 border-0"
        />
        <button onClick={onButtonClick} className="rounded-r-xl p-2 bg-white border-0 hover:bg-stone-100 cursor-pointer">
            <div className="icon icon-plus"></div>
        </button>
    </>;
};