
const Title = () => {
	return (
		<div className= "flex justify-between border-b-2 h-1/8 p-3 items-end gap-2">

			<input type='text' className="border-1 w-4/5 rounded-sm content-center bg-gray-300 p-3" placeholder="What needs to be done?"/>
			<div className="w-auto flex gap-1 h-[85%] place-items-end text-2xl">
				<button className="aspect-square border-2 rounded-xl flex justify-center items-center size-full"><i className="fa-solid fa-check"></i></button>
				<button className="aspect-square border-2 rounded-xl flex justify-center items-center size-full"><i className="fa-solid fa-xmark"></i></button>
			</div>


		</div>
	)
}



export default Title;
