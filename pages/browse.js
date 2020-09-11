import Layout from "../components/layout/Layout"

function Browse(props){
	
	
	return (
		<Layout>
			<div className="pt-16 w-full flex flex-col sm:flex-row flex-grow">
				<div id="buyer-list" className="sm:pl-5 sm:pr-16 py-4 w-full dbg-bg-gray-200 flex flex-col sm:flex-row sm:flex-wrap flex-grow justify-between items-center sm:items-start">
					<div id="item-card" className="border w-4/5 sm:w-2/5 shadow mb-8 py-3 px-5 rounded">
						<img className="w-full px-1 rounded mx-auto placeholder-black" />
						<h1 className="font-bold">Item Title</h1>
						<h1 className="font-bold">Price</h1>
						<p className="">Meetup loc</p>
						
					</div>
					<div id="item-card" className="border w-4/5 sm:w-2/5 shadow mb-8 py-3 px-5 rounded">
						<img className="w-full px-1 rounded mx-auto placeholder-black" />
						<h1 className="font-bold">Item Title</h1>
						<h1 className="font-bold">Price</h1>
						<p className="">Meetup loc</p>
						
					</div>
					<div id="item-card" className="border w-4/5 sm:w-2/5 shadow mb-8 py-3 px-5 rounded">
						<img className="w-full px-1 rounded mx-auto placeholder-black" />
						<h1 className="font-bold">Item Title</h1>
						<h1 className="font-bold">Price</h1>
						<p className="">Meetup loc</p>
						
					</div>
				</div>
				
				<div id="seller-list" className="sm:pl-5 sm:pr-16 py-4 w-full dbg-bg-gray-200 flex flex-col sm:flex-row sm:flex-wrap flex-grow justify-between items-center sm:items-start ">
					<div id="item-card" className="border w-4/5 sm:w-2/5 shadow mb-8 py-3 px-5 rounded">
						<img className="w-full px-1 rounded mx-auto placeholder-black" />
						<h1 className="font-bold">Item Title</h1>
						<h1 className="font-bold">Price</h1>
						<p className="">Meetup loc</p>
						
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Browse