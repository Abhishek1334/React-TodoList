<<<<<<< HEAD

import './App.css'
import { useState, useEffect } from 'react'
import Title from "./components/Title"
import InputTask from './components/InputTask'
import TaskList from './components/TaskList'



function App() {
	const [newTask, setNewTask] = useState('')
	const [Tasks , setTasks] = useState([])


	useEffect(() => {
		const savedTasks = JSON.parse(localStorage.getItem('tasks'));
		if (savedTasks) {
			setTasks(savedTasks);
		}
	},[]);


	useEffect(() => {
		console.log("Updated tasks in local storage", Tasks)
		localStorage.setItem('tasks', JSON.stringify(Tasks));
	},[Tasks]);

	
	// Handle Task input changes
	const handlechange = (e) =>{
		setNewTask(e.target.value)
	}


	// Add a new task into Tasks array along with the completed boolean value
	const AddTask = () => {
		console.log(`New task: ${newTask} added.`)
		if (newTask.trim() === '') { 
		return
		}
		setTasks([...Tasks, { text: newTask.trim(), completed: false }])
		setNewTask('')
	}
	

	const toggleTask = (index) => {
		console.log(`Tasks at index:{index} status updated.`)
		setTasks(Tasks.map((item, i) => i === index ? { ...item, completed: !item.completed } : item))
		
		
	}

	const deleteTask = (index) => {
		console.log("Deleted task at index:",index)
		setTasks(Tasks.filter((_, i) => i !== index))
	}

	return (
	<div className="flex justify-center items-center h-screen">
		<div className='bg-gray-100 border-2 border-black h-3/4 w-1/4'>

		<Title/>
		<InputTask newTask={newTask} handlechange={handlechange} AddTask={AddTask} />

		<TaskList Task={Tasks} toggleTask={toggleTask}  deleteTask={deleteTask}/>

		</div>
	</div>
	)
}

export default App
=======
import TodoBox from "./components/TodoBox";

export default function App() {
	return (
		<TodoBox/>
	);
}
>>>>>>> 9b2983eff353aef113a4ac3d842a57feb8e55593
