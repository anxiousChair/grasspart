import Layout from "../components/layout/Layout"

function Browse(props){
	
	
	return (
		<Layout>
			<div className="w-full flex flex-col sm:flex-row flex-grow">
				<div id="buyer-list" className="py-4 w-full bg-gray-200 flex flex-col sm:flex-row sm:flex-wrap flex-grow justify-between items-center">
					<div id="item-card" className="w-4/5 shadow-md">
					<img className="h-48"/>						
					</div>
				</div>
				
				<div className="w-full bg-gray-300 flex flex-col sm:flex-row sm:flex-wrap flex-grow justify-between items-center">
					<div id="item-card" className="w-1/2 bg-gray-800">
						<h1>Title</h1>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Browse