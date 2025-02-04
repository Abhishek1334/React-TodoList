import AddTasks from "./AddTasks";
import TaskList from "./TaskList";

const TodoBox = () => {
	return (
		<div className="flex flex-col border-black  border-2 w-1/3 h-2/3 rounded-xl bg-gray-200">

			<h1 className=" h-15 text-2xl content-center text-center border-b-2 w-full">Tasks</h1>
			<AddTasks/>
			<TaskList />

		</div>
		)
}

export default TodoBox;
