


import Link from "next/link"

function Browse(props){
	
	return (
		<>
	<nav className="flex justify-between flex-col shadow-ls sm:flex-row border-b-2 border-teal-500 bg-white-100 border-t-2 p-2">

			<div className="flex flex-shrink-0 items-center flex justify-center font-bold  border shadow-ls rounded-md text-5xl w-64   ">
				<a className="text-green-600 font-mono text-center " href="/">GRASSPART</a>
				</div>
		 
				<div className="w-2/3 h-20 p-4  flex justify-end text-white" >
					<input className="w-2/3 rounded-full items bg-gray-500 py-2 px-4 text-black" type="text" name="text" placeholder="Search..."/>
				</div>


		<div className="w-1/2 items-center mt-2 sm:mt-0 flex justify-end  flex space-x-5  ">
			<button class="bg-teal-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded"> LOGIN</button>
			<button class="bg-transparent hover:bg-teal-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"> Sign Up</button>
		</div>
		
	
	</nav>

	<div className="flex justify-center p-1">
		<div className="w-2/3 h-20 bg-gray-600 list-none flex justify-center rounded-lmd items-center  p-6 space-x-6 shadow-xl">
			<li><a className="bg-teal-700 hover:bg-gray-500 rounded-full text-center w-14 h-14 p-2 text-white shadow-lg" href="/home">HOME</a></li>
			<li><a className="bg-orange-700 hover:bg-gray-500 rounded-full text-center w-14 h-14 p-2 text-white shadow-lg"href="/home">SERVICES</a></li>
			<li><a className= "bg-green-500 hover:bg-gray-500 rounded-full text-center w-14 h-14 p-2 text-white shadow-lg" href="/home">BUY/SELL</a></li>
			<li><a className= "bg-gray-700 hover:bg-gray-500 rounded-full text-center w-14 h-14 p-2 text-white shadow-lg focus:outline-none focus:shadow-outline ..."href="/home">LEASE/RENT</a></li>
			<li><a className= "bg-purple-700 hover:bg-gray-500 rounded-full text-center w-14 h-14 p-2 text-white shadow-lg" href="/home">JOB HRING</a></li>
			<li><a className= "bg-pink-700 hover:bg-gray-500 rounded-full text-center w-14 h-14 p-2 text-white shadow-lg" href="/home">NEWS </a></li>
			</div>
	</div>		
		

	<div className=" flex justify-center bg-cover bg-white  h-full  divide-x  ">
		<div className=" w-1/2 max-w-lg h-screen bg-gray-300 bg-teal-100  border-t-4 border-teal-500">
			<h1>BUYERS HERE</h1>
		</div>
		<div className="w-1/2 max-w-lg  h-screen bg-gray-300 bg-teal-100  border-t-4 border-teal-500">
		<h1>SELLERS HERE</h1>
		</div>
	</div>	
		</>
	)
}




export default Browse