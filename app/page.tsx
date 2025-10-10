'use client'

import IconButton from "@/components/IconButton";
import InputButton from "@/components/InputButton";



export default function Home() {
    function onAddItem(text: string) {
        
    };

    return <main className='flex flex-col bg-yellow-100 w-1/2 m-auto my-[60px] p-[50px] rounded-4xl text-center font-[system-ui] text-lg'>
        <div className="flex justify-center">
            <h1 className="text-3xl mr-[8px] font-bold">ToDo List</h1>
            <div className="icon icon-pen-to-square !w-[34px] !cursor-default"></div>
        </div>
        <div className="flex justify-center mt-10">
            <InputButton handler={onAddItem}></InputButton>
        </div>
        <div>
            <div></div>
        </div>
        <div className="flex justify-center">
            <table className="w-[340px]">
                <tbody>
                    <tr className="group flex bg-white rounded-xl p-2 pl-6 mt-10 cursor-pointer">
                        <td className="flex-1 m-auto mr-3">
                            <input type="checkbox" className="hidden group-hover:block scale-180 cursor-pointer"></input>
                        </td>
                        <td className="flex-10 m-auto text-left">
                            Test todo item
                            <div className="hidden">
                                <InputButton></InputButton>
                            </div>
                        </td>
                        <td className="flex-1 m-auto">
                            <IconButton icon="icon-pen"></IconButton>
                        </td>
                        <td className="flex-1 m-auto">
                            <IconButton icon="icon-trash-can"></IconButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
}
