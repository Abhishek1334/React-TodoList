/* eslint-disable react/prop-types */

const InputTask = ({ newTask, handlechange, AddTask }) => {
  return (

    <div className="h-20 border-b-2 flex p-4 gap-3 ">

        <input type="text" id="task" value={newTask} placeholder="Enter Task..." onChange={handlechange} className='flex-1 border-2 p-3 rounded-sm'/>
        <button onClick={AddTask} className='w-20 border-2 rounded-xl hover:bg-gray-300 animation ease-in-out duration-300'><i className="fa-solid fa-add"></i></button>
    
    </div>

  )
}

export default InputTask