import Head from "next/head"


export default function Layout(props){
	return (
		<div>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<body>
				{props.children}
			</body>
		</div>
	)
}