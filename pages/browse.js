
function Browse(props){
	let nav_right = (<div className="border border-white my-auto">
					<a>Profile</a>
					<a>Profile</a>
					<a>Profile</a>
				</div>)
	
	return (
		<>
			<div className="w-full flex sm:flex-row justify-between sm:items-center bg-gray-800 text-gray-300 px-2 py-3 flex-grow">
				<nav className="flex flex-col sm:flex-row flex-grow">
					<a>Testing</a>
					<a>Testing</a>
				</nav>
				{nav_right}
			</div>
		</>
	)
}

export default Browse