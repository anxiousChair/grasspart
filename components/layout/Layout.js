import Nav from "./Nav"
import Head from "next/head"

export default function Layout(props){
	return (
		<>
			<Head>
				<script src="js/holder.min.js"></script>
			</Head>
			<body>
				<Nav/>
				{props.children}
			</body>
			
		</>
	)
}