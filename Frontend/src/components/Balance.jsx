export const Balance = ({ value}) => {
    return <div className="flex  ">
    <div className=" text-blue-400 ml-1 mt-2 font-thin ">
        Your balance:
    </div>
    <div className=" ml-2 px-2 font-semibold  text-sm rounded-md mt-2 bg-blue-100 text-blue-600 border">
        {value}
    </div>
</div>
}