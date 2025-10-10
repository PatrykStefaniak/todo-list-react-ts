type IconInputProps = {
};

export default function InputButton({}: IconInputProps) {
    return <>
        <input type="text" placeholder="Add your task" className="bg-white rounded-l-xl p-2 border-0" />
        <button className="rounded-r-xl p-2 bg-white border-0 hover:bg-stone-100 hover:border-1 hover:border-l-0">
            <div className="icon icon-plus"></div>
        </button>
    </>;
};