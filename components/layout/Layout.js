import Nav from "./Nav"
import Head from "next/head"

export default function Layout(props){
	return (
		<>
			<Head>
			
			</Head>
				{props.nav && <Nav/>}
				{props.children}
			{props.scripts && props.scripts.map((item)=><script src={"js/"+item}></script>)}
			
		</>
	)
}