/* eslint-disable react/prop-types */

function TaskList({Task, toggleTask,deleteTask}) {
    return (
        <ul className='px-2 py-3 overflow-y-auto h-[34.5rem]'>
			
			{Task.map((item, index) => (
			
			<li key={index}  className="bg-gray-200 flex gap-3 w-full min-h-12 mb-3 items-center justify-between px-4 border-1 border-gray-300 rounded-lg">
			
				<div className='flex gap-4 text-lg w-3/4'>
					<input type="checkbox" checked={item.completed} onChange={() => toggleTask(index)}
                            className='cursor-pointer'/>
					<p className={`${item.completed ? 'line-through text-gray-500' : ''}`}>{item.text}</p>
				</div>

				<div className='flex gap-3 justify-center items-stretch '>

					<button className='bg-gray-400 rounded-2xl size-8 content-center hover:bg-gray-300 animation ease-in-out duration-300' onClick={() => deleteTask(index)}>
					<i className="fa-solid fa-trash "></i>
					</button>

				</div>
			</li>
			))}
		</ul>
    )
}

export default TaskList;