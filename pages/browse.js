import Layout from "../components/layout/Layout"
import useSWR from "swr"


function Browse(props){
	const axios = require("axios")
	const fetcher = async(url)=> {
		let res = await axios.get(url)
		return res.data
		
	}
	
	const {data: items,error, isValidating, mutate} = useSWR("/api/fetchItems",fetcher)
	
	
	/*let data = items.map((item) =>
				(
				<div id="item-card" className="border w-4/5 sm:w-1/5 mx-1 shadow mb-8 py-3 rounded">
						<img className="w-full px-1 rounded mx-auto mb-3" src="holder.js/128x128"/>
						<h1 className="font-bold text-center text-gray-700 mb-2 text-xl">{item.item_name}</h1>
						<h1 className="font-bold text-center text-color-2 mb-2">PHP {item.item_price}</h1>
						<p className="text-center text-gray-700 mb-4">User: {item.user_username}</p>
				</div>
				)
			);*/
			
	return (
		<Layout>
			<div className="pt-16 w-full flex flex-col sm:flex-row flex-grow">
				<div id="buyer-list" className=" py-4 w-full dbg-bg-gray-200 flex flex-col sm:flex-row sm:flex-wrap flex-grow justify-between items-center sm:items-start">
					{error && <p onClick={()=>mutate()}>There seems to be an issue.</p> || !items && <p>Loading...</p> || items && items.map((item) => (
				<div id="item-card" className="border w-4/5 sm:w-1/5 mx-1 shadow mb-8 py-3 rounded">
						<img className="w-full px-1 rounded mx-auto mb-3" src="holder.js/128x128"/>
						<h1 className="font-bold text-center text-gray-700 mb-2 text-xl">{item.item_name}</h1>
						<h1 className="font-bold text-center text-color-2 mb-2">PHP {item.item_price}</h1>
						<p className="text-center text-gray-700 mb-4">User: {item.user_username}</p>
				</div>
				))}
				</div>
				
			</div>
		</Layout>
	)
}



export default Browse