import Link from "next/link"

function Index(){
	return (
		<>
			<div>
			<nav className="flex justify-between sm:items-center flex-col sm:flex-row bg-gray-800 text-gray-300 p-4">

				<div className="flex flex-shrink-0 sm:mr-6">
					<h1 className="text-md uppercase text-bold border border-white rounded p-2 inline-block">Company Name</h1>
				</div>

				<div className="w-full mt-2 sm:mt-0">
					<div className="flex flex-col sm:flex-row">
						<Link href="/browse"><a className="block sm:inline-block ml-3 sm:ml-0 sm:mr-4 mt-2 sm:mt-0">Browse</a></Link>
						<a className="block sm:inline-block ml-3 sm:ml-0 sm:mr-4 mt-2 sm:mt-0">About</a>
					</div>
				</div>
			</nav>
			
				<h1 className="text-4xl text-center p-8 text-gray-800">Company Name</h1>
				
				<div className="flex justify-center mb-16 text-xs sm:text-base">
					<button className="border-b border-black px-2 sm:px-3 py-1">Log in</button>
					<span className="mx-3 pt-1">or</span>
					<button className="border-b border-black px-2 sm:px-3 py-1">Sign up</button>
				</div>
				
				<div className="max-w-xs sm:max-w-md mt-16 mx-auto p-8 sm:p-5 border border-gray-500 rounded">
					<p className="text-justify text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut imperdiet est. Duis nec diam condimentum, scelerisque nunc vitae, suscipit ante. Proin lacus lacus, ullamcorper eget pellentesque vel, commodo eget libero. Nam vulputate urna nec turpis ultricies, quis rhoncus libero volutpat. Pellentesque a ante ornare, congue velit id, auctor tellus. Phasellus sit amet nunc sit amet urna accumsan rhoncus scelerisque et ex. Phasellus lobortis sapien lorem, quis gravida felis laoreet elementum.
					</p>
				</div>
				
			</div>
		</>
	)	
}

export default Index