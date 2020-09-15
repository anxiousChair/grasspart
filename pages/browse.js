import Layout from "../components/layout/Layout"

function Browse(props){
	
	let data = props.data.map((item) =>
				(
				<div id="item-card" className="border w-4/5 sm:w-1/5 mx-1 shadow mb-8 py-3 rounded">
						<img className="w-full px-1 rounded mx-auto mb-3" src="holder.js/128x128"/>
						<h1 className="font-bold text-center text-gray-700 mb-2 text-xl">{item.item_name}</h1>
						<h1 className="font-bold text-center text-color-2 mb-2">PHP {item.item_price}</h1>
						<p className="text-center text-gray-700 mb-4">User: {item.user_username}</p>
				</div>
				)
			);
	return (
		<Layout>
			<div className="pt-16 w-full flex flex-col sm:flex-row flex-grow">
				<div id="buyer-list" className=" py-4 w-full dbg-bg-gray-200 flex flex-col sm:flex-row sm:flex-wrap flex-grow justify-between items-center sm:items-start">
					{data}
				</div>
				
			</div>
		</Layout>
	)
}

export async function getStaticProps(ctx){
	const axios = require("axios")
	const data = await axios.get("http://localhost:3000/api/fetchItems")
	console.log(data.data[1])
	
	return {props:{data:data.data}}
}

export default Browse