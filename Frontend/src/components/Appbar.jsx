import { Balance } from "../components/Balance"
export const Appbar = ({value}) => {
    return<div className="shadow h-14 flex justify-between bg-slate-100">
    <div className="flex flex-col justify-center font-extrabold  h-full ml-2 font-mono text-2xl text-green-500 italic">
     💸freepay
    </div>
    <div className="flex">
        <div className="flex flex-col font-thin text-blue-400 justify-center h-full mr-4">
            Hola,
        </div>
        <div className="rounded-full h-8 w-8 bg-slate-200 flex justify-center mt-3 mr-4">
            <div className="flex flex-col justify-center h-full text-sm font-bold">
            {value}
            </div>
        </div>
    </div>
</div>
}