import Nav from "./Nav"
import Head from "next/head"

export default function Layout(props){
	return (
		<>
			<Head>
			
			</Head>
			<body>
				{props.nav && <Nav/>}
				{props.children}
			</body>
			{props.scripts && props.scripts.map((item)=><script src={"js/"+item}></script>)}
		</>
	)
}