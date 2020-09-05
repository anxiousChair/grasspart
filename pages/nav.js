import Link from "next/link"

function Index(){
	return (
		<>
			<div>
			<nav className="flex justify-between flex-col sm:flex-row border-b-2 border-green-100 bg-white-100 text-black-300 p-4">

				<div className="flex flex-shrink-0 md:mr-6">
					<h1 className="text-md uppercase text-bold border border-green rounded p-2 inline-block bg-red-700 text-red-700">Company Name</h1>
				</div>

					<input className="bg-gray-100" type="text" name="text" placeholder="Search..."/>
				<div className="w-full items-center mt-2 sm:mt-0  flex justify-end bg-green-100 sm:mr8">
					
					<div class="flex space-x-20">
					<img className="w-12" src="/home.png" alt="home" />
					<img className="w-12" src="/menu.jpg" alt="notify" />
					<img className="w-12" src="/notification.png" alt="notify" />
					</div>
				</div>

				<div className="w-1/2 items-center mt-2 sm:mt-0 flex justify-end bg-green-100 flex space-x-5  ">
				<button class="bg-green-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded">
 					 LOGIN
					</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
  					Sign Up
					</button>
					</div>
					<div className="w-1/5 items-center mt-2 sm:mt-0 flex justify-center ">	
					<div className=" rounded-full h-16 w-16 flex items-center justify-center bg-blue-500 text-white ">P</div>
					</div>
					
			</nav>
			
				<h1 className="text-4xl text-center p-20 text-gray-800 bg-gree-700">ADDS NI SYA DRI</h1>
				
			
 				 <div class="flex flex-no-wrap bg-gray-200 flex justify-center ">
  					<div class="w-1/5 flex-none p-8">
  				<div class="text-gray-700 text-center bg-gray-400 p-20">TOP SEARCH</div>
  				</div>
  					<div class="w-1/5 flex-none p-8">
   				<div class="text-gray-700 text-center bg-gray-400 p-20">TOP SEARCG</div>
  				</div>
  					<div class="w-1/5 flex-none p-8">
    			<div class="text-gray-700 text-center bg-gray-400 p-20">TOP SEARCH</div>
  					</div>
					  <div class="w-1/5 flex-none p-8">
    			<div class="text-gray-700 text-center bg-gray-400 p-20 flex ">TOP SEARCH</div>
  					</div>
					  
				</div>

				<div class="flex flex-no-wrap bg-gray-200 flex justify-center ">
  					<div class="w-1/5 flex-none p-8">
  				<div class="text-gray-700 text-center bg-gray-400 p-20">TOP SEARCH</div>
  				</div>
  					<div class="w-1/5 flex-none p-8">
   				<div class="text-gray-700 text-center bg-gray-400 p-20">TOP SEARCG</div>
  				</div>
  					<div class="w-1/5 flex-none p-8">
    			<div class="text-gray-700 text-center bg-gray-400 p-20">TOP SEARCH</div>
  					</div>
					  <div class="w-1/5 flex-none p-8">
    			<div class="text-gray-700 text-center bg-gray-400 p-20">TOP SEARCH</div>
  					</div>
					  
			

				
				</div>
				
			</div>
		</>
	)	
}

export default Index