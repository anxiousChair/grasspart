import Link from "next/link"

export default function Nav(){
	
	let dynamic_login = (<div className="w-auto flex flex-col sm:flex-row sm:mr-2 items-center">
					<Link href="/login"><a className="sm:mr-2 border px-2 py-1 rounded">Login</a></Link>
					<Link href="/register"><a className="hidden sm:inline-block">Register</a></Link>
				</div>)
	
	return (
		<>
			<nav className="fixed w-full flex sm:flex-row flex-shrink justify-between items-center bg-gray-800 text-gray-300 px-2 py-3">
				<div className="w-auto mr-2 sm:mr-6">
					<h1 className="text-sm sm:text-lg uppercase font-bold tracking-wide">GRASSPART</h1>
				</div>
				<div className="w-full mr-2 text-gray-700">
					<input placeholder="Search" className="sm:block mx-auto sm:mx-0 rounded  w-full sm:w-1/2 px-2 py-1"/>
				</div>
				{dynamic_login}
			</nav>
		</>
	)
}