'use client'

type IconButtonProps = {
    icon: string,
    buttonCls?: string
};

export default function IconButton({icon, buttonCls = ''}: IconButtonProps) {
    return (
        <button className={buttonCls + ' rounded-2xl p-2 bg-white border-0 hover:bg-stone-100 cursor-pointer'}>
            <div className={'w-50 icon ' + icon}></div>
        </button>
    );
}