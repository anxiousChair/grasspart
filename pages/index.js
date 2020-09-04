import Link from "next/link"

function Index(){
	return (
		<>
			<div>
			<nav className="flex justify-between flex-col md:flex-row bg-gray-800 text-gray-300 p-4">
				<div className="flex flex-shrink-0 md:mr-6">
					<h1 className="text-md uppercase text-bold border border-white rounded p-2 inline-block">Company Name</h1>
				</div>
				<div className="w-full flex items-center mt-2 md:mt-0">
					<div className="flex flex-col md:flex-row">
						<Link href="/browse"><a className="inline-block ml-3 md:ml-0 md:mr-4 mt-2 md:mt-0">Browse</a></Link>
						<a className="inline-block ml-3 md:ml-0 md:mr-4 mt-2 md:mt-0">About</a>
					</div>
				</div>
			</nav>
			
				<h1 className="text-4xl text-center p-8 text-gray-800">Company Name</h1>
				
				<div className="flex justify-center mb-16 text-xs md:text-base">
					<button className="border-b border-black px-2 md:px-3 py-1">Log in</button>
					<span className="mx-3 pt-1">or</span>
					<button className="border-b border-black px-2 md:px-3 py-1">Sign up</button>
				</div>
				
				<div className="max-w-xs md:max-w-md mt-16 mx-auto p-8 md:p-5 border border-gray-500 rounded">
					<p className="text-justify text-gray-800">As programmers, we use code to solve problems for our business. If we think harder, write less code, our business will bear less maintenance cost in the long run. In most cases, error handling code won’t provide business values. On the other side, the error-handling code is more complicated than happy path code and is difficult to get it right. </p>
				</div>
				
			</div>
		</>
	)	
}

export default Index