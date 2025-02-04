const TaskBox = () => {
    return (
        <div className="flex w-full h-full bg-amber-50 justify-between">
            <div className="">
                <input type="checkbox" name="task" id="task" />
                <h2>Task</h2>
            </div>
            
            <div>
                <button><i className="fa-solid fa-pen"></i></button>
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}



const Task = () => {
    return (
        <div className="border-2 h-[3.5rem] flex flex-row "><TaskBox/></div>
    )
}

export default Task