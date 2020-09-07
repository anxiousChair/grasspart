import Nav from "./Nav"
import Head from "next/head"

export default function Layout(props){
	return (
		<>
			<Head/>
			<body>
				<Nav/>
				{props.children}
			</body>
		</>
	)
}